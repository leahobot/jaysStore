import React, {useRef, useState} from "react";
import {useStateContext} from "../context/StateContext";

const Checkout = () => {
	const formRef = useRef();

	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");

	const {totalPrice, totalQuantity} = useStateContext();

	const handlePayment = (e) => {
		e.preventDefault();
	};

	return (
		<div className='checkout'>
			<form
				className='checkout-form'
				ref={formRef}
				onSubmit={(e) => handlePayment}>
				<header>
					<h1>CHECKOUT</h1>
				</header>
				<main>
					<div className='checkout-fields'>
						<input
							type='text'
							placeholder='Enter your name...'
							value={name}
							onChange={(e) => setName(e.currentTarget.value)}
							autoFocus
						/>
						<input
							type='email'
							placeholder='Enter your email...'
							value={email}
							onChange={(e) => setEmail(e.currentTarget.value)}
						/>
						<input
							type='number'
							placeholder='Enter your phone number...'
							value={number}
							onChange={(e) => setNumber(e.currentTarget.value)}
						/>
						<textarea
							placeholder='Enter your Address...'
							value={address}
							onChange={(e) => setAddress(e.currentTarget.value)}
						/>
					</div>
					<div className='checkout-details'>
						<div className='details-1'>
							<h2>Total Amount:</h2>
							<p>₦{totalPrice}</p>
						</div>
						<div className='details-2'>
							<h2>Total Quantitiy:</h2>
							<p>{totalQuantity}</p>
						</div>
					</div>
				</main>

				<footer>
					<button type='submit'>Pay now</button>
				</footer>
			</form>
		</div>
	);
};

export default Checkout;
