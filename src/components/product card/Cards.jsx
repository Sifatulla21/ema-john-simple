import React from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Cards.css'
const Cards = (props) => {
    const {img, name, price, seller, ratings } = props.product;
    const addToCart = props.addToCart;
    return (
        <div className="cardBody">
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>

            </div>
            <button onClick={()=>{addToCart(props.product)}} className="cardBtn">Add to Cart<FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Cards;