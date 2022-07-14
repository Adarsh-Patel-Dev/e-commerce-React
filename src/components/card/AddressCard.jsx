import React from "react";
import { v4 as uuid } from "uuid";
import { MdLocalShipping, MdLocationOn } from "react-icons/md";
import { useAddressContext } from "../../context/addressContext";
import AddressModal from "../AddressModal/AddressModal";
import "./addressCard.css";

function AddressCard() {
  const { state, addressDispatch } = useAddressContext();

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
    id,
  } = state;

  let addressobj = {
    name,
    phone,
    pincode,
    city,
    states,
    area,
    flatNum,
    id,
  };

  function IseditAddress(id) {
    const addressTobeEdited = address.filter((address) => address.id === id);
    addressobj = addressTobeEdited[0];

    state.name = addressobj.name;
    state.phone = addressobj.phone;
    state.pincode = addressobj.pincode;
    state.city = addressobj.city;
    state.states = addressobj.states;
    state.area = addressobj.area;
    state.flatNum = addressobj.flatNum;
  }

  return (
    <div>
      {address.map((address) => (
        <div className="addressCard-container" key={address.id}>
          <div className="address-hearder">
            <div className="address-header-heading">
              <MdLocalShipping className="green" />
              <span>Shipping Address</span>
            </div>
            <div>
              <div className="address-header-heading">
                <MdLocationOn className="green" />
                <span> {address.pincode}</span>
              </div>
            </div>
          </div>
          <hr />
          <p className="userName">
            <b>{address.name}</b>
          </p>
          <p>
            {address.flatNum} {address.area}
          </p>
          <p>
            {address.city}, {address.states}
          </p>
          <p>India - {address.pincode}</p>
          <p className="address-phone">Phone: {address.phone}</p>
          <hr />
          <div className="footer-btn">
            <button
              onClick={() => {
                addressDispatch({ type: "IS_OPEN", payload: true });
              }}
              className="edit-btn"
            >
              Add new Address
            </button>
            <button
              onClick={() => {
                addressDispatch({ type: "IS_OPEN", payload: true });
                addressDispatch({ type: "IS_EDIT", payload: true });
                addressDispatch({
                  type: "SELECTED_ADDRESS",
                  payload: address.id,
                });
                IseditAddress(address.id);
              }}
              className="edit-btn"
            >
              Edit
            </button>
          </div>
          <AddressModal />
        </div>
      ))}
    </div>
  );
}

export default AddressCard;
