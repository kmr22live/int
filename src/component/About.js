import React from "react";

export default function About() {
  return (
    <section id="about" class="about">
      <div class="container ">
        <div class="section-header">
          <h2 className="aos-init " data-aos="fade-up">
            About Us
          </h2>
          <p className="aos-init " data-aos="fade-up">
            Indian Network Technology Slide Indian Network Technology has
            distinguished itself from other security companies by successfully
          </p>
        </div>

        <div class="row gy-4">
          <div class="col-lg-6">
            <h3 className="aos-init " data-aos="fade-right">
              Indian Network Technology has distinguished itself from other
              security companies
            </h3>
            <img
              src="https://lirp.cdn-website.com/09cfd86f/dms3rep/multi/opt/network-1920w.jpg"
              class="img-fluid rounded-4 mb-4 aos-init"
              alt=""
              data-aos="fade-right"
            />
            <p className="aos-init " data-aos="fade-right">
              Indian Network Technology has distinguished itself from other
              security companies by successfully providing professionally
              managed, time tested and technically advanced system integrator,
              specializing in voice, data, video communication solutions. We
              offer an unmatched parts and labor warranty on most of the
              products we sell and install at no additional cost. The key to
              Easy Communication's development is our technological experience,
              willingness to experiment and adapt new products.
            </p>
            {/* <p>
              Temporibus nihil enim deserunt sed ea. Provident sit expedita aut
              cupiditate nihil vitae quo officia vel. Blanditiis eligendi
              possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut
              repellendus nobis tempore doloribus debitis explicabo similique
              sit. Accusantium sed ut omnis beatae neque deleniti repellendus.
            </p> */}
          </div>
          <div class="col-lg-6">
            <div class="content ps-0 ps-lg-5">
              <p class="fst-italic aos-init " data-aos="fade-left">
                Our experienced sales team assists you in determining the best
                solution for the business that meets your budget. Whether you
                are monitoring for employee productivity, vandalism, theft or
                loss prevention, our products are capable of meeting all your
                surveillance needs. Our extensive line,Produts that are high in
                quality, low in cost, easy to operate and setup, and suited to
                blend harmoniously into any decor. The knowledge accumulated
                through extensive experience in the
              </p>
              <ul>
                <li className="aos-init " data-aos="fade-left">
                  <i class="bi bi-check-circle-fill"></i> design, delivery and
                  maintenance of cost-effective IP networks
                </li>
                <li className="aos-init " data-aos="fade-left">
                  <i class="bi bi-check-circle-fill"></i> INT specializes in the
                  integration of applications such as IT Security, Storage and
                  Video Surveillance systems.
                </li>
                {/* <li>
                  <i class="bi bi-check-circle-fill"></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li> */}
              </ul>
              <p className="aos-init " data-aos="fade-left">
                Network and communication centric technology will continue to
                evolve. As a growing organization, Indian Network Technology is
                equipped enough to accommodate any new product in this area. Our
                engineers are up to date in their knowledge of any new product
                in the evolving technology market.
                {/* When implementing physical
                security as a network application, the resources must be
                properly segmented and secured; accessible only by authorized
                parties. Through wide range of products of network platforms
                such as routers, switches, firewalls, intrusion prevention
                Indian Network Technology can provide the appropriate level of
                security. Over the years, INT has matured and become part of the
                key player in the distributors of Network, communication and
                security system industry in India. */}
              </p>

              <div
                class="position-relative mt-4 aos-init "
                data-aos="fade-left"
              >
                <img
                  src="https://lirp.cdn-website.com/09cfd86f/dms3rep/multi/opt/network-1920w.jpg"
                  class="img-fluid rounded-4"
                  alt=""
                />
                <a
                  href="https://www.youtube.com/watch?v=jrjGyX92-_o"
                  class="glightbox play-btn"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
