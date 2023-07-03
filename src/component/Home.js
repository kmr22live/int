import { useEffect, useRef, useState } from "react";
import logo from "../assets/img/logo.svg";
import logoname from "../assets/img/logoname.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import Carousel from "./Carousel";
import About from "./About";
import ClientsCounts from "./ClientsCounts";
import Tabs from "./Tabs";
import Services from "./Services";
import Testimonals from "./Testimonals";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  const [navMobile, setNavMobile] = useState(false);
  const [navMobileIcon, setNavMobileIcon] = useState(true);

  const handleNav = () => {
    setNavMobile(!navMobile);
    setNavMobileIcon(!navMobileIcon);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <div className="">
      <header
        id="header"
        class={`fixed-top  d-flex align-items-center ${
          scrollPosition > 20 && "header-scrolled"
        }`}
      >
        <div class="container d-flex align-items-center">
          <h1 class="me-auto logo-header">
            <a href="index.html" class="logo">
              <img className="logo-icon" src={logo} alt="" />
            </a>
            <a href="index.html" id="logo-name" class="logo">
              <img className="logo-name" src={logoname} alt="" />
            </a>
          </h1>

          <nav id="navbar" class={`navbar ${navMobile ? "navbar-mobile" : ""}`}>
            <ul
              className="nav-lg-class"
              onClick={() => {
                !navMobileIcon && handleNav();
              }}
            >
              <li>
                <a href="index.html" class="active">
                  Home
                </a>
              </li>

              <li class="dropdown">
                <a href="#about">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#services" id="productsAndServices">
                  Products & Services
                </a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <button href="#about" class="btn getstarted">
                  Get Started
                </button>
              </li>
            </ul>
            <i
              class={`mobile-nav-toggle bi ${
                navMobileIcon ? "bi-list" : "bi-x"
              }`}
              id="mobile-menu-icon"
              onClick={handleNav}
            ></i>
          </nav>
        </div>
      </header>
      <Carousel />
      <About />
      <ClientsCounts />
      <Tabs />
      <Services />
      <section id="portfolio" class="portfolio">
        <div class="container aos-init " data-aos="fade-up">
          <div class="section-title">
            <h2>Our Projects</h2>
            <p>These are our recents and upcoming projects.</p>
          </div>
        </div>
      </section>
      <Testimonals />
      <Contact />
      <Footer />
    </div>
  );
}
