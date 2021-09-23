import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Product: {products.length}</h2>
                {
                    products.map(product=>console.log(product))
                }
            </div>
            <div className="cart-container">
                <h4>Order History</h4>
                <p>Order Items</p>
            </div>
        </div>
    );
};

export default Shop;