<template>
  <div class="item-details">
    <div class="item_grid" v-for="item in singleItem" :key="item.id" data-aos="fade-up">
      <div class="item_img">
        <img :src="item.image" alt="" />
      </div>
      <div class="item_content">
        <div class="description">
          <h5>{{ item.title }}</h5>
          <p>{{ item.description }}</p>
          <div class="stars">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            (120)
          </div>
          <p class="price">${{ item.price }}</p>
        </div>
        <hr />
        <div class="item_colors">
          <p>Choose a color</p>
          <div class="circles">
            <div
              @click="activeColorFunc('color1')"
              :class="activeColor.includes('color1') ? 'active' : ''"
              class="circle"
            >
              <span></span>
            </div>
            <div
              @click="activeColorFunc('color2')"
              :class="activeColor.includes('color2') ? 'active' : ''"
              class="circle"
            >
              <span></span>
            </div>
            <div
              @click="activeColorFunc('color3')"
              :class="activeColor.includes('color3') ? 'active' : ''"
              class="circle"
            >
              <span></span>
            </div>
            <div
              @click="activeColorFunc('color4')"
              :class="activeColor.includes('color4') ? 'active' : ''"
              class="circle"
            >
              <span></span>
            </div>
            <div
              @click="activeColorFunc('color5')"
              :class="activeColor.includes('color5') ? 'active' : ''"
              class="circle"
            >
              <span></span>
            </div>
          </div>
        </div>
        <hr />
        <div class="item_sizes">
          <p>Choose a size</p>
          <div class="circles">
            <div
              @click="activeSizesFunc('size1')"
              :class="activeSize.includes('size1') ? 'active' : ''"
              class="circle"
            >
              <span>XL</span>
            </div>
            <div
              @click="activeSizesFunc('size2')"
              :class="activeSize.includes('size2') ? 'active' : ''"
              class="circle"
            >
              <span>L</span>
            </div>
            <div
              @click="activeSizesFunc('size3')"
              :class="activeSize.includes('size3') ? 'active' : ''"
              class="circle"
            >
              <span>M</span>
            </div>
            <div
              @click="activeSizesFunc('size4')"
              :class="activeSize.includes('size4') ? 'active' : ''"
              class="circle"
            >
              <span>S</span>
            </div>
            <div
              @click="activeSizesFunc('size5')"
              :class="activeSize.includes('size5') ? 'active' : ''"
              class="circle"
            >
              <span>XS</span>
            </div>
          </div>
        </div>

        <hr />
        <div class="qty_buy">
          <div class="wrapper">
            <div class="quantity">
              <span
                @click="
                  item.qty > 1 ? (item.qty = parseFloat(item.qty) - 1) : (item.qty = item.qty)
                "
                class="quantity__minus"
                ><span>-</span></span
              >
              <input
                name="quantity"
                type="text"
                class="quantity__input"
                v-model="item.qty"
                min="1"
                onkeypress="return event.charCode >= 49"
              />
              <span @click="item.qty = parseFloat(item.qty) + 1" class="quantity__plus"
                ><span>+</span></span
              >
            </div>
            <p>Only 12 Item Left Dont Miss It!</p>
          </div>

          <div class="buy">
            <button class="buy_now">Buy Now</button>
            <button
              v-text="item.inCart ? 'Added to cart' : 'Add to cart'"
              @click="
                item.inCart = true;
                item.qty == 0 ? (item.qty = 1) : (item.qty = item.qty);
              "
              class="addToCart"
              :class="item.inCart ? 'Added' : ''"
            ></button>
          </div>
        </div>
        <hr />
        <div class="delivery">
          <div class="free_delivery">
            <i class="bi bi-truck"></i>
            <div>
              <div class="free_delivery_title">Free Delivery</div>
              <a href="">
                <p>Enter Your Postal Code For Delivery Availabilty</p>
              </a>
            </div>
          </div>
          <div class="return_delivery">
            <i class="bi bi-clipboard"></i>
            <div>
              <div class="return_delivery_title">Return Delivery</div>

              <p>Free 30days Delivery Returns <a href=""> details</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div class="related-items">
    <div class="container">
      <h3 class="head3">Related Items</h3>
      <swiper
        data-aos="fade-up"
        class="swiper"
        :pagination="{
          type: 'progressbar'
        }"
        :modules="modules"
        :breakpoints="breakpoints.swiperOptions.breakpoints"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="item" v-for="item in relatedItems" :key="item.id">
          <div class="heart" @click="item.like = !item.like">
            <i v-if="!item.like" class="bi bi-heart"></i>
            <i v-if="item.like" class="bi bi-heart-fill"></i>
          </div>
          <div class="carousel__item deals_items">
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
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="review">
    <CommentSection></CommentSection>
  </div>
</template>

