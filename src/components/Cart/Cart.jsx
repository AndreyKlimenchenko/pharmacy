import React, {useState} from 'react';
import styles from './Cart.module.css'
const Cart = () => {
    const [catalogData, setCatalogData] = React.useState(JSON.parse(localStorage.getItem('catalog')) || [])
    const [totalPrice, setTotalPrice] = useState(catalogData.map(item => ({count: 1, price: Number.parseInt(item.price)})))
    console.log(totalPrice)
    const changeCount = (event, index) => {
        const newTotalPrice = totalPrice.map((item, idx) => idx === index ? {...item, count: event.currentTarget.value} : item)
        setTotalPrice(newTotalPrice)
    }
    return (
        <ul className={styles.container}>
             <li> Product total count:
               {totalPrice.reduce((sum, item) => +item.count + sum, -1)}
             </li>
            {catalogData.filter(item => !item.inCart).map((item, index) => (
               <React.Fragment key={item.id}>
                   <li className={styles.block}>
                    <span> {item.name} </span>
                    <span> {item.description} </span>
                    <span> {item.price} </span>
                    <span> {item.currency} </span>
                    <input type="number" min='0'
                    value={totalPrice[index].count}
                    onChange={(event) => changeCount(event, index)} />
                    <button className={styles.buttonRemove}>Remove from cart</button>
                   </li>
           
               </React.Fragment>
            ))}
        </ul>
    )
}

export default Cart