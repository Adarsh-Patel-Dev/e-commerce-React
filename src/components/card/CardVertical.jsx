import { FaRegHeart, FaStar, FaHeart } from "react-icons/fa";
import { useCartContext, useWishlistContext } from "../../context/index";
import { useNavigate, useLocation } from "react-router-dom";
import "./card.css";

const CardVertical = ({ product, addToWishlist, addToCart }) => {
  const {
    _id,
    title,
    desc,
    rating,
    instock,
    price: { original, discount, discounted },
    categoryName,
    img,
  } = product;

  const { state, dispatch } = useCartContext();
  const { removeFromWishlist } = useWishlistContext();
  const { wishlist, cart } = state;
  const navigate = useNavigate();
  const { pathname } = useLocation();             //location is obj {pathname, state, something}
  const encodedToken = localStorage.getItem("token");

  return (
    <div className="card">
      {wishlist.find((wishlistdata) => wishlistdata._id === _id) ? (
        <button
          onClick={() => removeFromWishlist(_id, dispatch)}
          className="wishlist--badge"
        >
          <FaHeart style={{ color: "red", fontSize: "1.5rem" }} />
        </button>
      ) : (
        <button
          onClick={
            encodedToken
              ? addToWishlist
              : () => navigate("/login", { state: { from: pathname } })
          }
          className="wishlist--badge"
        >
          <FaRegHeart style={{ color: "red", fontSize: "1.5rem" }} />
        </button>
      )}
      <div className="card--image">
        <img
          src={img}
          className="img-fluid"
          alt="Plant-Image"
          width="200px"
          height="200px"
        />
      </div>

      <div className="card--body">
        <div className="card--details">
          <h4 className="card--title">{title}</h4>
          <div className="card--description">{desc}</div>
          <div className="badge-rating">
            {rating}
            <FaStar style={{ fontSize: "0.9rem", color: "white" }}></FaStar>
          </div>
          <div className="card-price">
            <h5 className="price-original">
              {"\u20B9"} {original}{" "}
            </h5>
            <h5 className="price-discounted">
              {"\u20B9"} {discounted}{" "}
            </h5>
            <h5 className="discount">{discount}% off</h5>
          </div>
        </div>

        <div className="card--buttons">
          {cart.find((cartdata) => cartdata._id === _id) ? (
            <button
              onClick={() => navigate("/cart")}
              className="btn btn--primary blue"
            >
              Go to Cart
            </button>
          ) : (
            <button
              onClick={
                encodedToken
                  ? addToCart
                  : () => navigate("/login", { state: { from: { pathname } } })
              }
              className="btn btn--primary"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { CardVertical };
