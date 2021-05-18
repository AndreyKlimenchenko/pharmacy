import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';
import {NavLink} from 'react-router-dom';
import Product from './Product/Propduct';
import styles from './Catalog.module.css';
import image1 from './../../assets/img/blur item 2.png';


const Catalog = () => {
    const catalog = JSON.parse(localStorage.getItem('catalog')) ||
    [
        {id: uuid(), name: 'Ginger face Mask', description: 'Grape Fruit', price: '16.00', inCart: false, currency: '$', image: image1},
        {id: uuid(), name: 'Specail mask', description: 'Lemon Fruit', price: '18.00', inCart: false, currency: '$', image: image1},
        {id: uuid(), name: 'Face Mask', description: 'Orange Fruit', price: '24.00', inCart: false, currency: '$', image: image1},
    ]
    const [catalogData, setCatalogData] = useState(catalog);
    const [openedModal, setOpenedModal] = useState();

    const handleOpenModal = (id) => {
        setOpenedModal(id);
    }

    const handleCloseModal = () => {
        setOpenedModal(undefined);
    }

    useEffect(() => {
        localStorage.setItem('catalog', JSON.stringify(catalogData));
    }, [catalogData]);
    return (
        <div className={styles.block}>
            <NavLink className={styles.btn}  to='/cart'>Cart</NavLink>
            {catalogData.map(product => <Product
            handleOpenModal={handleOpenModal}
            openedModal={openedModal}
            handleCloseModal={handleCloseModal}
            key={product.id}
            catalogData={catalogData}
            setCatalogData={setCatalogData}
            product={product} />)}
        </div>
    )
}

export default Catalog