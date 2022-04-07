import { createContext, useState, useContext } from 'react';
import axios from 'axios';


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);


    async function addToCart (item, setCart){
      const response = await axios({
          method: 'post',
          url: '/api/user/cart',
          headers: { authorization: localStorage.getItem('token') },
          data: { product: item }
      });
      setCart(response.data.cart);
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
          setCart(response.data.cart);
          // setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Product quantity updated in Cart"})
        }
      } catch (err) {
        console.log(err);
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
        setCart(response.data.cart);
      };

    
    return(
        <CartContext.Provider value={{ cart, setCart , total, setTotal , addToCart, removeFromCart, changeCartQty }}>
          {children} 
        </CartContext.Provider>
    );
}

export { useCartContext, CartProvider };