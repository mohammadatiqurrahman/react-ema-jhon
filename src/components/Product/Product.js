import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {name,img,seller,price,stock} = props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p><small>by: {seller}</small></p>
                <h4>Price: ${price}</h4>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=>props.handleAddToCart(props.product)} className="btn-regular">{element} Add to Cart</button>

            </div>
        </div>
    );
};

export default Product;