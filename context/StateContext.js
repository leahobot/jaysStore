import React, {createContext, useContext, useState, useEffect} from "react";
import {toast} from "react-hot-toast";

const Context = createContext();

export const StateContext = ({children}) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState();
	const [totalPrice, setTotalPrice] = useState();
	const [totalQuantity, setTotalQuantity] = useState();
	const [qty, setQty] = useState(1);

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

	return (
		<Context.Provider
			value={{
				showCart,
				cartItems,
				totalPrice,
				totalQuantity,
				qty,
				addQty,
				remQty,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
