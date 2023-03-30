import React, { useEffect, useState } from 'react';
import Cards from '../product card/Cards';
import './Product.css'
const Product = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const addToCart = (product) =>{
        console.log(product.id);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="productField">
            <div className="productCard">
                {
                    products.map(product => <Cards
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Cards>)

                }
            </div>
            <div className="cartArea">
                <h1>Order Summary</h1>
                <p>Selected Items:{cart.length}</p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
                <p>Grand Total: $</p>
            </div>
        </div>
    );
};

export default Product;