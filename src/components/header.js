import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const AppHeader = () => {
  return (
    <div className="header">
      <button className="mobile-nav-toggle d-xl-none">
        <i className="icofont-navigation-menu"></i>
      </button>
      <div className="d-flex flex-column">
        <div className="profile">
          {/* <img src="assets/img/profile-img.jpg" alt="Max Basev profile photo" className="img-fluid rounded-circle">  */}
          <StaticImage
            className="img-fluid rounded-circle"
            // layout="fixed"
            // formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/profile-img.jpg"
            alt="Max Basev profile photo"
          />
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
              <Link to="/">
                <i className="bx bx-home"></i>
                <span> All posts</span>
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-delay="125">
              <Link to="/crypto/">
                <i className="bx bx-bitcoin"></i> <span>Crypto</span>
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-delay="150">
              <Link to="/development/">
                <i className="bx bxl-dev-to"></i> <span>Development</span>
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-delay="175">
              <Link to="/entertainment/">
                <i className="bx bx-camera-movie"></i>
                Entertainment
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-delay="200">
              <Link to="/my-life/">
                <i className="bx bx-cool"></i> My Life
              </Link>
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
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            <a href="https://maxbasev.com">
              <i className="bx bxl-google-cloud"></i> Back to site
            </a>
            <br></br>© 2020 - {new Date().getFullYear()},{` `}
            Max Basev
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppHeader
