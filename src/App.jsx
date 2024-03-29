import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import ProductListPage from './ProductListPage';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import CartPage from './CartPage';
import EasySignup from "./SignupPage";
import LoginPage from "./LoginPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import ResetPasswordPage from "./ResetPasswordPage";
import Loading from './Loading';
import axios from "axios";
import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";
import Alert from "./Alert";
import { CountContext, UserContext, TotalCountContext, AlertContext, setCartContext } from "./Context";



function App() {

  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");


  useEffect(() => {
    if (token) {
      axios.get("https://myeasyKart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        setUser(response.data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);


  const [alert, setAlert] = useState();
  const removeAlert = () => {
    setAlert(undefined);
  };

  const [user, setUser] = useState();
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);
  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }

  function updateCart(newCart) {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem('my-cart', cartString);
  }

  const totalCount = Object.keys(cart).reduce(function(previous, current) {
    return previous + cart[current];
  }, 0);



  if (loading) {
    return <Loading />
  }

  return (
    <div className="bg-gray-200 h-screen overflow-y-scroll grow flex flex-col">
      <UserContext.Provider value={{ user, setUser }}>
        <AlertContext.Provider value={{ alert, setAlert, removeAlert }} >
          <Alert />
          <CountContext.Provider value={cart}>
            <TotalCountContext.Provider value={totalCount}>
              <setCartContext.Provider value={updateCart}>
                <NavBar />
                <div className=" grow">
                  <Routes>
                    <Route index element={
                      <UserRoute >
                        <ProductListPage />
                      </UserRoute >
                    } />
                    <Route
                      path="/products/:id"
                      element={
                        <UserRoute >
                          <ProductDetail onAddToCart={handleAddToCart} />
                        </UserRoute >}
                    />
                    <Route path="*" element={<NotFound />} />

                    <Route path="/cart/" element={
                      <UserRoute >
                        <CartPage />
                      </UserRoute >} />

                    <Route path="/signup" element={
                      <AuthRoute>
                        <EasySignup />
                      </AuthRoute>} />


                    <Route path="/login"
                      element={
                        <AuthRoute>
                          <LoginPage />
                        </AuthRoute>} />
                    <Route path="/forgotPassword" element={
                      <AuthRoute ><ForgotPasswordPage />
                      </AuthRoute >} />
                    <Route path="/resetpasswordPage" element={
                      <AuthRoute ><ResetPasswordPage />
                      </AuthRoute >} />
                  </Routes>
                </div>
              </setCartContext.Provider>
            </TotalCountContext.Provider>
          </CountContext.Provider>
        </AlertContext.Provider>
      </UserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
