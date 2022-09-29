import React, {useState, useEffect} from "react";
import Link from "next/link";
import {BsBagCheckFill} from "react-icons/bs";
import {useStateContext} from "../context/StateContext";
import {confettiSuccess} from "../lib/utils";

const Success = () => {
	const {setCartItems, setTotalPrice, setTotalQuantity} = useStateContext();
	const [order, setOrder] = useState();

	useEffect(() => {
		localStorage.clear();
		setCartItems([]);
		setTotalPrice(0);
		setTotalQuantity(0);
		confettiSuccess();
	}, []);

	return (
		<div className='success-wrapper'>
			<div className='success'>
				<p className='icon'>
					<BsBagCheckFill />
				</p>
				<h2>Order Successful!</h2>
				<p className='email-msg'>Check your email for your receipt</p>
				<p className='description'>
					If you have any questions or enquires, please email
					<a
						href='mailto:order@jaysstore.com'
						target='_blank'
						rel='no_referrer'
						className='email'>
						order@jaysstore.com
					</a>
				</p>
				<Link href='/'>
					<button type='button' width='300px' className='btn'>
						Continue Shopping
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Success;
