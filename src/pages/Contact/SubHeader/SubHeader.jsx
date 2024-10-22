import React from 'react'
import './subHeader.css'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
function SubHeader({pageName}) {
  return (
    <div className="shop-main-wrapper">
  <p className='shop-title'>
    {pageName}
  </p>
  <div className="shop-bottom-link">
   <Link to='/' className='home-link'> <p>
  Home
    </p></Link>
    <IoIosArrowForward/>
    <p>
  {pageName}
    </p>
  </div>
 </div>
  )
}

export default SubHeader
