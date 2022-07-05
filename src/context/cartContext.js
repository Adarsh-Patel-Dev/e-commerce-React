import { createContext, useContext, useReducer } from 'react';
import { Toast } from "../components/Toast/Toast"
import axios from 'axios';


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    function reducerFunc(state,action){
      switch ( action.type) {
        case "CART":
          return {...state, cart:action.payload}
          case "WISHLIST":
            return { ...state, wishlist:action.payload}
        default:
          break;
      }
    }

    const [ state, dispatch] = useReducer(reducerFunc,{  
      cart:[],
      wishlist:[],
    })

    const { cart, wishlist } = state;

    async function addToCart (item, dispatch){
      console.log("Cart add")
      if( (cart.find((element) => element._id === item._id))) {
        console.log("Item is already in cart")
      }
      else{
      const response = await axios({
          method: 'post',
          url: '/api/user/cart',
          headers: { authorization: localStorage.getItem('token') },
          data: { product: item }
      });
     
       if(response.status === 201) {
         dispatch({type: 'CART', payload: response.data.cart});
         console.log("from cart add",response.data.cart);
         Toast({ type: "success", msg: "Product added to cart" });
       }
      }
      
    }

    const changeCartQty = async (actionType, id) => {
      try {
        const response = await axios.post(
          `/api/user/cart/${id}`,
          {
            action: {
              type: actionType
            }
          },
          {
            headers: {
              authorization: localStorage.getItem('token'),
            },
          }
        );

        if (response.status === 200) {
          dispatch({type: "CART", payload: response.data.cart})
         console.log("from cart update",response.data.cart);

          Toast({ type: "success", msg: "Product quantity updated in cart."});
        }
      } catch (err) {
        console.log(err);
      }
    };


    async function removeFromCart(productId, dispatch){
      const response = await axios({
          method: "delete",
          url: `/api/user/cart/${productId}`,
          headers:{
              authorization: localStorage.getItem('token'),
          },
        })
        dispatch({type:"CART", payload:response.data.cart})
        console.log("from cart remove",response.data.cart);
        Toast({ type: "success", msg: "Product removed from cart" });
      };

   
    return(
        <CartContext.Provider value={{ state,
        wishlist, dispatch , addToCart, removeFromCart, changeCartQty }}>
          {children} 
        </CartContext.Provider>
    );
}

export { useCartContext, CartProvider };