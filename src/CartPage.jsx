import React, { useState, useEffect, useContext } from 'react';
import CartList from './CartList';
import Loading from './Loading';
import { CountContext } from './App';
import { getProductDetail } from './API';
function CartPage() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const cart = useContext(CountContext);

	useEffect(
		function() {
			setLoading(true);
			const promises = Object.keys(cart).map(function(id) {
				return getProductDetail(id);
			});
			Promise.all(promises).then(function(products) {
				setProducts(products);
				setLoading(false);
			});
		},
		[cart]
	);

	return (
		<div className="px-3.5 pt-1.85 pb-4.5 max-w-6xl mx-auto sm:px-9 sm:py-12.5 bg-white sm:my-15 md:px-24 md:py-20">
			{loading ? <Loading /> : <CartList products={products} />}
		</div>
	);
}
export default CartPage;
