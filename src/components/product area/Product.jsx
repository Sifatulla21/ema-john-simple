import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Cards from '../product card/Cards';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import './Product.css'
import '../../utilities/fakedb';
const Product = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        //Get ID
        for(const id in storedCart){
            //Get product using id
            const adddProduct = products.find(product => product.id === id);
            if(adddProduct){
                //Add quantity
                const quantity = storedCart[id];
                adddProduct.quantity = quantity  
                // add addeded product to empty array
                savedCart.push(adddProduct);

            }
        }
        // Set The Cart
        setCart(savedCart);
    },[products]);
    const addToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id);
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