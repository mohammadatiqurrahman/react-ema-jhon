import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let total = 0;
    for(const product of props.cart){
        total = total+product.price;
    }
    let shipping = 0;
    for(const shippingg of props.cart){
        shipping = shipping+shippingg.shipping;
    }
    return (
        <div>
            <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Order Items: {props.cart.length}</p>
            </div>
            <div>
            <table>
                <tr>
                    <td>Shipping & Handling: </td>
                    <td> ${shipping.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Total Before Tax: </td>
                    <td>$ {total.toFixed(2)}</td>
                </tr>
                <tr>
                    <td><h3>Order Total: </h3></td>
                    <td><h3>$ {(total+shipping).toFixed(2)}</h3></td>
                </tr>
            </table>
            </div>
        </div>
    );
};

export default Cart;