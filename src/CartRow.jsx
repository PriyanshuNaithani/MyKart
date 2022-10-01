import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import Input from './Input';
function CartRow({ product, quantity, onQuantityChange, onRemove }) {
	function handleCrossClick() {
		onRemove(product.id);
	}

	function handleChange(event) {
		onQuantityChange(product.id, +event.target.value);
	}

	return (
		<div className="flex items-center px-4 py-2 space-x-4 border border-gray-400">
			<span className="w-10 ">
				<TiDeleteOutline
					className="text-3xl text-gray-50 cursor-pointer"
					productid={product.id}
					onClick={handleCrossClick}
				/>
			</span>
			<div className="w-20 h-20">
				<img className="w-full h-full object-cover" src={product.thumbnail} />
			</div>
			<h3 className="grow font-sans text-lg	leading-5 font-bold text-primary-500">
				{product.title}
			</h3>
			<span className="w-20 text-sm font-bold font-sans text-gray-900">
				${product.price}
			</span>
			<div className="w-32">
				<Input
					className=" w-14 "
					type="number"
					value={quantity}
					onChange={handleChange}
				/>
			</div>
			<span className="w-20 text-sm font-bold font-sans text-gray-900">
				${product.price * quantity}
			</span>
		</div>
	);
}
export default CartRow;
