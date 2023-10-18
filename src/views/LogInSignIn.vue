<!--Note: i used firebase here just for email and password,
     Name value won't be stored but you can edit it in accountManagement page-->
<template>
  <section>
    <div class="log-sign-form px-4 px-md-5 text-center text-lg-start wrapper">
      <div class="container pt-3">
        <div class="row gx-lg-5 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-up">
            <h1 class="my-5 display-3 fw-bold ls-tight">
              Love Shopping??
              <br />
              <span class="title">Shop with Us Now!</span>
            </h1>
            <p style="color: hsl(217, 10%, 50.8%)">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium
              odio, soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum maiores
            </p>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-up">
            <div class="card">
              <div class="card-body py-5 px-md-5">
                <div class="auth_toggle d-flex justify-content-around">
                  <p
                    @click="Authentication = 'signIn'"
                    :class="Authentication == 'signIn' ? 'active' : ''"
                  >
                    Sign In
                  </p>
                  <p
                    @click="Authentication = 'logIn'"
                    :class="Authentication == 'logIn' ? 'active' : ''"
                  >
                    Log In
                  </p>
                </div>
                <form v-if="Authentication == 'signIn'">
                  <!-- 2 column grid layout with text inputs for the first and last names -->
                  <div class="row">
                    <div class="col-md-6 mb-2">
                      <div class="form-outline">
                        <label>First name</label>
                        <input
                          v-model="firstName"
                          type="text"
                          id="form3Example1"
                          class="form-control"
                          placeholder="First name"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-2">
                      <div class="form-outline">
                        <label for="">Last name</label>
                        <input
                          v-model="lastName"
                          type="text"
                          id="form3Example2"
                          class="form-control"
                          placeholder="Last name"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Email input -->
                  <div class="form-outline mb-2">
                    <label>Email address</label>
                    <input
                      type="email"
                      placeholder="Email@gmail.com"
                      id="form3Example3"
                      class="form-control"
                      autocomplete="off"
                    />
                  </div>
                  <!-- phonenumber input -->
                  <div class="form-outline mb-2">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      class="form-control"
                      inputmode="numeric"
                      pattern="[0-9]*"
                      placeholder="Enter your phone number"
                      autocomplete="off"
                    />
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-2">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      id="form3Example4"
                      class="form-control"
                      autocomplete="off"
                    />
                  </div>

                  <!--socials-->
                  <div class="socials d-flex justify-content-center mb-3 mt-3">
                    <button type="button" class="btn btn-secondary btn-floating mx-2">
                      <i class="bi bi-facebook"></i>
                    </button>

                    <button type="button" class="btn btn-secondary btn-floating mx-2">
                      <i class="bi bi-google"></i>
                    </button>

                    <button type="button" class="btn btn-secondary btn-floating mx-2">
                      <i class="bi bi-threads"></i>
                    </button>
                  </div>
                  <!-- Checkbox -->
                  <div class="form-check d-flex justify-content-center mb-2">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      checked
                    />
                    <label class="form-check-label" for="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div>
                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary btn-block mb-2">Sign up</button>
                  <p class="error_message"></p>
                </form>

                <form v-if="Authentication == 'logIn'">
                  <!-- Email input -->
                  <div class="form-outline mb-2">
                    <label>Email address</label>
                    <input type="email" id="email" class="form-control" autocomplete="off" />
                  </div>

                  <!-- phonenumber input -->
                  <div class="form-outline mb-2">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      class="form-control"
                      inputmode="numeric"
                      pattern="[0-9]*"
                      placeholder="Enter your phone number"
                      autocomplete="off"
                    />
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-2">
                    <label>Password</label>
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                      autocomplete="off"
                    />
                  </div>

                  <!-- Checkbox -->
                  <div class="form-check d-flex justify-content-center mb-2">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      checked
                    />
                    <label class="form-check-label" for="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div>
                  <!--socials-->
                  <div class="socials d-flex justify-content-center mb-3 mt-3">
                    <button type="button" class="btn btn-secondary btn-floating mx-2">
                      <i class="bi bi-facebook"></i>
                    </button>

                    <button type="button" class="btn btn-secondary btn-floating mx-2">
                      <i class="bi bi-google"></i>
                    </button>

                    <button type="button" class="btn btn-secondary btn-floating mx-2">
                      <i class="bi bi-threads"></i>
                    </button>
                  </div>
                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary btn-block mb-2">Log In</button>
                  <p class="error_message"></p>
                  <p class="text-center">Forget Password?</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
// store
import { account } from '../stores/counter';
import { storeToRefs } from 'pinia';

const getAccountData = account();
const { firstName, lastName } = storeToRefs(getAccountData);
// end store
let Authentication = ref('signIn');
// import AOS
import AOS from 'aos';
onMounted(() => {
  AOS.init();
});
</script>
<style lang="scss" scoped>
/* import mdb */
@import '../../node_modules/mdb-vue-ui-kit/css/mdb.min.css';
.socials{
  i{
    color: #013d29;
  }
}
.log-sign-form {
  background-color: hsl(0, 0%, 96%);
  min-height: calc(100vh - (84px + 30px));
}
.title {
  color: #013d29;
}

input {
  border: 1px solid #bdbdbd !important;
}

button[type='submit'] {
  background-color: #013d29;
}

i {
  font-size: 20px;
}
.auth_toggle {
  p {
    cursor: pointer;
    padding: 10px 15px;

    &.active {
      border-bottom: 3px solid #013d29;
    }
  }
}

.error_message {
  color: red;
  font-size: 18px;
  font-weight: 700;
}
</style>
