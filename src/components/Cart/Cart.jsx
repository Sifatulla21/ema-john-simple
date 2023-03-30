import React from 'react';

const Cart = (props) => {
    const {cart} = props;
        let total = 0;
        let shipping = 0;
        let tax, grandTotal;
        for(const product of cart){
            total = total + product.price;
            shipping = shipping + product.shipping;
        }
        tax = total * .07;
        grandTotal = total + shipping + tax;
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;