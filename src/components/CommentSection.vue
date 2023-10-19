<template>
  <section class="review" style="background-color: #eee">
    <div class="container py-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-12 col-lg-10 col-xl-8">
          <section>
            <div class="text-dark">
              <div class="row d-flex justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-6 w-100">
                  <div class="card">
                    <div class="card-body p-4">
                      <div class="d-flex flex-start w-100">
                        <img
                          class="rounded-circle shadow-1-strong me-3"
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                          alt="avatar"
                          width="65"
                          height="65"
                        />
                        <div class="w-100">
                          <h5>Add a comment</h5>
                          <fieldset class="starability-fade">
                            <input
                              type="radio"
                              id="no-rate"
                              class="input-no-rate"
                              name="rating"
                              value="0"
                              checked
                              aria-label="No rating."
                            />
                            <input type="radio" id="first-rate1" name="rating" value="1" />
                            <label for="first-rate1" title="Terrible">1 star</label>
                            <input type="radio" id="first-rate2" name="rating" value="2" />
                            <label for="first-rate2" title="Not good">2 stars</label>
                            <input type="radio" id="first-rate3" name="rating" value="3" />
                            <label for="first-rate3" title="Average">3 stars</label>
                            <input type="radio" id="first-rate4" name="rating" value="4" />
                            <label for="first-rate4" title="Very good">4 stars</label>
                            <input type="radio" id="first-rate5" name="rating" value="5" />
                            <label for="first-rate5" title="Amazing">5 stars</label>
                          </fieldset>
                          <div class="form-outline">
                            <label class="form-label" for="textAreaExample"
                              >What is your view?</label
                            >
                            <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                          </div>
                          <div class="float-end mt-2 pt-1">
                            <button type="button" class="post btn btn-sm">Post comment</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="card w-100">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-start align-items-center">
                  <img
                    class="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 class="fw-bold mb-1">Lily Coleman</h6>
                    <p class="text-muted small mb-0">Shared publicly - Jan 2020</p>
                  </div>
                </div>
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </div>
              </div>
              <p class="mt-3 mb-4 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip consequat.
              </p>
              <div class="d-flex justify-content-start">
                <a href="#!" class="emotion d-flex align-items-center me-3">
                  <i class="bi bi-hand-thumbs-up"></i>
                  <p class="mb-0">Like</p>
                </a>
                <a href="#!" class="emotion d-flex align-items-center me-3">
                  <i class="bi bi-chat-dots"></i>
                  <p class="mb-0">Comment</p>
                </a>
                <a href="#!" class="emotion d-flex align-items-center me-3">
                  <i class="bi bi-reply-fill"></i>
                  <p class="mb-0">Share</p>
                </a>
              </div>
            </div>
          </div>

          <div class="card w-100">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-start align-items-center">
                  <img
                    class="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 class="fw-bold mb-1">Lily Coleman</h6>
                    <p class="text-muted small mb-0">Shared publicly - Jan 2020</p>
                  </div>
                </div>
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </div>
              </div>
              <p class="mt-3 mb-4 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip consequat.
              </p>
              <div class="d-flex justify-content-start">
                <a href="#!" class="emotion d-flex align-items-center me-3">
                  <i class="bi bi-hand-thumbs-up"></i>
                  <p class="mb-0">Like</p>
                </a>
                <a href="#!" class="emotion d-flex align-items-center me-3">
                  <i class="bi bi-chat-dots"></i>
                  <p class="mb-0">replay</p>
                </a>
                <a href="#!" class="emotion d-flex align-items-center me-3">
                  <i class="bi bi-reply-fill"></i>
                  <p class="mb-0">Share</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import '../../node_modules/starability/starability-css/starability-fade.css';
</script>
<style lang="scss" scoped>
@import '../assets/var.scss';
.review {
  .card {
    margin-bottom: 10px;
  }

  .emotion {
    text-decoration: none;
    i {
      color: $basic;
      margin-right: 4px;
    }
    p {
      color: $basic;
    }
  }
  .post {
    background-color: $basic;
    color: #fff;
  }
}
</style>
