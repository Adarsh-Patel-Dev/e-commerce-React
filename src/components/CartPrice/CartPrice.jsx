import './cartPrice.css'
import React from 'react'

function CartPrice({qty, price, discountPrice, totalPrice}) {
  return (
    <div>
     <div class="price-component">
        
        <h2 class="price-component-heading">CART DETAILS ({qty} Items)</h2>
        <hr/>
        <div class="price-table">
            <div> Price {qty} items </div>
            <div> {'\u20B9'} {price} </div>
        </div>
        <div class="price-table">
            <div> Discount </div>
            <div> - {'\u20B9'} {discountPrice} </div>
        </div>
        <div class="price-table">
            <div> Delivery Charges </div>
            <div> {'\u20B9'} 199 </div>
        </div>
        <hr/>
        <div class="price-table bold">
            <div> TOTAL AMOUNT </div>
            <div> {'\u20B9'} {totalPrice} </div>
        </div>
        <hr/>
        <p class="price-component-para">You will save {'\u20B9'} {discountPrice} on this order </p>
        <button class="btn btn--primary order-btn">Proceed to Checkout</button>
        
    </div>
    </div>
  )
}

export default CartPrice