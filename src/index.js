import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductPageProvider } from "./context/productPageContext";
import { CartProvider } from "./context/cartContext";
import { WishlistProvider } from "./context/wishListContext";
import { CategoryProvider } from "./context/categoryContext";
import { AuthProvider } from "./context/auth-context";
import { AddressProvider } from "./context/addressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
          <AddressProvider>
            <WishlistProvider>
              <ProductPageProvider>
                <CategoryProvider>
                  <App />
                </CategoryProvider>
              </ProductPageProvider>
            </WishlistProvider>
          </AddressProvider>
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
