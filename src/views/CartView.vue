<template>
  <div class="cart_page">
    <div class="Shopping_cart">
      <div class="items_inCart">
        <div class="d-flex justify-content-between">
          <h5 class="head3">Shopping Cart</h5>
          <h5 class="head3">Item Count : ({{ itemCount }})</h5>
        </div>
        <hr />
        <h2 class="empty_cart" v-if="filterd.length == 0">
          Your Cart Is Empty!! You Need To Add Items :3
        </h2>
        <div class="items" v-for="item in filterd" :key="item.id">
          <div class="image">
            <img :src="item.image" alt="" />
          </div>
          <div class="item_content">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="desc">
              {{ item.description }}
            </div>
            <div class="color">
              <p>Color : Unknown</p>
            </div>
            <div class="size">Size : Unknown</div>
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              (120)
            </div>
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
              <div class="delete">
                <i
                  @click="
                    item.inCart = false;
                    item.qty = 0;
                  "
                  class="bi bi-trash"
                ></i>
              </div>
              <div class="heart" @click="item.like = !item.like">
                <i v-if="!item.like" class="bi bi-heart"></i>
                <i v-if="item.like" class="bi bi-heart-fill"></i>
              </div>
            </div>
          </div>

          <div class="price">${{ item.price }}</div>
          <hr style="width: 100%" />
        </div>
      </div>
    </div>

    <div class="Subtotal_ads">
      <div class="itemCount">
        <h5><b> How You Will Pay? </b></h5>
        <div class="Payments">
          <div class="cards">
            <div class="Payments_img">
              <img src="../assets/Payments/Payments2.png" alt="" />
            </div>
            <div class="Payments_img">
              <img src="../assets/Payments/Payments3.png" alt="" />
            </div>
          </div>
          <div class="cards">
            <div class="Payments_img">
              <img src="../assets/Payments/Payments6.png" alt="" />
            </div>
          </div>
          <div class="cards">
            <div class="Payments_img">
              <img src="../assets/Payments/Payments5.png" alt="" />
            </div>
          </div>
          <div class="cards">
            <div class="Payments_img">
              <img src="../assets/Payments/Payments8.png" alt="" />
            </div>
          </div>
        </div>
        <div class="price-line">
          <div class="Subtotal">Item(s) Total</div>
          <p class="dollars">${{ Subtotal.toFixed(2) }}</p>
        </div>
        <div class="price-line">
          <div class="Subtotal">Shop Disscount</div>
          <p class="dollars">${{ disscont }}</p>
        </div>
        <hr />
        <div class="price-line">
          <div class="Subtotal">Subtotal</div>
          <p class="dollars">${{ Subtotal.toFixed(2) - disscont }}</p>
        </div>
        <div class="price-line">
          <div class="Subtotal">Shipping</div>
          <p class="dollars">${{ shipping }}</p>
        </div>
        <div class="price-line">
          <div class="Subtotal">Tax *</div>
          <p class="dollars">${{ tax }}</p>
        </div>
        <hr />
        <div class="price-line">
          <div class="Subtotal">Total</div>
          <p class="dollars">${{ Subtotal.toFixed(2) - disscont + shipping + tax }}</p>
        </div>
        <div class="gift"><input type="checkbox" /> This order contains a gift</div>
        <RouterLink to="/CartCheckout">
          <button>Proceed to checkout</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
//store
import { ref } from 'vue';
import { getDataProduct } from '../stores/counter';
import { storeToRefs } from 'pinia';

const getItems = getDataProduct();
const { filterd, Subtotal, itemCount } = storeToRefs(getItems);
//end store
let disscont = ref(5);
let shipping = ref(5);
let tax = ref(5);
</script>
<style lang="scss" scoped>
@import '../assets/var.scss';
.cart_page {
  display: flex;
  background-color: #eee;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  .Shopping_cart {
    width: 70%;
    padding: 20px;
    background-color: #eee;

    @media (max-width: 768px) {
      width: 100%;
      padding: 10px;
    }

    .items_inCart {
      background: #fff;
      display: flow-root;
      max-height: calc(100vh - 154px);
      overflow-y: scroll;
      @media (max-width: 768px) {
        max-height: calc(100vh - (154px + 220px));
      }

      .head3 {
        padding: 10px 40px;
        margin-top: 0.5rem;
      }

      .empty_cart {
        padding: 10px 40px;
      }

      .items {
        padding: 20px 40px;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;

        @media (max-width: 768px) {
          flex-direction: column;
          font-size: 12px;
          padding: 0;
        }

        .image {
          width: 9rem;
          height: 9rem;

          @media (max-width: 768px) {
            padding: 20px;
          }

          img {
            width: 100%;
            height: 100%;
          }
        }

        .item_content {
          width: calc(100% - (9rem + 100px));
          padding: 20px;

          @media (max-width: 768px) {
            width: 100%;
          }

          .title {
            font-size: 18px;
            font-weight: 700;
          }

          .desc {
            font-size: 14px;
          }

          .title,
          .desc {
            text-overflow: ellipsis;
            /* will make [...] at the end */
            white-space: nowrap;
            /* paragraph to one line */
            overflow: hidden;
            /* older browsers */
          }

          .stars {
            font-size: 13px;
          }

          .color {
            font-size: 13px;

            p {
              margin: 0;
            }
          }

          .size {
            font-size: 13px;

            p {
              margin: 0;
            }
          }

          .wrapper {
            margin-top: 10px;
            display: flex;

            .quantity {
              justify-content: flex-start;
              margin-right: 10px;
            }

            .delete {
              font-size: 1.2rem;
              margin-right: 10px;
              cursor: pointer;
            }

            .heart {
              font-size: 1.2rem;
              cursor: pointer;

              .bi-heart-fill {
                color: $second;
              }

              .bi-heart {
                color: #4f4f4f;
              }
            }
          }
        }

        .price {
          color: $basic;
          width: 100px;
          text-align: center;
          font-weight: 700;
          font-size: 20px;
        }
      }
    }
  }

  .Subtotal_ads {
    width: 30%;
    padding: 20px;
    background-color: #eee;

    @media (max-width: 768px) {
      width: 100%;
      padding: 10px;
    }

    .itemCount {
      background-color: #fff;
      padding: 20px;

      .price-line {
        display: flex;
        justify-content: space-between;
        .Subtotal {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 5px;
        }
        .dollars {
          margin: 0;
          color: $basic;
        }
      }
      .gift {
        display: flex;
        font-size: 14px;

        input {
          margin-right: 5px;
        }
      }
      hr {
        margin: 0.4rem 0;
      }

      button {
        font-size: 16px;
        font-weight: 500;
        padding: 10px 20px;
        border-radius: 30px;
        border: none;
        background-color: $basic;
        color: #fff;
        margin-top: 20px;
      }
      .Payments {
        margin-bottom: 20px;
        .cards {
          display: flex;

          @media (max-width: 768px) {
          }
          .Payments_img {
            width: 58px;
            height: 36px;
            display: flex;
            padding: 15px;
            margin: 4px;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border: 1px solid #d9d9d9;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>
