import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';
const Login = () => {
return (
	<div className='login'>
	<p style={{textAlign:'center'}}>Log In</p>
    <form action="/" method="post">
        <div className='username input-container'>
        <input type="text" placeholder="Username" />
        </div>
        <div className='Password input-container'>
        <input type="password" placeholder="Password" />
        </div>
        <div style={{marginLeft:'-50px'}}>
        <button type="submit" className='btn-6 custom-btn '>Log In</button>
        </div>
        <p style={{textAlign:'center'}}>Don't have an account? </p>
        <Link to='/signUp'>
        <p style={{textAlign:'center',color:'whitesmoke'}}>Sign Up</p>
        </Link>
    </form>
    </div>

);
};

export default Login;
