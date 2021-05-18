import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Cart.module.css'
const Cart = () => {
    const [catalogData, setCatalogData] = React.useState(JSON.parse(localStorage.getItem('catalog')) || [])
    const [totalPrice, setTotalPrice] = useState(catalogData.map(item => ({count: 1, price: Number.parseInt(item.price)})))
    const changeCount = (event, index) => {
        const newTotalPrice = totalPrice.map((item, idx) => idx === index ? {...item, count: event.currentTarget.value} : item)
        setTotalPrice(newTotalPrice)
    }

    const handleRemoveProduct = (id) => {
        const products = catalogData.map(item => {
            if(item.id === id) {
                item.inCart = false;
                return item;
            }
            return item;
        });
        localStorage.setItem('catalog', JSON.stringify(products));
        setCatalogData(products);
    }
    return (
        <React.Fragment>
        <NavLink className={styles.btn}  to='/catalog'>Catalog</NavLink>
            <ul className={styles.container}>
                <li> Product total count:
                {totalPrice.reduce((sum, item) => +item.count + sum, -1)}
                </li>
                {catalogData.filter(item => item.inCart).map((item, index) => (
                <React.Fragment key={item.id}>
                    <li className={styles.block}>
                        <span> {item.name} </span>
                        <span> {item.description} </span>
                        <span> {item.price} </span>
                        <span> {item.currency} </span>
                        <input type="number" min='0'
                        value={totalPrice[index].count}
                        onChange={(event) => changeCount(event, index)} />
                        <button className={styles.buttonRemove} onClick={() => handleRemoveProduct(item.id)}>Remove from cart</button>
                    </li>
            
                </React.Fragment>
                ))}
            </ul>
        </React.Fragment>
    )
}

export default Cart