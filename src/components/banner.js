import React from 'react'
import Img from 'gatsby-image'

import styles from './banner.module.css'

let classBanner = [
  'row',
  `${styles.bgPink}`,
  'p-5'
]
classBanner = classBanner.join(' ')

export default ({ data }) => (
  <div className={classBanner}>
    <div className="col-md-4">
      <img src={data.backgroundImage.fluid.src} alt="Logo" style={{ width: 416, height: 416  }} />
    </div>
    <div className="col-md-8">
      <div className="p-3 bg-white">
        <span style={{ textTransform: 'uppercase', fontSize: 40, fontWeight: 600 }}>{data.title}</span>
        <p style={{ fontSize: 16 }}
          dangerouslySetInnerHTML={{
            __html: data.body.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  </div>
)
