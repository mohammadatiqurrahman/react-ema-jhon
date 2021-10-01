import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
    return (
        <div className="header">
                <img src={logo} alt="" />
                <nav>
                    <NavLink activeStyle={activeStyle} to="/shop">Shop</NavLink>
                    <NavLink activeStyle={activeStyle} to="/order_review">Order Review</NavLink>
                    <NavLink activeStyle={activeStyle} to="/inventory">Inventory</NavLink>
                    <img className="logo" src={logo} alt="" />
                </nav>

        </div>
    );
};

export default Header;