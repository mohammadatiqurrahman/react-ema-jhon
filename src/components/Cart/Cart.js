import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let total = 0;
    let totalQuantity = 0;
    for(const product of props.cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price*product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    // let shippingCost = 0;
    // for(const product of props.cart){
    //     shippingCost = shippingCost+product.shipping;
    // }
    const shipping = total>0 ? 15 : 0;
    const tax = (total+shipping)*.10;
    return (
        <div className="style-orderSummary">
            <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Order Items: {totalQuantity}</p>
            </div>
            <div>
            <table>
               <tbody>
               <tr>
                    <td>Shipping & Handling: </td>
                    <td> ${shipping}</td>
                </tr>
                <tr>
                    <td>Total Before Tax: </td>
                    <td>$ {total.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Total Tax: </td>
                    <td>$ {tax.toFixed(2)}</td>
                </tr>
                <tr>
                    <td><h3>Order Total: </h3></td>
                    <td><h3>${(total+shipping+tax).toFixed(2)}</h3></td>
                </tr>
               </tbody>
            </table>
            {props.children}
            </div>
        </div>
    );
};

export default Cart;