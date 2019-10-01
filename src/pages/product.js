import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styles from './product.module.css'
import Layout from "../components/layout"
import ProductPreview from '../components/product-preview'

class ProductIndex extends React.Component {
  render() {
    const products = get(this, 'props.data.allContentfulProduct.edges')
    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fef9f0' }}>
          <div className={styles.hero}>
            <span className={styles.textSlogan}>
              Gourmet Honey
            </span>
          </div>
          <div className="wrapper">
            <h2 className="section-headline">GOURMET HONEY</h2>
            <div className="row">
              {products.map(({ node }, index) => {
                return (
                  <ProductPreview product={node} key={index} />
                )
              })}
            </div>
          </div>

        </div>
      </Layout>
    )
  }
}

export default ProductIndex

export const pageQuery = graphql`
  query ProductIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProduct {
      edges {
        node {
          title
          newPrice
          oldPrice
          type
          image {
            fluid(maxWidth: 350, maxHeight: 350, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
