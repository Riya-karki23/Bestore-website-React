import React from 'react'
import './wishlist.css'
import SubHeader from '../Contact/SubHeader/SubHeader'
import { Link } from 'react-router-dom'

function Wishlist() {
  return (
    <section>
      <SubHeader pageName='Wishlist'/>
      <div className="wishlist-middle-text">
      <p className='wishlist-empty-text'>Your wishlist is empty</p>
      <Link to='/shop' className='btn-shop-link'><button className='shop-btn'>Go to shop</button></Link>
      </div>
    </section>
  )
}

export default Wishlist
