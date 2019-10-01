import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Banner from '../components/banner'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import 'bootstrap/dist/css/bootstrap.min.css';

class RootIndex extends React.Component {
  render() {
    const banners = get(this, 'props.data.allContentfulBanner.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fef9f0' }}>
          {banners.map(({ node }, index) => {
            if (node.order === 1) {
              return (
                <div style={{ padding: (30, 70) }} key={index}>
                  <span style={{ textTransform: 'uppercase', fontSize: 40, fontWeight: 600 }}>{node.title}</span>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="">
                        <p style={{ fontSize: 22, color: '#c59e57', fontWeight: 600, margin: (10, 0) }}
                          dangerouslySetInnerHTML={{
                            __html: node.body.childMarkdownRemark.html,
                          }}
                        />
                        <button style={{ background: '#c59e57', color: '#fff', border: (2, 'solid', '#c59e57') }} className="btn">Shop Manuka</button>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <img src={node.backgroundImage.fluid.src} alt="Logo" style={{ width: 836, height: 382 }} />
                    </div>
                  </div>
                </div>
              )

            }
            return (
              <Banner data={node} key={index} />
            )
          })}
        </div>
      </Layout >
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: {fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulBanner(sort: {fields: [order], order: ASC }) {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          order
          body {
            childMarkdownRemark {
              html
            }
          }
          publishDate(formatString: "MMMM Do, YYYY")
          backgroundImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`
