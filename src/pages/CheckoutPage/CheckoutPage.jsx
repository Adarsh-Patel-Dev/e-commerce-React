import React from 'react'
import AddressCard from '../../components/card/AddressCard'
import CheckoutCard from '../../components/card/CheckoutCard/CheckoutCard'
import "./checkout.css"

function CheckoutPage() {
  return (
    <div className='checkout-conatiner'>
        <div className='checkout-details'>
            <AddressCard/>
            <CheckoutCard/>
        </div>
    </div>
  )
}

export { CheckoutPage }