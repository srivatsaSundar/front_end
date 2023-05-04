import React from 'react';
import './pages.css';

const SignIn = () => {
return (
	<div>
	<p>Sign In</p>
    <form action="/" method="post">
        <div className='username'>
        <input type="text" placeholder="Username" />
        </div>
        <div className='Email'>
        <input type="text" placeholder="Email" />
        </div>
        <div className='Password'>
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        </div>
        <button type="submit" className='btn'>Sign In</button>
    </form>
	</div>
);
};

export default SignIn;
