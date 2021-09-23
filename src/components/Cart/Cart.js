import React from 'react';

const Cart = (props) => {
    let total = 0;
    for(const product of props.cart){
        total = total+product.price;
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Order Items: {props.cart.length}</p>
            <br />
            <h4>Total Price: ${total.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;