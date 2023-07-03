import React from "react";

export default function Tabs() {
  return (
    <section id="tabs" class="tabs">
      <div class="container aos-init " data-aos="fade-up">
        <ul class="nav nav-tabs row d-flex h-100" role="tablist">
          <li class="nav-item col-3" role="presentation">
            <a
              class="nav-link  active show  rounded-4"
              data-bs-toggle="tab"
              data-bs-target="#tab-1"
              aria-selected="false"
              role="tab"
              tabindex="-1"
            >
              <i class="fa-solid fa-network-wired"></i>
              <h4 class="d-none d-lg-block">Networking LAN & WAN</h4>
            </a>
          </li>
          <li class="nav-item col-3" role="presentation">
            <a
              class="nav-link  rounded-4"
              data-bs-toggle="tab"
              data-bs-target="#tab-2"
              aria-selected="false"
              role="tab"
              tabindex="-1"
            >
              <i class="fa-solid fa-video"></i>
              <h4 class="d-none d-lg-block">Video Surveillance</h4>
            </a>
          </li>
          <li class="nav-item col-3" role="presentation">
            <a
              class="nav-link  rounded-4"
              data-bs-toggle="tab"
              data-bs-target="#tab-3"
              aria-selected="false"
              role="tab"
              tabindex="-1"
            >
              <i class="fa-solid fa-location-crosshairs"></i>
              <h4 class="d-none d-lg-block">Vehicle Tracking System</h4>
            </a>
          </li>
          <li class="nav-item col-3" role="presentation">
            <a
              class="nav-link  rounded-4"
              data-bs-toggle="tab"
              data-bs-target="#tab-4"
              aria-selected="true"
              role="tab"
            >
              <i class="fa-solid fa-wifi"></i>
              <h4 class="d-none d-lg-block">Mobile Jammers</h4>
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane  active show" id="tab-1" role="tabpanel">
            <div class="row">
              <div
                class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 aos-init "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Networking LAN and WAN</h3>
                <p class="fst-italic">
                  A computer network is undoubtedly the backbone of most of the
                  organizations in this technological era. LAN and WAN are the
                  two most popular types of computer networks.We provide Supply
                  and Installation of
                </p>
                <ul>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Structured cablings in Copper and Fiber
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Switches ,Routers, LAN Extenders,etc
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Media Convertors for conversions like
                    V.35,G703,Fiber,Ethernet,etc
                  </li>

                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Wi-Fi Access for Campus and Metro users
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Wireless based LAN and WAN networks
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Unified Threat Management Solutions for Secured Restricted
                    LAN /WAN Access
                  </li>
                </ul>
                <p>
                  LAN is a computer network established within a small
                  geographic area, such as a house, office or buildings. WAN, on
                  the other side, is a computer network that covers a broad
                  geographical area. LANs allow users to transfer the data
                  faster, whereas WANs have a comparatively slower data transfer
                  rate. LAN has a higher speed, whereas WAN has a slower speed.
                  Designing, setup and maintenance in LANs are relatively easy
                  while designing, setup, maintenance is difficult in WANs.
                  Fault tolerance is high in LANs, whereas WANs have less fault
                  tolerance.
                </p>
              </div>
              <div
                class="col-lg-6 order-1 order-lg-2 text-center aos-init "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://www.kwsnet.com/media/images/Computer-Networking-800x600.jpg"
                  alt=""
                  class="img-fluid rounded-4"
                />
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-2" role="tabpanel">
            <div class="row">
              <div
                class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 aos-init "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Video Surveillance</h3>
                <p class="fst-italic">
                  A computer network is undoubtedly the backbone of most of the
                  organizations in this technological era. LAN and WAN are the
                  two most popular types of computer networks.We provide Supply
                  and Installation of
                </p>
                <ul>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Structured cablings in Copper and Fiber
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Switches ,Routers, LAN Extenders,etc
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Media Convertors for conversions like
                    V.35,G703,Fiber,Ethernet,etc
                  </li>

                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Wi-Fi Access for Campus and Metro users
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Wireless based LAN and WAN networks
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Unified Threat Management Solutions for Secured Restricted
                    LAN /WAN Access
                  </li>
                </ul>
                <p>
                  LAN is a computer network established within a small
                  geographic area, such as a house, office or buildings. WAN, on
                  the other side, is a computer network that covers a broad
                  geographical area. LANs allow users to transfer the data
                  faster, whereas WANs have a comparatively slower data transfer
                  rate. LAN has a higher speed, whereas WAN has a slower speed.
                  Designing, setup and maintenance in LANs are relatively easy
                  while designing, setup, maintenance is difficult in WANs.
                  Fault tolerance is high in LANs, whereas WANs have less fault
                  tolerance.
                </p>
              </div>
              <div
                class="col-lg-6 order-1 order-lg-2 text-center aos-init "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://avasgroup.it/wp-content/uploads/2015/07/Video-Surveillance-800x534.jpeg"
                  alt=""
                  class="img-fluid rounded-4"
                />
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-3" role="tabpanel">
            <div class="row">
              <div
                class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 aos-init "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Vehicle Tracking System</h3>
                <p class="fst-italic">
                  A computer network is undoubtedly the backbone of most of the
                  organizations in this technological era. LAN and WAN are the
                  two most popular types of computer networks.We provide Supply
                  and Installation of
                </p>
                <ul>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Structured cablings in Copper and Fiber
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Switches ,Routers, LAN Extenders,etc
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Media Convertors for conversions like
                    V.35,G703,Fiber,Ethernet,etc
                  </li>

                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Wi-Fi Access for Campus and Metro users
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Wireless based LAN and WAN networks
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Unified Threat Management Solutions for Secured Restricted
                    LAN /WAN Access
                  </li>
                </ul>
                <p>
                  LAN is a computer network established within a small
                  geographic area, such as a house, office or buildings. WAN, on
                  the other side, is a computer network that covers a broad
                  geographical area. LANs allow users to transfer the data
                  faster, whereas WANs have a comparatively slower data transfer
                  rate. LAN has a higher speed, whereas WAN has a slower speed.
                  Designing, setup and maintenance in LANs are relatively easy
                  while designing, setup, maintenance is difficult in WANs.
                  Fault tolerance is high in LANs, whereas WANs have less fault
                  tolerance.
                </p>
              </div>
              <div
                class="col-lg-6 order-1 order-lg-2 text-center aos-init "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://www.bestcaraudio.com/wp-content/uploads/2018/07/GPS-Vehicle-Tracking-8.jpg"
                  alt=""
                  class="img-fluid rounded-4"
                />
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-4" role="tabpanel">
            <div class="row">
              <div
                class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 aos-init "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Mobile Jammers</h3>
                <p class="fst-italic">
                  A computer network is undoubtedly the backbone of most of the
                  organizations in this technological era. LAN and WAN are the
                  two most popular types of computer networks.We provide Supply
                  and Installation of
                </p>
                <ul>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Structured cablings in Copper and Fiber
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Switches ,Routers, LAN Extenders,etc
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Media Convertors for conversions like
                    V.35,G703,Fiber,Ethernet,etc
                  </li>

                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Wi-Fi Access for Campus and Metro users
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Wireless based LAN and WAN networks
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "rgb(0, 113, 167)" }}
                    ></i>{" "}
                    Unified Threat Management Solutions for Secured Restricted
                    LAN /WAN Access
                  </li>
                </ul>
                <p>
                  LAN is a computer network established within a small
                  geographic area, such as a house, office or buildings. WAN, on
                  the other side, is a computer network that covers a broad
                  geographical area. LANs allow users to transfer the data
                  faster, whereas WANs have a comparatively slower data transfer
                  rate. LAN has a higher speed, whereas WAN has a slower speed.
                  Designing, setup and maintenance in LANs are relatively easy
                  while designing, setup, maintenance is difficult in WANs.
                  Fault tolerance is high in LANs, whereas WANs have less fault
                  tolerance.
                </p>
              </div>
              <div
                class="col-lg-6 order-1 order-lg-2 text-center aos-init "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://th.bing.com/th/id/OIP.BPHKRs6zXW7Jz1PIJD_AwQHaGF?pid=ImgDet&w=207&h=170&c=7&dpr=1.3"
                  alt=""
                  class="img-fluid rounded-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
