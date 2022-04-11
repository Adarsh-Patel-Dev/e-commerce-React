import { CardHorizontal, Navigation } from "../../components/";
import { FaShoppingCart } from "react-icons/fa";
import "./cartPage.css";
import { useWishlistContext , useCartContext } from "../../context"
import { useContext, useEffect } from "react";
import axios  from "axios";
import CartPrice from "../../components/CartPrice/CartPrice";

const CartPage = () => {

    const { state, dispatch, removeFromCart } = useCartContext();
    const { cart } = state;
    const {  addToWishlist } = useWishlistContext();

    useEffect(() => {
       (async ()=>{
           const response = await axios({
               method: "get",
               url: "/api/user/cart",
               headers: { authorization: localStorage.getItem('token') },
           });
           if(response.status === 200){
               setCart(response.data.cart);
           }
       })();
    }, []);
    
    const price = cart.reduce(
        (acc, item) => acc + Number(item.qty) * Number(item.price.original),
        0
      );
      const discountPrice = cart.reduce(
        (acc, item) =>
          acc + (Number(item.price.original) - Number(item.price.discounted)),
        0
      );

      const totalPrice = price - discountPrice + 199;
      
      const qty = cart.reduce((acc,item)=> acc + Number(item.qty),0);


    return(
        <>  
        <Navigation/>

            <h3 class="cart-heading">My <span className="green">Cart({cart.length})</span></h3>
        <section class="cart-section">

        <div class="cart-container">
        <div class="card-component">

            { cart.map(item=>(<CardHorizontal key={item._id} 
            product={item} 
            removeFromCart={()=>removeFromCart(item._id, dispatch)}
            addToWishlist={()=>addToWishlist(item,dispatch)}     
            />))}

        </div> 
        </div>

        { cart.length === 0 ? <h3 className="cart-heading-empty">Your cart is empty. Please add items in your <FaShoppingCart className="green"/></h3> : <CartPrice qty={qty} price={price} discountPrice={discountPrice} totalPrice={totalPrice}/>}
    </section>

        </>
    )
}

export { CartPage }