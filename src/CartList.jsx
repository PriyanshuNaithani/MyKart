import React, { useEffect, useState, useContext } from 'react';
import Input from './Input';
import Button from './Button';
import CartRow from './CartRow';
import { setCartContext, CountContext } from './App';

function CartList({ products }) {
	const cart = useContext(CountContext);
	const updateCart = useContext(setCartContext);
	const [localCart, setLocalCart] = useState(cart);

	useEffect(
		function() {
			setLocalCart(cart);
		},
		[cart]
	);

	function handleQuantityChange(productid, newValue) {
		const newLocalCart = { ...localCart, [productid]: newValue };
		setLocalCart(newLocalCart);
	}

	function handleUpdateCartClick() {
		updateCart(localCart);
	}

	function handleRemove(productid) {
		const newCart = { ...cart };
		delete newCart[productid];
		updateCart(newCart);
	}

	return (
		<div>
			<div className="flex px-4 py-3 space-x-4 border border-gray-400 bg-gray-100">
				<span className="grow ml-38 text-gray-800 text-lg leading-6 font-semibold font-sans ">
					Product
				</span>
				<span className="w-20 text-gray-800 text-lg leading-6 font-semibold font-sans ">
					Price
				</span>
				<span className="w-32 text-gray-800 text-lg leading-6 font-semibold font-sans ">
					Quantity
				</span>
				<span className="w-20 text-gray-800 text-lg leading-6 font-semibold font-sans ">
					Subtotal
				</span>
			</div>
			{products.map(function(item) {
				return (
					<CartRow
						key={item.id}
						product={item}
						quantity={localCart[item.id]}
						onQuantityChange={handleQuantityChange}
						onRemove={handleRemove}
					/>
				);
			})}
			<div className="flex px-4 py-3 space-x-4 justify-between border border-gray-400">
				<div className="flex">
					<Input className="h-9" placeholder="Coupan Code" />
					<Button className=" ml-2">APPLY COUPAN</Button>
				</div>
				<Button onClick={handleUpdateCartClick}>UPDATE CART</Button>
			</div>
		</div>
	);
}
export default CartList;
