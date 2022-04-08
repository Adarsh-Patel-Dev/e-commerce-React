import { Navigation } from "../../components/navigation/Navigation";
import "./wishlistPage.css"
import { useEffect } from "react";
import { useWishlistContext } from "../../context/wishListContext";
import { useCartContext } from "../../context/cartContext";
import axios from "axios";
import { CardVertical } from "../../components/card/CardVertical";

const WishlistPage = () => {

        const { wishlist, setWishlist , removeFromWishlist} = useWishlistContext();
        const { cart, setCart, addToCart } = useCartContext();


        useEffect(()=>{
            (async ()=>{
                const response = axios({
          method: "get",
          url: "/api/user/wishlist",
          headers: { authorization: localStorage.getItem('token') },
        });
                if(response.status === 200){
                    setWishlist(response.data.wishlist);
                }
            })();
        },[]);
    
        console.log("my wishlist has",wishlist);

    return(
        <>
        <Navigation/>
        <section className="wishlist-section">
        <div className="wishlist-container">
                    <h1 className="wishlist-title">My <span className="green"> Wish </span> List({wishlist.length}) </h1>
            
            <div className="wishlist-items">
                <div className="wishlist-header">
                </div>
                {
                    wishlist.map(item=>(<CardVertical key={item._id}
                    product={item}
                    addToCart={()=>addToCart(item,setCart)}
                    addToWishlist={()=>removeFromWishlist(item._id,setWishlist)}
                    />))
                }
                    
            </div>
        </div>
    </section>
    </>
    )
}

export { WishlistPage };
