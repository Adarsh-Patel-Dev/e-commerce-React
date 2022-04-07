import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import{ ProductPageProvider} from "./context/productPageContext";
import  { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { WishlistProvider } from "./context/wishListContext";
import { CategoryProvider } from "./context/categoryContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <CartProvider>
     <WishlistProvider>
       <ProductPageProvider>
        <CategoryProvider>
         <App />
        </CategoryProvider>
       </ProductPageProvider>
     </WishlistProvider>
    </CartProvider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
