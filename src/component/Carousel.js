import React from "react";

export default function Carousel() {
  return (
    <section id="mainSlider">
      <section id="hero">
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators" id="hero-carousel-indicators">
            <li
              data-bs-target="#heroCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
            ></li>
            <li
              data-bs-target="#heroCarousel"
              data-bs-slide-to="1"
              class=""
            ></li>
            <li
              data-bs-target="#heroCarousel"
              data-bs-slide-to="2"
              class=""
            ></li>
          </ol>

          <div class="carousel-inner" role="listbox">
            <div
              class="carousel-item active"
              style={{
                backgroundImage:
                  "url(https://res.cloudinary.com/druttjvrf/image/upload/v1688208354/earth-g86b77ab61_1280_z9amzg.jpg)",
              }}
            >
              <div class="carousel-container">
                <div class="container">
                  <h2 class="animate__animated animate__fadeInDown">
                    Welcome to <span>Indian Network Technology</span>
                  </h2>
                  <p class="animate__animated animate__fadeInUp">
                    INT is an Engineering firm specializing professionally
                    managed, time tested and technically advanced System
                    Integrator , specializing in Custom based Voice, Data, Video
                    Networking Communication solutions.
                  </p>
                  <a
                    href="#about"
                    class="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div
              class="carousel-item"
              style={{
                backgroundImage:
                  "url(https://www.pogt.net/wp-content/uploads/2018/06/security-cameras-home-business-surveillance-2.jpg)",
              }}
            >
              <div class="carousel-container">
                <div class="container">
                  <h2 class="animate__animated animate__fadeInDown">
                    Video surveillance
                  </h2>
                  <p class="animate__animated animate__fadeInUp">
                    Video surveillance systems monitor activity in public areas,
                    businesses or commercial buildings for real-time or later
                    review.
                  </p>
                  <a
                    href="#about"
                    class="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div
              class="carousel-item"
              style={{
                backgroundImage:
                  "url(https://lirp.cdn-website.com/09cfd86f/dms3rep/multi/opt/network-1920w.jpg)",
              }}
            >
              <div class="carousel-container">
                <div class="container">
                  <h2 class="animate__animated animate__fadeInDown">
                    Networking with Firewall Switches
                  </h2>
                  <p class="animate__animated animate__fadeInUp">
                    A network firewall protects a computer network from
                    unauthorized access. Network firewalls may be hardware
                    devices, software programs, or a combination of the two.
                  </p>
                  <a
                    href="#about"
                    class="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            class="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>
    </section>
  );
}
