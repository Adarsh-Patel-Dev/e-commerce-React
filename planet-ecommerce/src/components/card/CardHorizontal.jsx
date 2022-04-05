import "./card.css";
import { FaRegHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState, useContext } from 'react';
import { CartContext } from "../../context/cartContext";

const CardHorizontal = ({product, addToWishlist, removeFromCart }) => {

    const { changeCartQty } = useContext(CartContext);

    // const [counter, setCounter] = useState(1);

    // function increment () {
    //     setCounter(counter + 1);
    // }

    // function decrement () { 
    //     setCounter(counter - 1);
    // }

    const {title, desc, rating, instock,  price:{original, discount, discounted}, categoryName , img} = product;
    

    return(
        <div className="card card--horizontal">

                <div className="card--image">
                    <img src={img} className="img-fluid" alt="plant image" width="170" height="170" />
                </div>

                <div className="card--body">
                    <div className="card--header">
                        <div className="divider--horizontal"></div>
                        <div className="card--body">
                            <div className="card--details">
                                <h4 className="card--title">{title}</h4>
                                {/* <div className="card--description">{desc}</div> */}
                                <div className="badge-rating">
                                    3.5 <FaStar className="fa fa-star" style={{fontSize:"0.9rem", color: "white"}}></FaStar>
                                </div>
                                <div className="card-price">
                                    <h5 className="price-original">{'\u20B9'} {original}</h5>
                                    <h5 className="price-discounted"> {'\u20B9'}{discounted}</h5>
                                    <h5 className="discount">{discount}% off</h5>

                                </div>
                                <div className="card--item-qty">
                                    <div className="card--qty">
                                        <button className="btn-minus" 
                                        // disabled={(counter>1)?false:true}
                                        onClick={()=>changeCartQty("decrement", product._id)}>-</button>

                                        <label type="text"  className="card--qty-input">{product.qty}</label>
                                        <button className="btn-plus"
                                        onClick={()=>changeCartQty("increment", product._id)}>+</button>
                                    </div>
                                </div>
                            </div>

                            <div class="card--buttons--horizontal">
                                <button 
                                onClick={removeFromCart}
                                class="btn btn--primary btn--outline">Remove From CART</button>
                                <button 
                                onClick={addToWishlist}
                                class="btn btn--primary">Move To Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export {  CardHorizontal };