import React from 'react'
import Product from './Product/Propduct'
import uuid from 'react-uuid'
import styles from './Catalog.module.css'
import image1 from './../../assets/img/blur item 2.png'

const Catalog = () => {
    const catalog = JSON.parse(localStorage.getItem('catalog')) ||
    [
        {id: uuid(), name: 'Ginger face Mask', description: 'Grape Fruit', price: '16.00', inCart: false, currency: '$', image: image1},
        {id: uuid(), name: 'Specail mask', description: 'Lemon Fruit', price: '18.00', inCart: false, currency: '$', image: image1},
        {id: uuid(), name: 'Face Mask', description: 'Orange Fruit', price: '24.00', inCart: false, currency: '$', image: image1},
    ]
    const [catalogData, setCatalogData] = React.useState(catalog)
    console.log(catalogData)

    React.useEffect(() => {
        localStorage.setItem('catalog', JSON.stringify(catalogData))
    }, [catalogData])


    return (
        <div className={styles.block}>
            {catalogData.map(product => <Product
            catalogData={catalogData}
            setCatalogData={setCatalogData}
            product={product} />)}
        </div>
    )
}

export default Catalog