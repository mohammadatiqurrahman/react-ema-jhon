import React from 'react';
import { useHistory } from 'react-router';
import Cart from '../components/Cart/Cart';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../utilities/fakedb';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart,setCart] = useCart(products)
    const history = useHistory()
    const handleRemove = key=>{
        // console.log(key)
        const newCart = cart.filter(product=>product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }
    const handleOrder=()=>{
        history.push('/place_order')
        setCart([])
        clearTheCart()
    }
    return (
        <div>
            {/* <h1>This is order review page! place your order here! {products.length} cart length: {cart.length}</h1> */}
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product=><ReviewItem 
                        product={product}
                        handleRemove={handleRemove}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleOrder} className="btn-regular">Place Order</button>
                </Cart>
            </div>

            </div>

        </div>
    );
};

export default OrderReview;