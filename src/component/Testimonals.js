import React, { useEffect } from "react";

export default function Testimonals() {
  return (
    <>
      <section class="testimonial text-center" id="testimonial">
        <div
          class="heading white-heading aos-init"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1300"
        >
          Testimonial
        </div>
        <div
          id="carouselExampleRide"
          class="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  class="img-circle img-responsive"
                />
                <p
                  className="aos-init"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1300"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h4
                  className="aos-init"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1300"
                >
                  Client 1
                </h4>
              </div>
            </div>
            <div class="carousel-item">
              <div class="testimonial4_slide">
                <img
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  class="img-circle img-responsive"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h4>Client 1</h4>
              </div>
            </div>
            <div class="carousel-item">
              <div class="testimonial4_slide">
                <img
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  class="img-circle img-responsive"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h4>Client 1</h4>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
