import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './product-preview.module.css'


let singleProductClass = [
    `${styles.singleProduct}`,
    'col-md-3'
]
singleProductClass = singleProductClass.join(' ')

function formatNumber(number) {
    try {
        return parseFloat(Math.round(number * 100) / 100).toFixed(2);
    } catch (error) {
        return 0;
    }
}

export default ({ product }) => (
    <div className={singleProductClass}>
        <h3 className={styles.previewTitle} style={{ textAlign: 'center' }}>
            {product.title}
        </h3>
        <img src={product.image.fluid.src} style={{ width: 310, height: 310 }} />
        <div>
            {(() => {
                if (product.oldPrice === product.newPrice) {
                    return <span className={styles.price}>	&#36; {formatNumber(product.oldPrice)}</span>
                } else {
                    return <span>
                        <span className={styles.oldPrice}>	&#36; {formatNumber(product.oldPrice)}</span>
                        <span className={styles.newPrice}>	&#36; {formatNumber(product.newPrice)}</span>
                    </span>
                }
            })()}
        </div>
        <div style={{ textAlign: 'center' }}>
            <button style={{ background: '#c59e57', color: '#fff', border: (2, 'solid', '#c59e57') }} className="btn">Shop Now</button>
        </div>
    </div>
)
