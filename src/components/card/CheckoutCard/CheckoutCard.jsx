import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useCartContext } from "../../../context";
import { Toast } from "../../Toast/Toast"
import "./checkoutCard.css";
import { Link } from "react-router-dom"

function CheckoutCard() {

    const { state } = useCartContext();
  const { cart } = state;

  const price = cart.reduce(
    (acc, item) => acc + Number(item.qty) * Number(item.price.original),
    0
  );

  const discountPrice = cart.reduce(
    (acc, item) =>
      acc +
      (Number(item.price.original) - Number(item.price.discounted)) *
        Number(item.qty),
    0
  );

  const totalPrice = price - discountPrice + 199;

   /****************RAZORPAY****************/
   
   const handlePay = (e)=>{
    e.preventDefault();
    
      var options = {
        key: "rzp_test_gya6abqDZ5NINZ",
        key_secret:"jqkjgTT2WXGxtaTsk4hVC4RW",
        amount: totalPrice *100,
        currency:"INR",
        name:"Planet Store",
        description:"We sell plants",
        handler: function(response){
        //   alert(response.razorpay_payment_id);
         Toast({ type: "success", msg: "Payment Successful🎉" });

        },
        prefill: {
          name:"Adarsh Patel",
          email:"adarsh@gmail.com",
          contact:"9026598173"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#76C310"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  

  /*****************************************************/ 
  console.log("toal",totalPrice)
   

  return (
    <div>
      <div className="price-component width-auto">
        <div className="price-table">
          <h2 className="price-component-heading">
            <FaShoppingBag /> Your Order Summary
          </h2>
         <Link to = "/cart"><p className="edit-btn">Edit Bag</p></Link>
        </div>
        <hr />
        <div className="price-table">
          <div className="width-13">
            <b> Items Description</b>
          </div>
          <div>
            
            <b>Quantity</b>
          </div>
          <div>
            <b>Savings</b>
          </div>
          <div>
            
            <b>Price</b>
          </div>
        </div>
        <hr />
        {cart.map((data) => (
          <div className="price-table center ">
            <div className="price--table--img">
              
              <img src={data.img} />
              {data.title}
            </div>
            <div className="item-qty"> {data.qty} </div>
            <div className="discount">
              
              {data.price.discount}% off
              <p className="strike-through">
                
                {"\u20B9"}
                {data.price.original}
              </p>
            </div>
            <div>
              
              {"\u20B9"}
              {data.price.discounted}
            </div>
          </div>
        ))}

        <hr />

        <div className="price-table flex-end">
          <div> DELIVERY CHARGES </div>
          <div> {"\u20B9"} 199 </div>
        </div>
        <div className="price-table bold flex-end">
          <div> PAYABLE AMOUNT </div>
          <div>
            
            {"\u20B9"} {totalPrice}
          </div>
        </div>
        <hr />
        <div>
          <button 
          onClick={handlePay}
          className="btn btn--primary order-btn pay-btn">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
