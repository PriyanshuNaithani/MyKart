import React, { useState } from 'react';
function CartRow({ pic, title, price }) {
	const [value, setValue] = useState(1);
	function handleClickChange(event) {
		setValue(event.target.value);
	}
	return (
		<div className="grid grid-cols-5 gap-x-20 items-center bg-white border-2 ">
			<div className="aspect-square p-2 max-h-24">
				<img className="h-full w-full object-cover" src={pic} />
			</div>
			<h2 className="font-sans  text-lg	leading-5 font-bold text-primary-500 ">
				{title}
			</h2>
			<p className="text-sm font-bold font-sans text-gray-900">${price}</p>

			<input
				className="p-1.2 border bg-white w-9.5 h-9 font-sans font-normal text-gray-150 border-gray-50 text-sm leading-5"
        type="number"
				value={value}
				onChange={handleClickChange}
			/>

			<p className="text-sm font-bold font-sans text-gray-900">${price*value}</p>
		</div>
	);
}
export default CartRow;
