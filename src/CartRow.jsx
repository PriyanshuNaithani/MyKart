import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
function CartRow({ pic, title, price }) {
	const [value, setValue] = useState(1);
	function handleClickChange(event) {
		setValue(event.target.value);
	}
	return (
		<div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center bg-white border-2 py-2 sm:py-0">
      <TiDeleteOutline className="text-3xl text-gray-50"/>
			<div className="aspect-square p-2 max-h-24 mt-2">
				<img className="h-full w-full object-cover" src={pic} />
			</div>
			<h2 className="font-sans  text-lg	leading-5 font-bold text-primary-500 mt-2 ">
				{title}
			</h2>
			<p className="text-sm font-bold font-sans text-gray-900 mt-2">${price}</p>

			<input
				className="p-1.2 border bg-white w-9.5 h-9 font-sans font-normal text-gray-150 border-gray-50 text-sm leading-5 mt-2"
        type="number"
				value={value}
				onChange={handleClickChange}
			/>

			<p className="text-sm font-bold font-sans text-gray-900 mt-2">${price*value}</p>
		</div>
	);
}
export default CartRow;
