import React from "react";
import "./profilepage.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom"

function ProfilePage() {
  return (
    <div className="profile-conatainer">
      <div className="user-details">
        <div className="user-avatar">AP</div>
        <div>
          <div className="user-name">Adarsh Patel</div>
          <div className="user-email">adarsh.patel@gmail.com</div>
          <div className="user-phone">9026598173</div>
        </div>
      </div>

      <div className="account-deatils">
        <ul className="account-deatils-list">
        <Link to ="/wishlist">
          <li className="account-deatils-list-item">
            <span>My Wishlist</span>
            <i>
              <MdKeyboardArrowRight />
            </i>
          </li>
          </Link>
          <Link to = "/cart">
          <li className="account-deatils-list-item">
            <span>My Cart</span>
            <i>
              <MdKeyboardArrowRight />
            </i>
          </li>
          </Link>
          <Link to = '/order'>
          <li className="account-deatils-list-item">
            <span>My Orders</span>
            <i>
              <MdKeyboardArrowRight />
            </i>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export { ProfilePage };
