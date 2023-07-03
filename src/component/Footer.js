import React from "react";

export default function Footer() {
  return (
    <footer id="footer" class="footer">
      <div class="container">
        <div class="row gy-3">
          <div class="col-lg-3 col-md-6 d-flex aos-init " data-aos="fade-up">
            <i class="bi bi-geo-alt icon"></i>
            <div>
              <h4>Address</h4>
              <p>
                No.17/2,MIG Flats, 12th Avenue, <br /> Ashoknagar, Chennai - 600
                083
                <br />
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 footer-links d-flex aos-init "
            data-aos="fade-up"
          >
            <i class="bi bi-telephone icon"></i>
            <div>
              <h4>Reservations</h4>
              <p>
                <strong>Phone:</strong> 044 23713999
                <br />
                <strong>Email:</strong> info@inttech.in
                <br />
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 footer-links d-flex aos-init "
            data-aos="fade-up"
          >
            <i class="bi bi-clock icon"></i>
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Mon-Sat: 09AM</strong> - 7PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 footer-links aos-init "
            data-aos="fade-up"
          >
            <h4>Follow Us</h4>
            <div class="social-links d-flex">
              <a href="#" class="twitter">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          © Copyright{" "}
          <strong>
            <span>Int</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="">Int</a>
        </div>
      </div>
    </footer>
  );
}
