import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
                <img className="top-logo" src={logo} alt="" />
                <nav>
                    <a href="/Home">Home</a>
                    <a href="/Product">Product</a>
                    <a href="/Order">Order Review</a>
                    <a href="/Inventory">Inventory</a>
                    <img className="logo" src={logo} alt="" />
                </nav>

        </div>
    );
};

export default Header;