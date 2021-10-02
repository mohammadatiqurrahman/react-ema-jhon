import React from 'react';

const ReviewItem = (props) => {
    const {name,price,stock,key} = props.product;
    return (
        <div>
            <div className="product">
                <div>
                <h3 className="product-name">{name}</h3>
                <p>Price: $ {price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=>props.handleRemove(key)} className="btn-regular">remove</button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;