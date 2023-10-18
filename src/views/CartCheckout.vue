<template>
  <div class="checkout" style="background-color: #eee">
    <transition name="fade" appear>
      <div class="col">
        <div class="row">
          <div class="col-lg-7 card p-4 items-section">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div>
                <p class="mb-0">You have {{ itemCount }} items in your cart</p>
              </div>
            </div>
            <div class="items" v-for="item in filterd" :key="item.id">
              <div class="image">
                <img :src="item.image" alt="" />
              </div>
              <div class="item_content">
                <div class="title">
                  {{ item.title }}
                </div>
              </div>

              <div class="price">${{ item.price }}</div>
              <hr style="width: 100%" />
            </div>
          </div>
          <div class="col-lg-5 card-details card p-4">
            <div class="card p-2">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h5 class="mb-0">Card details</h5>
                </div>

                <p class="small mb-2">Card type</p>
                <div class="Payments">
                  <div class="cards">
                    <div class="Payments_img">
                      <img src="../assets/Payments/Payments1.png" alt="" />
                    </div>
                    <div class="Payments_img">
                      <img src="../assets/Payments/Payments2.png" alt="" />
                    </div>
                    <div class="Payments_img">
                      <img src="../assets/Payments/Payments3.png" alt="" />
                    </div>
                    <div class="Payments_img">
                      <img src="../assets/Payments/Payments4.png" alt="" />
                    </div>
                    <div class="Payments_img">
                      <img src="../assets/Payments/Payments5.png" alt="" />
                    </div>
                    <div class="Payments_img">
                      <img src="../assets/Payments/Payments6.png" alt="" />
                    </div>
                    <div class="Payments_img">
                      <img src="../assets/Payments/Payments7.png" alt="" />
                    </div>
                    <div class="Payments_img">
                      <img src="../assets/Payments/Payments8.png" alt="" />
                    </div>
                  </div>
                </div>

                <form class="mt-4">
                  <div class="form-outline form-white mb-2">
                    <label class="form-label" for="typeName">Cardholder's Name</label>
                    <input
                      type="text"
                      id="typeName"
                      class="form-control"
                      siez="17"
                      placeholder="Cardholder's Name"
                    />
                  </div>

                  <div class="form-outline form-white mb-2">
                    <label class="form-label" for="typeText">Card Number</label>
                    <input
                      type="text"
                      id="typeText"
                      class="form-control"
                      siez="17"
                      placeholder="1234 5678 9012 3457"
                      minlength="19"
                      maxlength="19"
                    />
                  </div>

                  <div class="row mb-2">
                    <div class="col-md-6">
                      <div class="form-outline">
                        <label class="form-label" for="typeExp">Expiration</label>
                        <input
                          type="text"
                          id="typeExp"
                          class="form-control"
                          placeholder="MM/YYYY"
                          size="7"
                          minlength="7"
                          maxlength="7"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-outline">
                        <label class="form-label" for="typeText">Cvv</label>
                        <input
                          type="password"
                          id="typeText"
                          class="form-control"
                          placeholder="&#9679;&#9679;&#9679;"
                          minlength="3"
                          maxlength="3"
                        />
                      </div>
                    </div>
                  </div>
                </form>

                <div class="d-flex justify-content-between mt-4 price-info">
                  <p class="mb-2">Subtotal</p>
                  <p class="mb-2">${{ Subtotal }}</p>
                </div>

                <div class="d-flex justify-content-between price-info">
                  <p class="mb-2">Shipping</p>
                  <p class="mb-2">$20.00</p>
                </div>

                <div class="d-flex justify-content-between mb-2 price-info">
                  <p class="mb-2">Total(Incl. taxes)</p>
                  <p class="mb-2">${{ Subtotal + 20 }}</p>
                </div>

                <button @click="order" type="button" class="order btn btn-info btn-block btn-lg">
                  <div class="d-flex justify-content-between">
                    <span>Place Order</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="fade-container">
      <div>
        <p class="name"></p>
        <div class="img-wrap"><img src="../assets/logo-removebg-preview.png" alt="" /></div>
        <div class="Order-Successful">
          <i class="bi bi-check-circle-fill"></i>
          <h4>Order Successful</h4>
          <p>Order Time : 3 days</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
//store
import { getDataProduct } from '../stores/counter';
import { storeToRefs } from 'pinia';

const getItems = getDataProduct();
const { filterd, Subtotal, itemCount } = storeToRefs(getItems);

const order = () => {
  const item = document.querySelector('.items-section');
  const cardDetails = document.querySelector('.card-details');
  const fadeContainer = document.querySelector('.fade-container');
  item.style.opacity = '0';
  cardDetails.style.opacity = '0';
  fadeContainer.style.opacity = '1';
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>
<style lang="scss" scoped>
@import "../assets/var.scss";
.checkout {
  position: relative;
  background-color: #eee;
  padding: 20px;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.8s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .items-section {
    max-height: calc(100vh - 154px);
    overflow-y: scroll;
    overflow-x: hidden;
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
  .card-details {
    background-color: #fff;
    color: #333 !important;
    .Payments {
      .cards {
        display: grid;
        grid-template-columns: 58px 58px 58px 58px;
        row-gap: 20px;
        column-gap: 10px;
        @media (max-width: 768px) {
          column-gap: 5px;
        }
        .Payments_img {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          padding: 7px;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
        }
      }
    }
    .price-info {
      font-size: 18px;
      font-weight: 700;
    }
    .order {
      font-size: 16px;
      font-weight: 500;
      padding: 10px 20px;
      border-radius: 30px;
      border: none;
      background-color: $basic;
      color: #fff;
      margin-top: 20px;
    }
  }
  .fade-container {
    transition: all 1s ease;
    opacity: 0;
    .name {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 25%;
      font-size: 30px;
      color: $second !important;
      font-weight: bold;
      text-wrap: nowrap;
      text-align: center;
    }
    .img-wrap {
      width: 200px;
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 10%;
      img {
        width: 100%;
      }
    }
    h1 {
      font-size: 18.5vw;
      font-weight: 800;
      z-index: -1;
      position: absolute;
      opacity: 0.5;
      color: #e67068 !important;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 45%;
    }
    .Order-Successful {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 30%;
      text-align: center;
      text-wrap: nowrap;
      i {
        font-size: 70px;
        color: $basic;
      }
      h4 {
        font-weight: bold;
      }
      p {
        font-weight: 500;
        font-size: 14px;
        color: #979797 !important;
      }
    }
  }
}
</style>
