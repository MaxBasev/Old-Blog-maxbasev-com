import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

const TagsLayout = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="d-flex">
      <nav className="tags-menu">
        <ul>
          {post.frontmatter.tags.map(tag => (
            <li data-aos="fade-right" data-aos-delay="100" key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}

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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`
