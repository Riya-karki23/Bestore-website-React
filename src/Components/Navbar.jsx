import React, { useState } from 'react'
import './index.css'
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import FeaturesHover from './HoverComponent/FeaturesHover';
import PagesHover from './HoverComponent/PagesHover';
import { NavLink } from 'react-router-dom';
import Sidenav from './SideNav/Sidenav';



function Navbar() {
  const[showFeatureBox,setShowFeatureBox]=useState(false);
  const[showPageHoverBox,setShowPageHoverBox]=useState(false);


function showBox(){
setShowFeatureBox(true);
}

function hideBox(){
  setShowFeatureBox(false);
}

function showPageBox(){
setShowPageHoverBox(true);
}

function hidePageBox(){
  setShowPageHoverBox(false);
}

  return (
    <>

    <section className='nav-upper'>
        <div className="div-inner">

      <div className='nav-image'>
     <img src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore.png'/>
      </div>
      <div className='div-search'>
       <div className="search-icon"><IoSearchSharp /></div>
<input  className='nav-search' type="text" placeholder='Enter your search'/>
      </div>
      <div className='nav-icons'>
        <FaRegUser/>
        <div className='like-icon'><FaRegHeart/><span className='like-badge'>0</span></div>
        <IoBagOutline/>
         <Sidenav/>
      </div>
    </div>
    <div className="nav-bottom">
   <ul className='nav-ul'>
    <NavLink className='nav-link'  to='/'><li>Home</li></NavLink>
    <NavLink className='nav-link' to='/features'><li onMouseEnter={showBox} onMouseLeave={hideBox}>Features <MdArrowDropDown/></li></NavLink>
    <NavLink className='nav-link' to='/shop' ><li>Shop</li></NavLink>
    <li onMouseEnter={showPageBox} onMouseLeave={hidePageBox}>Pages <MdArrowDropDown/></li>
   </ul>
   <ul className='nav-ul '>
    <NavLink  className='nav-link'to='/about'><li>About</li></NavLink>
    <NavLink className='nav-link' to='/contact'><li>Contacts</li></NavLink>
    <NavLink className='nav-link' to='/termsOfUse'><li>Terms of Use</li></NavLink>
   </ul>
    </div>
    {
      showFeatureBox &&
      <FeaturesHover/>
    
    }
    {
      showPageHoverBox &&
      <PagesHover/>
    
    }
    </section>
    </>
)
}

export default Navbar
