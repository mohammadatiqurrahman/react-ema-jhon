import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="style-login">
            <div>
                <h3 style={{color: 'blue'}}>Please Register</h3>
                <form>
                    <input type="email" name="email" id="" placeholder="Enter Your Email" />
                    <br /><br />
                    <input type="password" name="password" id="" placeholder="Enter password" />
                    <br /><br />
                    <input type="password" name="password" id="" placeholder="Re-Enter password" />
                    <br /><br />
                    <input type="submit" value="Register" />
                </form>
                <p>Already Have an Acount? <Link to="/login">Login</Link></p>
                <p>---------or---------</p>
                <button onClick={signInUsingGoogle} className="btn-regular">Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;