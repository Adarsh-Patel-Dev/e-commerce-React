import React from 'react'
import "./addressCard.css"

function AddressCard() {
  return (
    <div className='addressCard-container'>
     <p className='userName'><b>Adarsh Patel</b></p>
     <p>37 Krishna Vihar</p>
     <p>3, Faridi Nagar,</p>
     <p>LUCKNOW, UTTAR PRADESH</p>
     <p>India - 226015</p>
     <p className='address-phone'>Phone: 9026598173</p>
     <hr/>
     <div className='footer-btn'>
        <button className='delete-btn'>Delete</button>
        <button className='edit-btn'>Edit</button>
     </div>
    </div>
  )
}

export default AddressCard