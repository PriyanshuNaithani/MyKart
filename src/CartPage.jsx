import React, { useState, useEffect } from "react";
import CartList from './CartList';
import { getProductDetail } from "./API";
import Loading from "./Loading";
function CartPage({ cartObject }) {
  const [loading , setLoading] = useState(true);
  const [products , setProducts] = useState([]);
  useEffect(function(){
const promises = Object.keys(cartObject).map(function (productId){
    return getProductDetail(productId);
  });
   Promise.all(promises).then(function (products){
  setProducts(products);
  setLoading(false);
  });
  },[]);
  
  function handleCountChange() {

  }
  function handleButtonClick() {

  }
  function handleProceedClick() {

  }
  function handleUpdateClick(){
    
  }
  return (
    <div className="mx-1.85 my-5 sm:m-5">
      <div className="px-3.5 pt-1.85 pb-4.5 max-w-6xl mx-auto sm:px-9 sm:py-12.5 bg-white sm:my-15 md:px-24 md:py-20">
        <div className="grid grid-cols-6 justify-items-center border items-center py-2">
          <span></span>
          <span></span>
          <h2 className="text-gray-800 text-lg leading-6 font-semibold font-sans ">Product</h2>
          <h2 className="text-gray-800 text-lg leading-6 font-semibold font-sans ">Price</h2>
          <h2 className="text-gray-800 text-lg leading-6 font-semibold font-sans ">Quantity</h2>
          <h2 className="text-gray-800 text-lg leading-6 font-semibold font-sans ">Subtotal</h2>
        </div>


  { loading?<Loading />:(
        <CartList cart={products} />)
  }                                                                   
        
        <div className="flex justify-between">
          <div>
            <input
              className="p-1.2 border bg-white  h-9 font-sans font-normal text-gray-150 border-gray-50 text-sm leading-5"
              type="text"
              placeholder="Coupon Code"
              onChange={handleCountChange}
            />
            <button
              onClick={handleButtonClick}
              className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-2.5 ml-2  rounded-md font-sans font-bold text-sm leading-4 mt-6">
              APPLY COUPON
					</button>
          </div>
          <div>
            <button
              onClick={handleUpdateClick}
              className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-3 ml-2  rounded-md font-sans font-bold text-sm leading-4 mt-6">
              UPDATE CART
					</button>
          </div>
        </div>

        
        <div className="flex justify-between mt-8">
          <span></span>
          <div className="border w-1/2 ">
            <h1 className="text-gray-800 bg-gray-100 py-3 px-4 text-2xl font-bold font-sans">Cart Totals</h1>
            <div className="px-5 flex flex-col">
              <div className="flex justify-between items-center">
            <p className="text-gray-800 text-lg leading-6 font-semibold font-sans py-4">subtotal</p>
              <span className="mr-20 text-gray-800 text-lg leading-6 font-semibold font-sans">$137</span>
                </div>
            <hr></hr>
              <div className="flex justify-between items-center">
            <p className="text-gray-800 text-lg leading-6 font-semibold font-sans py-4">total</p>
                <span className="mr-20 text-gray-800 text-lg leading-6 font-semibold font-sans">$137</span>
              </div>
            <hr></hr>
            <button
              onClick={handleProceedClick}
              className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-md font-sans font-bold text-base leading-5 mt-4 mb-6">
              PROCEED TO CHECKOUT
					</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartPage;