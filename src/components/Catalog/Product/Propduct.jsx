import React from 'react'
import styles from './Product.module.css'

const Product = ( { product, setCatalogData, catalogData} ) => {
    const addCart = (id) => {
        const newCatalog = catalogData.map((product) => product.id === id ? {...product, inCart: true} : product)
        setCatalogData(newCatalog);
    }
    const removeCart = (id) => {
        const newCatalog = catalogData.map((product) => product.id === id ? {...product, inCart: false} : product)
        setCatalogData(newCatalog)
    }
    return (
        <div key={product.id} className={styles.container}>
            <div className={styles.image}>
                <img src={product.image} alt=""/>
            </div>

            <div className={styles.block}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                <span className={styles.price}>{product.currency} {product.price}</span>
                {product.inCart ? 
                <button className={styles.buttonRemove}
                onClick={() => removeCart(product.id)}> Remove from cart </button> :
                <button className={styles.button}
                onClick={() => addCart(product.id)}></button>
                }
            </div>

            
        </div>
    )
}

export default Product