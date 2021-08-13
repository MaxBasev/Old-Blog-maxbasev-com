import React from "react"
import { Link } from "gatsby"

const TagsLayout = () => {
  return (
    <div className="d-flex">
      <nav className="tags-menu">
        <ul>
          <li data-aos="fade-right" data-aos-delay="100">
            <Link to="/">
              <span> All posts</span>
            </Link>
          </li>
          <li data-aos="fade-right" data-aos-delay="125">
            <Link to="/crypto/">
              <span>Cryptocurrency</span>
            </Link>
          </li>
          <li data-aos="fade-right" data-aos-delay="150">
            <Link to="/development/">
              <span>Blockchain</span>
            </Link>
          </li>
          <li data-aos="fade-right" data-aos-delay="175">
            <Link to="/entertainment/">NFT</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default TagsLayout
