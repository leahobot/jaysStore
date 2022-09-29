import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cart from "./Cart";
import {useStateContext} from "../context/StateContext";
import {AiOutlineShopping} from "react-icons/ai";

const Navbar = ({bg}) => {
	const {showCart, setShowCart, totalQuantity} = useStateContext();

	return (
		<div>
			<div className={bg ? "nav-bg navbar-container" : "navbar-container"}>
				<Link href='/'>
					<Image
						src='/favicon.svg'
						alt='brand_logo'
						height={50}
						width={50}
						className='brand-logo'
					/>
				</Link>

				<button
					type='button'
					className='cart-icon'
					onClick={() => setShowCart(true)}>
					<AiOutlineShopping />
					<span className='cart-item-qty'>{totalQuantity}</span>
				</button>
			</div>
			{showCart && <Cart />}
		</div>
	);
};

export default Navbar;
