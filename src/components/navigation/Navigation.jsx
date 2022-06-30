import "./navigation.css";

import { FaSearch, FaRegHeart, FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdOutlineShoppingCart, MdShoppingCart, MdClear } from "react-icons/md";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import Logo from "../../images/planet-logo.svg";
import { useEffect, useState } from "react";
import { useWishlistContext } from "../../context/wishListContext";
import { useCategoryContext } from "../../context";

const Navigation = () => {
  const token = localStorage.getItem("token");
  const [logout, setLogout] = useState(false);
  const location = useLocation();
  const { state, setCart, dispatch } = useCartContext();
  const { cart, wishlist } = state;
  const { searchValue, setSearchValue, category } = useCategoryContext()

  const encodedToken = localStorage.getItem("token");
  useEffect(() => {
    if (logout) {
      window.location.reload();
    }
  }, [logout]);

  return (
    <nav className="nav-bar">
      <div className="nav--body">
        <span className="nav--logo">
          <img className="logo" src={Logo} />
        </span>
        <NavLink to="/">
          <div className="nav--header">
            <h2 class="nav--title">
              Plan<span style={{ color: "white" }}>e</span>t
            </h2>
          </div>
        </NavLink>

        {encodedToken && (
          <div className="nav--search">
            <input
              onChange={(e) => setSearchValue(e.target.value)
              }
              value={searchValue}
              type="text"
              placeholder="Search"
              className="nav--search--input"
            />
            <MdClear  className="clear-icon"
            style={{display:!searchValue.length?"none":"block"}}
            onClick={()=>setSearchValue("")}  
            />
            {/* <button className="nav--search--btn">
                    <FaSearch /> 
                </button> */}
          </div>
        )}

        <div className="nav--links">
          <ul className="nav--list">
            <li className="nav--item">
              <NavLink to="/wishlist" className="nav--link">
                <span className="badge--number">{wishlist.length}</span>
                <FaRegHeart className="icons" />
              </NavLink>
            </li>

            <li className="nav--item">
              <NavLink to="/cart" className="nav--link">
                <span className="badge--number">{cart.length}</span>
                <FaShoppingCart className="icons" />
              </NavLink>
            </li>
            <li className="nav--item">
              {!token ? (
                <NavLink
                  to="/signup"
                  className="nav--link"
                  state={{ from: location }}
                >
                  <span className="nav--link link-btn btn-solid">Signup</span>
                </NavLink>
              ) : (
                <div
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  {/* <Avatar/> */}
                  <NavLink
                    to="/logout"
                    className="nav--link"
                    onClick={() => {
                      setLogout(true);
                      localStorage.clear();
                      Toast({ type: "info", msg: "You have logged out." });
                    }}
                  >
                    <span className="nav--link link-btn btn-solid">Logout</span>
                  </NavLink>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
