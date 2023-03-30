import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
            <Cart
                cart={cart}
            ></Cart>
                
            </div>
        </div>
    );
};

export default Product;