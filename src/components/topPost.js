import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const TopPost = () => {
  return (
    <div
      className="p-4 p-md-5 mb-4 text-white top-post-bg-color"
      data-aos="fade-left"
    >
      <div className="col-md-12">
        <div className="row">
          <h1 className="top-post-title">Welcome!</h1>
          <p className="top-post-text">
            Hi! My name is Max and I am happy to welcome you to my site! You can
            read a little story about me at the link below or go directly to the
            section of the site you are interested in.
          </p>
          <p className="top-post-btn border-animation">
            <a
              href="https://maxbasev.com/about-me.html"
              className="text-white fw-bold border-animation__inner"
            >
              Continue reading...
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TopPost
