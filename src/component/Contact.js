import React from "react";

export default function Contact() {
  return (
    <section id="contact" class="contact">
      <div class="container aos-init " data-aos="fade-up">
        <div class="section-title">
          <h2>Contact</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          </p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.072273520498!2d80.20783097499378!3d13.03106948728978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52671f7f1c2817%3A0xf5e6098daf3a9f74!2sIndian%20Network%20Technology!5e0!3m2!1sen!2sin!4v1688406663944!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div class="row aos-init " data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-md-12">
                <div class="info-box">
                  <i class="fa-solid fa-map-location-dot"></i>
                  <h3>Our Address</h3>
                  <p>
                    Head Office - CHENNAI Postal: No.17/2,MIG Flats, 12th
                    Avenue, Ashoknagar, Chennai - 600 083
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i class="fa-solid fa-envelope"></i>
                  <h3>Email Us</h3>
                  <p>
                    info@inttech.in
                    <br />
                    <br />
                    {/* contact@example.com */}
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i class="fa-solid fa-phone-volume"></i>
                  <h3>Call Us</h3>
                  <p>
                    Phone: 044 23713999 / Mobile: 9842218893
                    <br />/ 9842218835 / 9842218823
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              class="php-email-form"
            >
              <div class="row">
                <div class="col form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div class="col form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required=""
                ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div class="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
