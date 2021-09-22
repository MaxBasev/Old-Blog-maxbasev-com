import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"
import TagsLayout from "../components/tags-layout"

const TagsPage = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <TagsLayout>
      <div className="content-box clearfix">
        <div className="blog-tags">
          <h1>{tagHeader}</h1>
          <ul className="tag-list">
            {edges.map(({ node }) => {
              const { title, date } = node.frontmatter
              const { slug } = node.fields
              return (
                <li key={slug}>
                  <Link to={slug}>{title}</Link>
                  <small> | {date}</small>
                </li>
              )
            })}
          </ul>
          <span>
            <Link to="/tags">← All tags</Link>
          </span>
        </div>
      </div>
    </TagsLayout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
