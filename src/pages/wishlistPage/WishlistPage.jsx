import { Navigation } from "../../components/navigation/Navigation";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./wishlistPage.css";
import { useEffect } from "react";
import { useWishlistContext } from "../../context/wishListContext";
import { useCartContext } from "../../context/cartContext";
import axios from "axios";
import { CardVertical } from "../../components/card/CardVertical";

const WishlistPage = () => {
  const { dispatch, addToCart, wishlist } = useCartContext();
  const { removeFromWishlist } = useWishlistContext();

  useEffect(() => {
    (async () => {
      const response = axios({
        method: "get",
        url: "/api/user/wishlist",
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 200) {
        dispatch({ type: "WISHLIST", payload: response.data.wishlist });
      }
    })();
  }, []);

  return (
    <>
      <Navigation />
      <section className="wishlist-section">
        <div className="wishlist-container">
          <h1 className="wishlist-title">
            My <span className="green"> Wish </span> List({wishlist.length}){" "}
          </h1>

          <div className="wishlist-items">
            {wishlist.length === 0 ? (
              <h2 className="wishlist-empty">
                Your wishlist is empty. 
                <Link to="/products">
           <button className="green btn btn--primary" >Add items</button>
           </Link> 
              </h2>
            ) : (
              wishlist.map((item) => (
                <CardVertical
                  key={item._id}
                  product={item}
                  addToCart={() => addToCart(item, dispatch)}
                  addToWishlist={() => removeFromWishlist(item._id, dispatch)}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export { WishlistPage };
