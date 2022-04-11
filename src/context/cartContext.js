import { createContext, useContext, useReducer } from 'react';
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
      if( (cart.find((element) => element._id === item._id))) {
        return console.log('already present in cart');
      }
      const response = await axios({
          method: 'post',
          url: '/api/user/cart',
          headers: { authorization: localStorage.getItem('token') },
          data: { product: item }
      });
     
       if(response.status === 201) {
         dispatch({type: 'CART', payload: response.data.cart});
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
          console.log("increment/decrement qty:",response )
          dispatch({type: "CART", payload: response.data.cart})
          // setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Product quantity updated in Cart"})
        }
      } catch (err) {
        console.log(err);
        // setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Kindly do login.."})
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
      };

   
    return(
        <CartContext.Provider value={{ state,
        wishlist, dispatch , addToCart, removeFromCart, changeCartQty }}>
          {children} 
        </CartContext.Provider>
    );
}

export { useCartContext, CartProvider };