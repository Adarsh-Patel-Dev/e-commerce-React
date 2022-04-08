import { useContext, createContext   } from "react";
import { useState } from "react"; 
import axios from "axios";

const WishlistContext = createContext();
const useWishlistContext = () => useContext(WishlistContext);


const WishlistProvider = (props) => {
    const [wishlist, setWishlist] = useState([]);


    async function removeFromWishlist(productId, setWishlist){
        const response = await axios({
            method: 'delete',
            url: `/api/user/wishlist/${productId}`,
            headers: {
                authorization: localStorage.getItem("token"),
            },
        })
        setWishlist(response.data.wishlist);
    }

    async function addToWishlist(product, setWishlist){
        const response = await axios({
            method: 'post',
            url: '/api/user/wishlist',
            headers: { authorization: localStorage.getItem('token') },
            data:{
                product: product
            }
        });
          console.log(response.data.wishlist);
          setWishlist(response.data.wishlist);
          
     }

     
   
    return (
        <WishlistContext.Provider value={{ wishlist, setWishlist, removeFromWishlist, addToWishlist }}>
        {props.children}
        </WishlistContext.Provider>
    )
}

export { useWishlistContext , WishlistProvider };