import React from 'react';
import './Cards.css'
const Cards = (props) => {
    console.log(props.product);
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className="cardBody">
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>

            </div>
            <button className="cardBtn">Add to Cart</button>
        </div>
    );
};

export default Cards;