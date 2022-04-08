// import "./App.css";
import { Navigation } from "./components/navigation/Navigation";
import { CartPage } from "./pages/cartPage/CartPage";
import { LandingPage } from "./pages/landingPage/LandingPage";
import  MockMan  from 'mockman-js';
import { WishlistPage } from "./pages/wishlistPage/WishlistPage";
import { ProductListing } from "./pages/productListing/ProductListing";
import { Signup } from "./pages/signupPage/Signup";
import { Login } from "./pages/loginPage/login";
import { Logout } from "./pages/logoutPage/Logout";
import React from 'react';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/mockman" element={<MockMan />} />

      </Routes>
      
      
    </div>
  );
}

export default App;
