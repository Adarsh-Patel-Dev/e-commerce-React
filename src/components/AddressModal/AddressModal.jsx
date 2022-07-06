import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { MdClose } from "react-icons/md";
import { useAddressContext } from "../../context/addressContext";
import "./addressModal.css";

function AddressModal() {
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
    selectedAddressId,
  } = state;
  console.log("addressState", address);
  console.log("addressSelected", selectedAddressId);
  let addressobj = {
    name,
    phone,
    pincode,
    city,
    states,
    area,
    flatNum,
    id: uuid(),
  };

  function deleteAddress(id) {
    return address.filter(address.id !== id);
  }

  function editAddress(e,id) {
    e.preventDefault();
    let indexOfAddress = address.findIndex(address=>address.id===id);
    console.log("index",indexOfAddress)
    if (indexOfAddress !== -1) {
      address[indexOfAddress] = {...addressobj};
    }
    addressDispatch({ type: "IS_OPEN", payload: false });
  }

  function addressSubmit(e) {
    e.preventDefault();
    addressDispatch({ type: "ADDRESS", payload: addressobj });
    addressDispatch({ type: "IS_OPEN", payload: false });
    addressDispatch({ type: "CLEAR_DATA" });
    addressDispatch({ type: "IS_EDIT", payload:false });
  }

  return (
    <div>
      <div
        style={{ display: !isOpen ? "none" : "block" }}
        className="modal-container"
      >
        <div id="mymodal" className="Modal">
          <form onSubmit={(e) => !isEdit? addressSubmit(e):editAddress(e,selectedAddressId) } className="modal--content">
            <MdClose
              onClick={() => {
                addressDispatch({ type: "IS_OPEN", payload: false });
                addressDispatch({ type: "CLEAR_DATA" });
                addressDispatch({ type: "IS_EDIT", payload:false });
              }}
              className="close"
            ></MdClose>

            <div className="modal-body">
              <p className="modal-title">Contact Info</p>
              <label htmlFor="addressInput" className="label">
                Name
              </label>
              <input
                required
                name="addressInput"
                type="text"
                onChange={(e) =>
                  addressDispatch({ type: "NAME", payload: e.target.value })
                }
                value={name}
                className="input"
                placeholder="Enter name"
              ></input>
              <label htmlFor="addressInput" className="label">
                Phone number
              </label>
              <input
                required
                name="addressInput"
                type="number"
                minLength={10}
                maxLength={10}
                onChange={(e) =>
                  addressDispatch({ type: "PHONE", payload: e.target.value })
                }
                value={phone}
                className="input"
                placeholder="Enter Phone number"
              ></input>

              <p className="modal-title">ADDRESS INFO</p>
              <div className="flex-row">
                <div>
                  <label htmlFor="addressInput" className="label">
                    Pincode
                  </label>
                  <input
                    required
                    type="number"
                    minLength="6"
                    name="addressInput"
                    onChange={(e) =>
                      addressDispatch({
                        type: "PINCODE",
                        payload: e.target.value,
                      })
                    }
                    value={pincode}
                    className="input"
                    placeholder="Enter Pincode"
                  ></input>
                </div>
                <div>
                  <label htmlFor="addressInput" className="label">
                    City
                  </label>
                  <input
                    required
                    type="text"
                    name="addressInput"
                    onChange={(e) =>
                      addressDispatch({ type: "CITY", payload: e.target.value })
                    }
                    value={city}
                    className="input"
                    placeholder="Enter City"
                  ></input>
                </div>
              </div>
              <div className="flex-row">
                <div>
                  <label htmlFor="addressInput" className="label">
                    State
                  </label>
                  <input
                    required
                    type="text"
                    name="addressInput"
                    onChange={(e) =>
                      addressDispatch({
                        type: "STATE",
                        payload: e.target.value,
                      })
                    }
                    value={states}
                    className="input"
                    placeholder="Enter State"
                  ></input>
                </div>
                <div>
                  <label htmlFor="addressInput" className="label">
                    Flat No.
                  </label>
                  <input
                    required
                    type="text"
                    name="addressInput"
                    onChange={(e) =>
                      addressDispatch({
                        type: "FLAT_NUM",
                        payload: e.target.value,
                      })
                    }
                    value={flatNum}
                    className="input"
                    placeholder="Enter Flat Number"
                  ></input>
                </div>
              </div>
              <label htmlFor="addressInput" className="label">
                Locality/Area
              </label>
              <input
                required
                type="text"
                name="addressInput"
                onChange={(e) =>
                  addressDispatch({ type: "AREA", payload: e.target.value })
                }
                value={area}
                className="input"
                placeholder="Enter Locality/Area"
              ></input>

             { !isEdit ? ( <div className="modal--btn">
                <input
                  type="submit"
                  value="Add Address"
                  className="btn-modal"
                />
              </div>):
              ( <div className="modal--btn">
                <input
                  type="submit"
                  value="Update Address"
                  className="btn-modal"
                />
              </div>)}

              {!isEdit?(<div className="modal--btn">
                <div
                  onClick={(e) => {
                    addressDispatch({ type: "NAME", payload: "Happy" });
                    addressDispatch({ type: "PHONE", payload: "1234567890" });
                    addressDispatch({ type: "PINCODE", payload: "123456" });
                    addressDispatch({ type: "CITY", payload: "Agra" });
                    addressDispatch({ type: "STATE", payload: "UP" });
                    addressDispatch({ type: "AREA", payload: "Gomti Nagar" });
                    addressDispatch({ type: "FLAT_NUM", payload: "22" });
                    addressDispatch({ type: "ADDRESS_ID", payload: uuid() });
                  }}
                  name="Add Address"
                  className="btn-modal outline-btn"
                >
                  Test Address
                </div>
              </div>):""}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddressModal;
