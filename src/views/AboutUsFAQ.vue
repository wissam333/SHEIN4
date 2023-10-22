<template>
  <div class="faq">
    <div class="container d-flex align-items-center justify-content-around">
      <div class="faq-text" data-aos="fade-right" data-aos-duration="1000">
        <h3>FAQs</h3>
        <p>
          Have a qustion? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ad
          accusantium repellat, quasi repudiandae nobis cumque quaerat corporis a nemo, consequuntur
          sit. Eum ea praesentium qui magnam, tempore reiciendis sint.
        </p>
      </div>
      <div class="faq-image" data-aos="fade-left" data-aos-duration="1000">
        <img src="../assets/FAQ.png" alt="" />
      </div>
    </div>
  </div>
  <div class="container mt-4">
    <div class="answers d-flex">
      <div class="faq-filter">
        <ul>
          <li @click="activeFAQ = 'About Us'" :class="activeFAQ == 'About Us' ? 'active' : ''">
            <p>About Us</p>
          </li>
          <li @click="activeFAQ = 'Delivery'" :class="activeFAQ == 'Delivery' ? 'active' : ''">
            <p>Delivery</p>
          </li>
          <li @click="activeFAQ = 'Shipping'" :class="activeFAQ == 'Shipping' ? 'active' : ''">
            <p>Shipping</p>
          </li>
          <li
            @click="activeFAQ = 'Privacy And Policy'"
            :class="activeFAQ == 'Privacy And Policy' ? 'active' : ''"
          >
            <p>Privacy And Policy</p>
          </li>
        </ul>
      </div>
      <div class="faq-qustions">
        <div class="qustions-container">
          <MDBAccordion v-model="activeItem">
            <MDBAccordionItem
              v-show="activeFAQ == 'About Us'"
              headerTitle="Accordion Item #1"
              collapseId="collapseOne"
            >
              <strong>This is the first item's accordion body.</strong> It is shown by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the MDBAccordionItem, though the transition does limit overflow.
            </MDBAccordionItem>
            <MDBAccordionItem
              v-show="activeFAQ == 'About Us'"
              headerTitle="Accordion Item #2"
              collapseId="collapseTwo"
            >
              <strong>This is the second item's accordion body.</strong>
              It is hidden by default, until the collapse plugin adds the appropriate classes that
              we use to style each element. These classes control the overall appearance, as well as
              the showing and hiding via CSS transitions. You can modify any of this with custom CSS
              or overriding our default variables. It's also worth noting that just about any HTML
              can go within the MDBAccordionItem, though the transition does limit overflow.
            </MDBAccordionItem>
            <MDBAccordionItem
              v-show="activeFAQ == 'About Us'"
              headerTitle="Accordion Item #3"
              collapseId="collapseThree"
            >
              <strong>This is the third item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the MDBAccordionItem, though the transition does limit overflow.
            </MDBAccordionItem>
            <MDBAccordionItem
              v-show="activeFAQ == 'Delivery'"
              headerTitle="Accordion Item #4"
              collapseId="collapsefour"
            >
              <strong>This is the third item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the MDBAccordionItem, though the transition does limit overflow.
            </MDBAccordionItem>
            <MDBAccordionItem
              v-show="activeFAQ == 'Delivery'"
              headerTitle="Accordion Item #5"
              collapseId="collapsefive"
            >
              <strong>This is the third item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the MDBAccordionItem, though the transition does limit overflow.
            </MDBAccordionItem>
            <MDBAccordionItem
              v-show="activeFAQ == 'Shipping'"
              headerTitle="Accordion Item #6"
              collapseId="collapsesix"
            >
              <strong>This is the third item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the MDBAccordionItem, though the transition does limit overflow.
            </MDBAccordionItem>
            <MDBAccordionItem
              v-show="activeFAQ == 'Shipping'"
              headerTitle="Accordion Item #7"
              collapseId="collapseseven"
            >
              <strong>This is the third item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the MDBAccordionItem, though the transition does limit overflow.
            </MDBAccordionItem>
            <MDBAccordionItem
              v-show="activeFAQ == 'Privacy And Policy'"
              headerTitle="Accordion Item #8"
              collapseId="collapseeight"
            >
              <strong>This is the third item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the MDBAccordionItem, though the transition does limit overflow.
            </MDBAccordionItem>
          </MDBAccordion>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MDBAccordion, MDBAccordionItem } from 'mdb-vue-ui-kit';
import { ref, onMounted } from 'vue';
const activeItem = ref('collapseOne');
let activeFAQ = ref('About Us');
// import AOS
import AOS from 'aos';
onMounted(() => {
  AOS.init();
});
</script>

<style lang="scss" scoped>
@import '../assets/var.scss';
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.faq {
  background-image: url('../assets/background.webp');
  background-position: center;
  background-size: cover;
  .faq-text {
    width: 50%;
    @media (max-width: 768px) {
      display: none;
    }
    h3 {
      font-size: 50px;
      font-weight: bold;
      color: $second;
    }
    p {
      font-weight: 500;
    }
  }
  .faq-image {
    width: 400px;
    height: 400px;

    img {
      width: 100%;
    }
  }
}
.answers {
  border-radius: 8px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .faq-filter {
    background-color: $second;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 20%;
    @media (max-width: 768px) {
      width: 100%;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
      }
      li {
        color: #fff;
        padding: 16px 20px;
        border-bottom: 1px solid #eee;
        transition: all 0.3s ease;
        @media (max-width: 768px) {
          padding: 16px 10px;
        }
        p {
          margin: 0;
          transition: all 0.3s ease;
          cursor: pointer;
          @media (min-width: 768px) {
            &:hover {
              transform: translateX(10px);
            }
          }
        }
        &.active {
          background-color: #8c7821;
          @media (min-width: 768px) {
            p {
              transform: translateX(10px);
            }
          }
        }
      }
    }
  }
  .faq-qustions {
    width: 80%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
