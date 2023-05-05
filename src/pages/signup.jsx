import React from 'react';
import './pages.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
return (
	<div className='login'>
	<p style={{textAlign:'center'}}>Sign Up</p>
    <form action="/" method="post">
        <div className='username input-container'>
        <input type="text" placeholder="Username" />
        </div>
        <div className='Email input-container'>
        <input type="text" placeholder="Email" />
        </div>
        <div className='Password input-container'>
        <input type="password" placeholder="Password" /><br></br>
        <br></br>
        <br></br>
        <input type="password" placeholder="Confirm Password" />
        </div>
        <div style={{marginLeft:'-50px'}}>
        <button type="submit" className='btn-6 custom-btn '>Sign Up</button>
        </div>
        <p style={{textAlign:'center'}}>Already have an account?</p>
        <Link to='/Login'>
        <p style={{textAlign:'center',color:'whitesmoke'}}>Log In</p>
        </Link>
        
    </form>
	</div>
);
};

export default SignUp;
