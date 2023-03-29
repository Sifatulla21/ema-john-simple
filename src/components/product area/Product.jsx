import React, { useEffect, useState } from 'react';
import Cards from '../product card/Cards';
import './Product.css'
const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('../../../public/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="productField">
            <div className="productCard">
                {
                    products.map(product => <Cards
                        key={product.id}
                        product={product}
                    ></Cards>)

                }
            </div>
            <div className="cart">
                <h1>Hello</h1>
            </div>
        </div>
    );
};

export default Product;