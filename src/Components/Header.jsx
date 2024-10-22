import React, { useState } from "react";
import "../../src/index.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaVimeoV } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { IoMdMenu } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import Sidenav from "./SideNav/Sidenav";


function Header() {
  const[showSidenav,setShowSidenav]=useState(false);
  function handleSidenav(){
   setShowSidenav(!showSidenav);
  }
  return (
    <>

 {/* -------------------------------------phone screen navbar */}
 <div className="navbar-phoneScreen">
      <IoBagOutline/>
      <img src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore.png'/>

      {/* -----onclick menu appears */}
      <IoMdMenu className='navbar-menu' onClick={handleSidenav}/>
      {
        showSidenav && 
        <Sidenav/>
      }
      </div>

      {/* -------------------------------------------------------- */}

    <div className="combined-header">
      <div className="header-top">
        <div className="header-top-text">
          <p>Free Shipping over $100 & 60 days returns</p>
        </div>
        <div className="top-icons">
          <FaFacebookF className="icon" />
          <FaXTwitter className="icon" />
          <FaVimeoV className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
      <Navbar />
    </div>
    </>
  )
}

export default Header;
