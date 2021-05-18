import React from 'react'
import styles from './ProductModal.module.css'

const ProductModal = ({product, handleCloseModal}) => {
    console.log(product);
    return (
        <div 
            className={styles.block}
            onClick={(e)=>{
                e.stopPropagation();
                handleCloseModal();
            }}>
            <div className={styles.modal}>
                <button
                    className={styles.closeBtn}
                    onClick={(e)=>{
                    e.stopPropagation();
                    handleCloseModal();
                    }}
                type="button"
                >X</button>
                <div>
                    <img className={styles.productImg} src={product.image} alt="" />
                    <div className={styles.productInfo}>{product.name}</div>
                    <div className={styles.productInfo}>{product.description}</div>
                    <div className={styles.productInfo}>{product.price}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductModal 