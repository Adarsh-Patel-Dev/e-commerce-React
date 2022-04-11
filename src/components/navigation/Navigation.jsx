
import "./navigation.css";

import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import {  useEffect } from "react";
import { useWishlistContext } from "../../context/wishListContext";

const Navigation = () => {

    const { state, setCart } = useCartContext();
    const { cart, wishlist } = state;

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
                        <Link to='/login' className="nav--link link-btn btn-solid">LogIn</Link>
                    </li> 
                </ul>
            </div>
        </div>

    </nav>
       
    );
}

export { Navigation };