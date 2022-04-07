import { CardHorizontal, Navigation } from "../../components/";
import "./cartPage.css";
import { useWishlistContext , useCartContext } from "../../context"
import { useContext, useEffect } from "react";
import axios  from "axios";

const CartPage = () => {

    const { cart, setCart, addToCart, removeFromCart , incrementCart, decrementCart} = useCartContext();

    const { wishlist, setWishlist, addToWishlist } = useWishlistContext();

    

    useEffect(() => {
       (async ()=>{
           const response = await axios({
               method: "get",
               url: "/api/user/cart",
               headers: { authorization: localStorage.getItem('token') },
           });
           if(response.status === 200){
               console.log("cartttttt",response.data.cart);
               setCart(response.data.cart);
           }
       })();
    }, [cart]);
    
    console.log("my cart has",cart);

    const price = cart.reduce(
        (acc, item) => acc + Number(item.qty) * Number(item.originalPrice),
        0
      );
      const discountPrice = cart.reduce(
        (acc, item) =>
          acc + (Number(item.originalPrice) - Number(item.discountPrice)),
        0
      );

      const totalPrice = price - discountPrice;



    return(
        <>  
        <Navigation/>

            <h3 class="cart-heading">My <span className="green">Cart({cart.length})</span></h3>
        <section class="cart-section">

        <div class="card-component">

            

            { cart.map(item=>(<CardHorizontal key={item._id} 

            product={item} 

             removeFromCart={()=>removeFromCart(item._id, setCart)}
            addToWishlist={()=>addToWishlist(item,setWishlist)}     
            />))}

        </div> 

        <div class="price-component">
            <h2 class="price-component-heading">CART DETAILS</h2>
            <hr/>
            <div class="price-table">
                <div> Price(2 items) </div>
                <div> {'\u20B9'} 1999 </div>
            </div>
            <div class="price-table">
                <div> Discount </div>
                <div> {'\u20B9'} 599 </div>
            </div>
            <div class="price-table">
                <div> Delivery Charges </div>
                <div> {'\u20B9'} 199 </div>
            </div>
            <hr/>
            <div class="price-table bold">
                <div> TOTAL AMOUNT </div>
                <div> {'\u20B9'} 3999 </div>
            </div>
            <hr/>
            <p class="price-component-para">You will save &#8377 500 on this order </p>
            <button class="btn btn--primary order-btn">Proceed to Checkout</button>
        </div>
    </section>

        </>
    )
}

export { CartPage }