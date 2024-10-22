import React from 'react' 
import './cart.css';
import { RxCross1 } from 'react-icons/rx'
import { IoBagOutline } from "react-icons/io5";


function AddToCart() {
  return (
    <section>
     <div className="cart-top">
     <RxCross1  className='cross-icon'/>
     <p>Cart</p>
     </div>

<div className="cart-middle">
  <IoBagOutline className='cart-bag-icon'/>
  <p>Your cart is currently empty</p>
</div>

     <div className="cart-bottom">
        <div className="total sub-total">
          <p>
            Subtotal:
          </p>
          <p>$0.00</p>
        </div>
        <div className="total">
          <p>Total:</p>
          <p className='total-cost'>$0.00</p>

        </div>
     </div>
</section>
  )
}

export default AddToCart
