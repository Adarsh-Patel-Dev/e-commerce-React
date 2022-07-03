import React from 'react'
import "./profilepage.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import AddressCard from '../../components/card/AddressCard';
import AddressModal from '../../components/AddressModal/AddressModal';


function ProfilePage() {
  return (<>
  <AddressCard/>
  <AddressModal/>
    <div className='profile-conatainer'>
      <div className='user-details'>
        <div className='user-avatar'>
            AP
        </div>
        <div>
        <div className='user-name'>
        Adarsh Patel
        </div>
        <div className='user-email'>
         adarsh.patel@gmail.com
        </div>
        <div className='user-phone'>
         9026598173
        </div>
        </div>
      </div>
      
      <div className='account-deatils'>
        <ul className='account-deatils-list'>
            <li className='account-deatils-list-item'>
             <span>My Wishlist</span>
             <i><MdKeyboardArrowRight/></i>
            </li>
            <li className='account-deatils-list-item'>
             <span>My Cart</span>
             <i><MdKeyboardArrowRight/></i>
            </li>
            <li className='account-deatils-list-item'>
             <span>My Addresses</span>
             <i><MdKeyboardArrowRight/></i>
            </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export  { ProfilePage }