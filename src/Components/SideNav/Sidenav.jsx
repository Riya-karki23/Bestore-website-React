import React, { useRef, useState } from 'react';
import './sidenav.css';
import { RxCross1 } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaVimeoV } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { NavLink } from 'react-router-dom';


function Sidenav() {
  const[hideNav,setHidenav]=useState(true);
  function hideSidenav(){
     setHidenav(false);
  }
  return (
    
      hideNav &&( 
           <section className='sidenav-wrapper'>
        <div className="sidenav-close" onClick={hideSidenav}>
      <RxCross1/>
      </div>
      <div className="sidenav-top-icons">
      <FaRegUser/>
      <FaRegHeart/>
      <LuSearch/>
      </div>
      <div className='sidenav-items'>
      <NavLink to='/' className='sidenav-linkAddress' >
      <p  className='sidenav-link'>Home</p>
       </NavLink>

        <p className='sidenav-items-add sidenav-link '>Features <FiPlus className='add-icon'/></p>
        <NavLink to='/shop' className='sidenav-linkAddress' >
        <p className='sidenav-link' >Shop</p>
        </NavLink>

        <p className='sidenav-items-add sidenav-link'>Pages <FiPlus className='add-icon'/></p>
        <NavLink to='/about' className='sidenav-linkAddress' >
        <p className='sidenav-link'>About</p>
        </NavLink>

       <NavLink to='/contact' className='sidenav-linkAddress'> 
       <p className='sidenav-link'>Contact</p>
       </NavLink>

       <NavLink to='/termsOfUse' className='sidenav-linkAddress'>
        <p className='sidenav-link'>Terms of Use</p>
        </NavLink>

      </div>
      <div className="sidenav-app-icons">
      <FaFacebookF className="icon" />
          <FaXTwitter className="icon" />
          <FaVimeoV className="icon" />
          <FaInstagram className="icon" />
      </div>
    </section>
      )
  )
}

export default Sidenav
