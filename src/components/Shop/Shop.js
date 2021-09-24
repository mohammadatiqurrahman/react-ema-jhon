import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        if(products.length){
            const existingItem = getStoredCart();
        const storedCart = [];
        // console.log(existingItem)
        for(const key in existingItem){
            const addedProduct = products.find(product=>product.key===key);
            console.log(key,addedProduct)
            storedCart.push(addedProduct)
        }
        setCart(storedCart);
        }
        
    },[products])
    const handleAddToCart =(product) =>{   
            const newCart = [...cart,product]
            setCart(newCart)
            addToDb(product.key)
           }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Product Available: {products.length}</h2>
                {
                    products.map(product=><Product 
                        key={product.key} 
                        product={product}
                        handleAddToCart={handleAddToCart}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;