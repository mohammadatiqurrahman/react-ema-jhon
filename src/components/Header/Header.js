import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
      const {user,logout}=useAuth();
    return (
        <div className="header">
                <img src={logo} alt="" />
                <nav>
                    <NavLink activeStyle={activeStyle} to="/shop">Shop</NavLink>
                    <NavLink activeStyle={activeStyle} to="/order_review">Order Review</NavLink>
                    <NavLink activeStyle={activeStyle} to="/inventory">Inventory</NavLink>
                    {!user.email && <NavLink activeStyle={activeStyle} to="/login">Login</NavLink>}
                    <small style={{color:'white'}}>{user.displayName}</small>
                    {user.email && <button onClick={logout} style={{padding:'1.5px 10px', marginLeft:'5px'}}>logout</button>}
                    <img className="logo" src={logo} alt="" />
                </nav>

        </div>
    );
};

export default Header;