import axios from "axios";
import { useContext, createContext } from "react";
import { useCartContext } from "./cartContext";
import { Toast } from "../components/Toast/Toast";

const WishlistContext = createContext();
const useWishlistContext = () => useContext(WishlistContext);

const WishlistProvider = (props) => {
  const { state, dispatch } = useCartContext();
  const { wishlist, cart } = state;

  async function removeFromWishlist(productId, payload) {
    const response = await axios({
      method: "delete",
      url: `/api/user/wishlist/${productId}`,
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "WISHLIST", payload: response.data.wishlist });
    Toast({ type: "success", msg: "Product removed from wishlist" });
  }

  async function addToWishlist(product, payload) {
    if (wishlist.find((element) => element._id === product._id)) {
      console.log("Item is already in wishlist");
    } else {
      const response = await axios({
        method: "post",
        url: "/api/user/wishlist",
        headers: { authorization: localStorage.getItem("token") },
        data: {
          product: product,
        },
      });

      if (response.status === 201) {
        dispatch({ type: "WISHLIST", payload: response.data.wishlist });
        Toast({ type: "success", msg: "Product added to wishlist" });
      }
    }
  }

  return (
    <WishlistContext.Provider value={{ removeFromWishlist, addToWishlist }}>
      {props.children}
    </WishlistContext.Provider>
  );
};

export { useWishlistContext, WishlistProvider };
