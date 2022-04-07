
import "./navigation.css";

import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import {  useEffect } from "react";
import { useWishlistContext } from "../../context/wishListContext";

const Navigation = () => {

    const { cart, setCart } = useCartContext();
    const { wishlist , setWishlist } = useWishlistContext();

    return (
       
        <nav className="nav-bar">
        <div className="nav--body">
            <NavLink to='/'>
            <div className="nav--header">
            <h2 class="nav--title">Plan<span style={{color: "white"}}>e</span>t</h2>
            </div>
            </NavLink>
            <div className="nav--search">
                <input type="text" placeholder="Search here" className="nav--search--input" />
                <button className="nav--search--btn">
                    <FaSearch /> 
                </button>
            </div>

            <div className="nav--links">
                <ul className="nav--list">
                    <li className="nav--item">
                        <NavLink to='/wishlist' className="nav--link">
                            <span className="badge--number">{wishlist.length}</span>
                            <FaRegHeart className="icons"/>
                        </NavLink>
                    </li>

                    <li className="nav--item">
                        <NavLink to='/cart' className="nav--link">
                            <span className="badge--number">{cart.length}</span>
                            <FaShoppingCart className="icons"/>

                        </NavLink>
                    </li>
                    <li className="nav--item">
                        <a href="#" className="nav--link link-btn btn-solid">LogIn</a>
                    </li> 
                    <li className="nav--item">
                        <a href="/logout/logout.html" className="nav--link link-btn">Log Out</a>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
       
    );
}

export { Navigation };