import { FaRegHeart, FaStar } from "react-icons/fa";

import "./card.css";


const CardVertical = ({product, addToWishlist, addToCart}) =>{


    const { title, desc, rating, instock,  price:{original, discount, discounted}, categoryName , img} = product;

    return(
       
       
        <div className="card">
            <button 
            onClick={addToWishlist}
            className="wishlist--badge"><FaRegHeart   style={{color: "red", fontSize: "1.5rem"}}/>
            </button>
            <div className="card--image">
                <img src={img} className="img-fluid" alt="Plant-Image" width="200px" height="200px"/>
            </div>

            <div className="card--body">
                <div className="card--details">
                    <h4 className="card--title">{title}</h4>
                    <div className="card--description">{desc}</div>
                    <div className="badge-rating">
                       {rating}<FaStar style={{fontSize:"0.9rem", color: "white"}}></FaStar>
                    </div>
                    <div className="card-price">
                        <h5 className="price-original">{'\u20B9'} {original} </h5>
                        <h5 className="price-discounted">{'\u20B9'} {discounted} </h5>
                        <h5 className="discount">{discount}% off</h5>

                    </div>
                </div>

                <div className="card--buttons">
                    <button 
                    onClick={addToCart}
                    className="btn btn--primary">Add to cart</button>
                </div>
            </div>
        </div>
    
    )
}

export { CardVertical };