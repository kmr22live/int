import { useEffect, useRef, useState } from "react";
import logo from "../assets/img/logo.svg";
import logoname from "../assets/img/logoname.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import Carousel from "./Carousel";

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
            <ul className="nav-lg-class">
              <li>
                <a href="index.html" class="active">
                  Home
                </a>
              </li>

              <li class="dropdown">
                <a href="#">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="services.html" id="productsAndServices">
                  Products & Services
                </a>
              </li>

              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <button href="index.html" class="btn getstarted">
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
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
      <div>hai</div>
    </div>
  );
}
