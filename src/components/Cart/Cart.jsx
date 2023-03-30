import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
        let total = 0;
        let shipping = 0;
        let quantity = 0;
        let tax, grandTotal;
        for(const product of cart){
            product.quantity = product.quantity || 1;
            total = total + product.price * product.quantity;
            shipping = shipping + product.shipping;
            quantity = quantity + product.quantity;
        }
        tax = total * .07;
        grandTotal = total + shipping + tax;
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;