import React, { useState } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
 

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaVimeoV } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { BiGridAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";



function Footer() {
    const[openLogin,setOpenLogin]=useState(false);

    function openLoginPage(){
        setOpenLogin(true);
    }
  return (

    <>
    <div className='footer-wrapper'>
        <div className="col-1">
            <p className='ul-heading'>Useful links</p>
            <ul className='ul-footer'>
                <li>Contact us</li>
                <li>Help & About us</li>
                <li>Shipping & Returns</li>
                <li>Refund Policy</li>
                <li>Press Room</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        <div className="col-2">
        <p className='ul-heading'>Customer Service</p>
            <ul className='ul-footer'>
                <li>Dashboard</li>
                <li>Orders</li>
                <li>Downloads</li>
                <li>Addresses</li>
                <li>Account details</li>
                <li>Lost password</li>
            </ul>

        </div>
        <div className="col-3">
        <p className='ul-heading'>Working time</p>
            <div className="col-3-text">
               <p>Level-13,2 Elizabeth St,<br/>
               Melborne,Victoria 3000,<br/>
               Australia</p>
               <p className='col-3-time'>Monday-Friday
                <br/>
                <span className='time-text'>9:00AM- 6:00PM</span>
               </p>
               <p>Saturday
                <br/>
                <span className='time-text'>7:00AM- 8:00PM</span>
               </p>
            </div>

        </div>
        <div className="col-4">
        <p className='ul-heading'>Payment Methods</p>
            <p className='col-4-text'>Curabitur interdum. Proin 
                <br/>
                consectetuer ut, more information.</p>

                <div className="col-4-bottomImages">
                <img className='col-4-topImage col-4-logoImage' src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-icon1.webp' alt='footer-logo'/>
                <img  className='col-4-logoImage' src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-icon2.webp' alt='footer-logo'/>
                </div>
        </div>

    </div>
        <div className="footer-bottom-section">
          <p>
          © 2024 Betheme by <span className='footer-link'>Muffin group</span> | All Rights Reserved | Powered by <span className='footer-link'>WordPress</span>
           </p>
           <div className="footer-icons">
       <FaFacebookF className='icon'/>
       <FaXTwitter className='icon'/>
       <FaVimeoV className='icon'/>
       <FaInstagram className='icon'/>
        <IoIosArrowUp className='link-to-top'/>
      </div>
        </div>



        {/* --------------------------------------------------phoneScreeen footer */}
        <div className="phoneScreen-fixed-footer">
            <Link to='/shop' className='phone-footer-iconLink'><BiGridAlt className='phone-footer-icon'/></Link>
            <Link to='/login' className='phone-footer-iconLink'><FaRegUser className='phone-footer-icon'/></Link>
           <div className='footer-icon-badge'>
           <Link to='/addToCart' className='phone-footer-iconLink'><IoBagOutline className='phone-footer-icon'/><span className='like-badge'>0</span></Link></div>
           <div className='footer-icon-badge'>
           <Link to='/wishlist' className='phone-footer-iconLink'><FaRegHeart className='phone-footer-icon'/><span className='like-badge'>0</span></Link></div>

        </div>

        </>
  )
}

export default Footer
