import React from "react";
import CountUp from "react-countup";

export default function ClientsCounts() {
  return (
    <section id="counts" class="counts">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="count-box rounded-4 aos-init" data-aos="zoom-in-up">
              <i class="bi bi-emoji-smile"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="0"
                class="purecounter"
              >
                <CountUp end={232} duration={3} enableScrollSpy />
              </span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div class="count-box rounded-4 aos-init" data-aos="zoom-in-up">
              <i class="bi bi-journal-richtext"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="0"
                class="purecounter"
              >
                <CountUp end={521} duration={3} enableScrollSpy />
              </span>
              <p>Projects</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box rounded-4 aos-init" data-aos="zoom-in-up">
              <i class="bi bi-headset"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="1463"
                data-purecounter-duration="0"
                class="purecounter"
              >
                <CountUp end={1462} duration={3} enableScrollSpy />
              </span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box rounded-4 aos-init" data-aos="zoom-in-up">
              <i class="bi bi-people"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="15"
                data-purecounter-duration="0"
                class="purecounter"
              >
                <CountUp end={15} duration={4} enableScrollSpy />
              </span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
