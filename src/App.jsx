import React, { useState, createContext, useEffect } from 'react';
import NavBar from './NavBar';
import ProductListPage from './ProductListPage';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import CartPage from './CartPage';
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import ForgotPasswordPage from "./ForgotPasswordPage";


export const CountContext = createContext();
export const TotalCountContext = createContext();
export const setCartContext = createContext();
function App() {

  
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);
  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }

  function updateCart(newCart){
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem('my-cart', cartString);
  }

  const totalCount = Object.keys(cart).reduce(function(previous, current) {
    return previous + cart[current];
  }, 0);

 
  return (
    <div className="bg-gray-200 h-screen overflow-y-scroll grow flex flex-col">
      <CountContext.Provider value={cart}>
        <TotalCountContext.Provider value={totalCount}>
         <setCartContext.Provider value={updateCart}> 
          <NavBar />
          <div className=" grow">
            <Routes>
              <Route index element={<ProductListPage />} />
              <Route
                path="/products/:id"
                element={<ProductDetail onAddToCart={handleAddToCart} />}
              />
              <Route path="*" element={<NotFound />} />

              <Route path="/cart/" element={<CartPage />} />

              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
            </Routes>
          </div>
         </setCartContext.Provider>
        </TotalCountContext.Provider>
        <Footer />
      </CountContext.Provider>
    </div>

  );
}

export default App;
