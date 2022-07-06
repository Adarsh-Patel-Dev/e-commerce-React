import React from "react";
import { useAddressContext } from '../../context/addressContext';
import AddressCard from "../../components/card/AddressCard";
import CheckoutCard from "../../components/card/CheckoutCard/CheckoutCard";
import "./checkout.css";

function CheckoutPage() {
    const { state , addressDispatch } = useAddressContext();
  
  const {
    address,
    name,
    phone,
    pincode,
    city,
    states,
    area,
    flatNum,
    isOpen,
    isEdit,
    id
  } = state;
  return (
    <div className="checkout-conatiner">
      <div className="checkout-details">
         <AddressCard />

        <CheckoutCard />
      </div>
    </div>
  );
}

export { CheckoutPage };