<script setup>
import CommentSection from '../components/CommentSection.vue';
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper';
const modules = [Pagination];
// end Import Swiper styles
import { ref, computed, onMounted, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

// swiper configuration
defineComponent({
  name: 'BreakPoints',
  components: {
    SwiperSlide,
    Swiper
  }
});

const breakpoints = ref({
  swiperOptions: {
    breakpoints: {
      // 700px and up
      700: {
        slidesPerView: 2
      },
      // 1024 and up
      1024: {
        slidesPerView: 3
      }
    }
  }
});
// end swiper configuration

const route = useRoute();
// store
import { getDataProduct } from '../stores/counter';
import { storeToRefs } from 'pinia';

const getItems = getDataProduct();
const { listItems } = storeToRefs(getItems);
// end store

// import AOS
import AOS from 'aos';
onMounted(() => {
  AOS.init();
});

//variables
let activeColor = ref([]);
const activeColorFunc = (e) => {
  let colorIndex = activeColor.value.indexOf(e);
  if (activeColor.value.includes(e)) {
    activeColor.value.splice(colorIndex, 1);
  } else {
    activeColor.value.push(e);
  }
};

let activeSize = ref([]);
const activeSizesFunc = (e) => {
  let sizeIndex = activeSize.value.indexOf(e);
  if (activeSize.value.includes(e)) {
    activeSize.value.splice(sizeIndex, 1);
  } else {
    activeSize.value.push(e);
  }
};
// ((( NOTE!!! : THIS IS NOT THE RIGHT WAY TO DO IT )))
// THE RIGHT WAY IS TO FETCH PRODUCT FROM API AND USE ROUTE.PARAMS.ID AS VARAIABLE IN API LINK.
// i used this way because im using fake api and i added 2 fields to it ,if i use the way above i need to define the 2 fields again
// and thats will be a problem cuz all thibgs u do in home page or else will not be added to this page.
let singleItem = computed(() => {
  return listItems.value.filter((item) => {
    if (item.id == route.params.id) {
      return item;
    }
  });
});

let relatedItems = computed(() => {
  return listItems.value.filter((item) => {
    if (item.category ==  singleItem.value[0].category) {
      return item;
    }
  });
});
</script>

<style lang="scss" scoped>
@import '../assets/var.scss';
hr {
  margin: 1.5rem 0;
}

.item-details {
  padding: 100px;

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 479px) {
    padding: 30px;
  }

  .item_grid {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 50px;

    @media (max-width: 1050px) {
      grid-template-columns: 1fr;
      grid-row-gap: 27px;
    }

    .item_img {
      width: 500px;
      height: 500px;

      @media (max-width: 768px) {
        width: 300px;
        height: 300px;
      }

      @media (max-width: 479px) {
        width: 200px;
        height: 200px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .item_content {
      .description {
        .stars {
          font-size: 14px;
          text-align: left;
          color: rgb(34, 181, 34);
        }

        .price {
          color: $basic;
          font-size: 18px;
          font-weight: 700;
          margin-top: 20px;
        }
      }

      .item_colors {
        p {
          font-weight: 600;
          font-size: 18px;
        }

        .circles {
          display: flex;

          .circle {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 33px;
            height: 33px;
            border: 2px solid transparent;
            border-radius: 50%;
            margin: 5px;
            cursor: pointer;

            &.active {
              border: 2px solid $second;
            }

            span {
              display: block;
              width: 25px;
              height: 25px;
              border-radius: 50%;
            }

            &:nth-child(1) {
              span {
                background-color: black;
              }
            }

            &:nth-child(2) {
              span {
                background-color: pink;
              }
            }

            &:nth-child(3) {
              span {
                background-color: green;
              }
            }

            &:nth-child(4) {
              span {
                background-color: blue;
              }
            }

            &:nth-child(5) {
              span {
                background-color: gray;
              }
            }
          }
        }
      }

      .item_sizes {
        p {
          font-weight: 600;
          font-size: 18px;
        }

        .circles {
          display: flex;
          align-items: center;

          .circle {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #eee;
            border: 2px solid transparent;
            border-radius: 50%;
            margin: 5px;
            cursor: pointer;

            &.active {
              border: 3px solid $second;
            }

            span {
              display: flex;
              justify-content: center;
              font-weight: 500;
            }

            &:nth-child(1) {
              width: 73px;
              height: 73px;
              font-size: 30px;
            }

            &:nth-child(2) {
              width: 63px;
              height: 63px;
              font-size: 25px;
            }

            &:nth-child(3) {
              width: 53px;
              height: 53px;
              font-size: 20px;
            }

            &:nth-child(4) {
              width: 43px;
              height: 43px;
              font-size: 15px;
            }

            &:nth-child(5) {
              width: 33px;
              height: 33px;
              font-size: 10px;
            }
          }
        }
      }
      .qty_buy {
        .wrapper {
          display: flex;
          align-items: center;

          .quantity {
            margin-right: 20px;

            .quantity__minus,
            .quantity__plus {
              width: 50px;
              height: 31px;
            }

            .quantity__input {
              height: 31px;
            }
          }

          p {
            margin: 0;

            @media (max-width: 479px) {
              font-size: 12px;
            }
          }
        }

        .buy {
          margin-top: 20px;

          .buy_now,
          .addToCart {
            font-size: 16px;
            font-weight: 600;
            padding: 10px 40px;
            border-radius: 30px;

            @media (max-width: 479px) {
              font-size: 14px;
              padding: 10px 20px;
            }
          }

          .buy_now {
            margin-right: 20px;
            background-color: $basic;
            color: #fff;
            border: none;
          }

          .addToCart {
            background-color: transparent;
            border: 1px solid #000;
            transition: all 0.3s ease-in-out;

            &.Added {
              background-color: $basic;
              color: #fff;
              border-color: $basic;
            }

            &:hover {
              background-color: $basic;
              border-color: $basic;
              color: #fff;
            }
          }
        }
      }

      .delivery {
        .free_delivery {
          display: flex;

          i {
            color: $second;
            margin-right: 10px;
          }

          .free_delivery_title {
            font-size: 14px;
            font-weight: 700;
          }

          a,
          p {
            color: #333;
            font-size: 12px;
          }
        }

        .return_delivery {
          display: flex;

          i {
            color: $second;
            margin-right: 10px;
          }

          .return_delivery_title {
            font-size: 14px;
            font-weight: 700;
          }

          a,
          p {
            color: #333;
            font-size: 12px;
          }
        }
      }
    }
  }
}
.related-items {
  .item {
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
            color: $second;
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
              border-color: $basic;
              color: #fff;
            }

            &.Added {
              background-color: $basic;
              border-color: $basic;
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
</style>
