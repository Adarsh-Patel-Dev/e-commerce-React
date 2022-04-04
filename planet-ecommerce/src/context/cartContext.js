import { createContext, useState } from 'react';
import axios from 'axios';


const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    
    const addToCart = async (item, setCart) => {
      try {
        const response = await axios.post(
          "/api/user/cart",
          { product: item },
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );
        console.log("this is auth", response);
        if (response.status === 201) {
          setCart(response.data.cart);
        //   setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Product Added to cart"})
        }
      } catch (err) {
        console.log("err in add to cart:",err);
        // setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Kindly do login.."})
      }
    };

    async function removeFromCart(productId, setCart){
      const response = await axios({
          method: "delete",
          url: `/api/user/cart/${productId}`,
          headers:{
              authorization: localStorage.getItem('token'),
          },
        })
        console.log("this is autdffash",response);
        setCart(response.data.cart);
      };
    
    return(
        <CartContext.Provider value={{ cart, setCart , total, setTotal , addToCart, removeFromCart}}>
          {props.children} 
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };