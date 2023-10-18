<template>
  <section class="galleryDeals">
    <div class="container">
      <h3 class="head3">Gallery</h3>
      <ul class="shuffle">
        <div class="d-flex flex-wrap align-items-center">
          <li class="filter-btn" @click="active = 'All'" :class="active == 'All' ? 'active' : ''">
            All
          </li>
          <RouterLink
            to="/ShopByCategory/electronics"
            class="filter-btn"
            @click="active = 'electronics'"
            :class="active == 'electronics' ? 'active' : ''"
            >Electronics</RouterLink
          >
          <RouterLink
            to="/ShopByCategory/jewelery"
            class="filter-btn"
            @click="active = 'jewelery'"
            :class="active == 'jewelery' ? 'active' : ''"
          >
            Jewelery</RouterLink
          >
          <RouterLink
            to="/ShopByCategory/men's clothing"
            class="filter-btn"
            @click="active = 'men\'s clothing'"
            :class="active == 'men\'s clothing' ? 'active' : ''"
          >
            Men's Clothing</RouterLink
          >
          <RouterLink
            to="/ShopByCategory/women's clothing"
            class="filter-btn"
            @click="active = 'women\'s clothing'"
            :class="active == 'women\'s clothing' ? 'active' : ''"
            >Women's Clothing</RouterLink
          >
        </div>
        <form class="d-flex mb-4">
          <div class="search_field">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="searchText"
            />
            <i class="bi bi-search"></i>
          </div>
        </form>
      </ul>
      <div class="gallery">
        <div class="item" v-for="item in category" :key="item.id" data-aos="fade-up">
          <div class="heart" @click="item.like = !item.like">
            <i v-if="!item.like" class="bi bi-heart"></i>
            <i v-if="item.like" class="bi bi-heart-fill"></i>
          </div>
          <div class="deals_items">
            <div>
              <RouterLink
                :to="{
                  path: '/ItemView',
                  name: 'ItemView',
                  component: ItemView,
                  params: { id: item.id }
                }"
                :item="item"
              >
                <div class="item_img">
                  <img :src="item.image" alt="" />
                </div>
              </RouterLink>
              <div class="item_text">
                <div class="item_description">
                  <h5 class="title">{{ item.title }}</h5>
                  <p class="description">{{ item.description }}</p>
                  <div class="starts">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    (120)
                  </div>
                  <button
                    v-text="item.inCart ? 'Added to cart' : 'Add to cart'"
                    @click="
                      item.inCart = true;
                      item.qty = 1;
                    "
                    class="addToCart"
                    :class="item.inCart ? 'Added' : ''"
                  ></button>
                </div>
                <div class="item_price">${{ item.price }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// store
import { getDataProduct } from '../stores/counter';
import { storeToRefs } from 'pinia';

const getItems = getDataProduct();
const { listItems } = storeToRefs(getItems);
// end store
const route = useRoute();
let active = ref(route.params.category);
let searchText = ref('');

let category = computed(() => {
  let categoryPath = ref(route.params.category);
  return listItems.value
    .filter((item) => {
      if (item.category === categoryPath.value) {
        return item;
      } else if (active.value === 'All') {
        return item;
      }
    })
    .filter((item) => {
      // Filter based on search text
      if (searchText.value === '') {
        return item;
      } else {
        return item.title.toLowerCase().includes(searchText.value.toLowerCase());
      }
    });
});
// import AOS
import AOS from 'aos';
onMounted(() => {
  AOS.init();
});
</script>
<style lang="scss" scoped>
@import "../assets/var.scss";
.galleryDeals {
  h3 {
    padding-top: 50px;
  }
  .search_field {
    position: relative;

    .form-control {
      border-radius: 30px;
      min-width: 200px;

      @media (max-width: 768px) {
        min-width: auto;
      }

      padding: 10px 10px 10px 35px;
    }

    i {
      position: absolute;
      padding: 10px;
      min-width: 40px;
      top: 0;
      left: 0;
    }
  }

  .shuffle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin-top: 50px;
    margin-bottom: 0 !important;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }

    li,
    a {
      padding: 10px 20px;
      color: #231f1e;
      font-size: 14px;
      font-weight: 600;
      border: 1px solid #c5c5c5;
      border-radius: 30px;
      margin-right: 10px;
      margin-bottom: 10px;
      text-decoration: none;
      cursor: pointer;

      &.active {
        background-color: $basic;
        color: #fff;
        border: transparent;
      }
    }
  }

  .gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    margin-bottom: 50px;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-row-gap: 10px;
    }

    @media (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 479px) {
      grid-template-columns: 1fr;
    }

    .item {
      position: relative;

      .heart {
        position: absolute;
        top: 25px;
        right: 25px;
        font-size: 20px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        background: #f5f6f6;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .bi-heart-fill {
          color: $second;
        }

        .bi-heart {
          color: #4f4f4f;
        }
      }

      .deals_items {
        display: flex;
        list-style: none;
        justify-content: center;
        margin-top: 50px;

        .item_img {
          width: 250px;
          height: 250px;
          margin: auto;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .item_text {
          display: flex;

          .item_description {
            .title,
            .description {
              text-overflow: ellipsis;
              /* will make [...] at the end */
              white-space: nowrap;
              /* paragraph to one line */
              overflow: hidden;
              /* older browsers */
            }

            .title {
              width: 150px;
            }

            .description {
              width: 200px;
              font-size: 13px;
            }

            .starts {
              font-size: 14px;
              text-align: left;
              color: rgb(34, 181, 34);
            }

            .addToCart {
              display: block;
              font-weight: 600;
              background-color: transparent;
              border: 1px solid #000;
              border-radius: 30px;
              padding: 8px 16px;
              margin-top: 20px;
              transition: all 0.3s ease-in-out;

              &:hover {
                background-color: $basic;
                color: #fff;
              }

              &.Added {
                background-color: $basic;
                color: #fff;
              }
            }
          }

          .item_price {
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
