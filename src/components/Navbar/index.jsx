import React from 'react';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/' activeStyle>
			<strong>TextSlice</strong>
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/service' activeStyle>
			Services
		</NavLink>
		<NavLink to='/login' activeStyle>
			Log In
		</NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
        </NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
