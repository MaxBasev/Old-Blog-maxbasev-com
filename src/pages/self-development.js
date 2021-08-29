import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AppHeader from "../components/header"

const BlogSelfDevelopment = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <AppHeader />
        <Seo title="All posts" />
        <Bio />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location}>
      <Seo title="All posts" />
      {/* <Header /> */}
      {/* <Bio /> */}
      <div className="global-wrapper">
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            let featuredImgFluid =
              post.frontmatter.featuredImage.childImageSharp.fluid

            return (
              <li key={post.fields.slug}>
                <article
                  // className="post-list-item"
                  className="card mb-3"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <div className="row g-0">
                    <div class="col-md-4">
                      <Img
                        fluid={featuredImgFluid}
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <header>
                          <h2>
                            <Link to={post.fields.slug} itemProp="url">
                              <span itemProp="headline">{title}</span>
                            </Link>
                          </h2>
                          <small>{post.frontmatter.date}</small>
                        </header>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                          className="img-post-description"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogSelfDevelopment

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Self Development" } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
