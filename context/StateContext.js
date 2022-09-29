import React, {createContext, useContext, useState, useEffect} from "react";
import {toast} from "react-hot-toast";

const Context = createContext();

export const StateContext = ({children}) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [qty, setQty] = useState(1);

	let foundProduct;
	let index;

	const onAdd = (product, quantity) => {
		const checkProduct = cartItems.find((item) => item._id === product._id);

		setTotalPrice((previous) => previous + product.price * quantity);
		setTotalQuantity((previous) => previous + quantity);

		if (checkProduct) {
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (cartProduct._id === product._id) {
					return {...cartProduct, quantity: cartProduct.quantity + quantity};
				}
			});

			setCartItems(updatedCartItems);
		} else {
			product.quantity = quantity;
			setCartItems([...cartItems, {...product}]);
		}
		toast.success(`${qty} ${product.name} added to your cart`);
	};

	const addQty = () => {
		setQty((previous) => {
			const temp = previous + 1;
			return temp;
		});
	};

	const remQty = () => {
		setQty((previous) => {
			let temp = previous - 1;
			if (previous - 1 < 1) {
				return 1;
			} else {
				return temp;
			}
		});
	};

	const onRemove = (product) => {
		foundProduct = cartItems.find((item) => item._id === product._id);
		const newCartItems = cartItems.filter((item) => item._id !== product._id);

		setTotalPrice(
			(previous) => previous - foundProduct.price * foundProduct.quantity,
		);
		setTotalQuantity((previous) => previous - foundProduct.quantity);
		setCartItems(newCartItems);
	};

	const toggleCartQty = (id, value) => {
		foundProduct = cartItems.find((item) => item._id === id);
		index = cartItems.findIndex((product) => product._id === id);

		const newCartItems = cartItems.filter((item) => item._id !== id);

		if (value === "inc") {
			setCartItems([
				...newCartItems.slice(0, index),
				{...foundProduct, quantity: foundProduct.quantity + 1},
				...newCartItems.slice(index),
			]);

			setTotalPrice((previous) => previous + foundProduct.price);
			setTotalQuantity((previous) => previous + 1);
		} else if (value === "desc") {
			if (foundProduct.quantity > 1) {
				setCartItems([
					...newCartItems.slice(0, index),
					{...foundProduct, quantity: foundProduct.quantity - 1},
					...newCartItems.slice(index),
				]);

				setTotalPrice((previous) => previous - foundProduct.price);
				setTotalQuantity((previous) => previous - 1);
			}
		}
	};

	return (
		<Context.Provider
			value={{
				showCart,
				setShowCart,
				cartItems,
				setCartItems,
				totalPrice,
				setTotalPrice,
				totalQuantity,
				setTotalQuantity,
				qty,
				addQty,
				remQty,
				onAdd,
				toggleCartQty,
				onRemove,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
