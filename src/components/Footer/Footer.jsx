
import React from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram,  FaHeart } from "react-icons/fa";
import './footer.css'
import { Link } from "react-router-dom"


function Footer() {
  return (
    <div>
      <footer className='footer'>
         <div >
           <p>Connect with me</p>
          <ul className='social-media-icons'>
            <Link to="https://www.linkedin.com/in/adarsh-patel-449a55175/"><li><FaLinkedinIn/></li></Link>  
            <Link to="https://github.com/Adarsh-Patel-Dev"><li><FaGithub/></li></Link>  
            <Link to="https://twitter.com/AdarshPatelDev"><li><FaTwitter/></li></Link>  
            <Link to="https://www.instagram.com/git_sit_code/"><li><FaInstagram/></li></Link>  
          </ul>
            <span>Made with <FaHeart/> by Adarsh </span>
         </div>
      </footer>
    </div>
  )
}

export { Footer }