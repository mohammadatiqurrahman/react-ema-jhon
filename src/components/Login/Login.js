import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="style-login">
            <div>
                <h3 style={{color: 'blue'}}>Please Login</h3>
                <form>
                    <input type="email" name="email" id="" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" name="password" id="" placeholder="Enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New user? <Link to="/register">Create Account</Link></p>
                <p>---------or---------</p>
                <button onClick={signInUsingGoogle} className="btn-regular">Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;