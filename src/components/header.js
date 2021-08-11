import React from "react"
import { Link } from "gatsby"

const AppHeader = () => {
  return (
    <div className="header">
      <div className="d-flex flex-column">
        <div className="profile">
          {/* <img src="assets/img/profile-img.jpg" alt="Max Basev profile photo" className="img-fluid rounded-circle"> */}
          <h1 className="text-light">
            <a href="https://blog.maxbasev.com">Max Basev Blog</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a href="https://twitter.com/maxbasev" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.facebook.com/maxim.basev" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/maxbasev/" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/maxim-basev/"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://t.me/maxbasev" className="telegram">
              <i className="bx bxl-telegram"></i>
            </a>
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li data-aos="fade-right" data-aos-delay="100">
              <a href="https://blog.maxbasev.com">
                <i className="bx bx-home"></i>
                <span> Blog</span>
              </a>
            </li>
            <li data-aos="fade-right" data-aos-delay="125">
              <a href="#about">
                <i className="bx bx-bitcoin"></i> <span>Crypto</span>
              </a>
            </li>
            <li data-aos="fade-right" data-aos-delay="150">
              <a href="#resume">
                <i className="bx bxl-dev-to"></i> <span>Development</span>
              </a>
            </li>
            <li data-aos="fade-right" data-aos-delay="175">
              <a href="#portfolio">
                <i className="bx bx-camera-movie"></i>
                Entertainment
              </a>
            </li>
            <li data-aos="fade-right" data-aos-delay="200">
              <a href="#services">
                <i className="bx bx-cool"></i> My Life
              </a>
            </li>
            <li data-aos="fade-right" data-aos-delay="225">
              <a href="#contact">
                <i className="bx bx-rocket"></i> Self Development
              </a>
            </li>
            <li data-aos="fade-right" data-aos-delay="250">
              <a href="#contact">
                <i className="bx bx-brush"></i>
                Creativity
              </a>
            </li>
            <li data-aos="fade-right" data-aos-delay="275">
              <a href="#contact">
                <i className="bx bx-planet"></i> Travel
              </a>
            </li>
          </ul>
        </nav>

        <button type="button" className="mobile-nav-toggle d-xl-none">
          <i className="icofont-navigation-menu"></i>
        </button>
      </div>
    </div>
  )
}

export default AppHeader
