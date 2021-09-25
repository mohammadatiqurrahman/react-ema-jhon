import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    const [displayProducts,setDisplayProducts] = useState([])
    
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setDisplayProducts(data)
        })
    },[])
    useEffect(()=>{
        if(products.length){
            const existingItem = getStoredCart();
        const storedCart = [];
        // console.log(existingItem)/
        for(const key in existingItem){
            const addedProduct = products.find(product=>product.key===key);
            if(addedProduct){
                const quantity = existingItem[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
            
        }
        setCart(storedCart);
        }
        
    },[products]);
    const handleAddToCart =(product) =>{   
            const newCart = [...cart,product];
            setCart(newCart);
            addToDb(product.key);
           }

    const handleSearch = (event) =>{
    const searchProduct = (event.target.value)
    const  matchedProduct = products.filter(product=>product.name.toLowerCase().includes(searchProduct.toLowerCase()))
        setDisplayProducts(matchedProduct)
     }

    return (
        <>
        <div className="search-container">
            <input type="text" onChange={handleSearch} placeholder="Search product"/>
        </div>
        <div className="shop-container">
            <div className="product-container">
                <h2>Product Available: {products.length}</h2>
                {
                    displayProducts.map(product=><Product 
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
        </>
    );
};

export default Shop;