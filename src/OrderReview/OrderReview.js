import React from 'react';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart] = useCart(products)
    return (
        <div>
            <h1>This is order review page! place your order here! {products.length} cart length: {cart.length}</h1>
        </div>
    );
};

export default OrderReview;