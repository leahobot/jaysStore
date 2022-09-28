import React from "react";
import Link from "next/link";
import logo from "../assets/logo.svg";
import {AiOutlineShopping} from "react-icons/ai";

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<Link href='/'>
				<img src={logo} alt='brand_logo' className='brand-logo' />
			</Link>
			<button type='button' className='cart-icon'>
				<AiOutlineShopping />
				<span className='cart-item-qty'>1</span>
			</button>
		</div>
	);
};

export default Navbar;
