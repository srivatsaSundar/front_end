import React from 'react';

const SignUp = () => {
return (
	<div>
	<p>Sign Up</p>
    <form action="/" method="post">
        <div className='username'>
        <input type="text" placeholder="Username" />
        </div>
        <div className='Password'>
        <input type="password" placeholder="Password" />
        </div>
        <button type="submit" className='btn'>Sign Up</button>
    </form>
    </div>

);
};

export default SignUp;
