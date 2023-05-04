import React from 'react';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/service' activeStyle>
			Services
		</NavLink>
		<NavLink to='/signup' activeStyle>
			Sign Up
		</NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
