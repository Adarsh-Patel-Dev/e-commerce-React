// import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Auth } from "./components/Auth/Auth";
import { CartPage } from "./pages/cartPage/CartPage";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
// import  MockMan  from 'mockman-js';
import { ToastContainer } from "react-toastify";
import { WishlistPage } from "./pages/wishlistPage/WishlistPage";
import { ProductListing } from "./pages/productListing/ProductListing";
import { Signup } from "./pages/signupPage/Signup";
import { Login } from "./pages/loginPage/login";
import { Logout } from "./pages/logoutPage/Logout";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing />} />

        {/* Private Routes */}
        
        <Route
          path="/wishlist"
          element={
            <Auth>
              <WishlistPage />
            </Auth>
          }
        />
        <Route
          path="/cart"
          element={
            <Auth>
              <CartPage />
            </Auth>
          }
        />
        {/* <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} /> */}
        {/* <Route path="/mockman" element={<MockMan />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer/>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
