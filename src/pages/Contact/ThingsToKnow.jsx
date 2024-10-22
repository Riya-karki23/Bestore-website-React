import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function ThingsToKnow() {
  return (
    <section>
    <div className='things-main-wrapper'>
      <p className='things-heading'>Things to know</p>
      <div className="icon-text-wrapper">
        <IoCheckmarkCircleOutline className='check-icon'/>
            <p className='things-title'>We are Woocommerce ready</p>
        </div>
            <p className='things-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>

      {/* ------------------------------------------------- */}
      <div className="icon-text-wrapper">
        <IoCheckmarkCircleOutline className='check-icon'/>
            <p className='things-title'>Blazingly fast shop from scratch</p>
        </div>
            <p className='things-para'>Cras enim porttitor vel, eros. Integer aliquam. In vitae sagittis porttitor. Aenean vulputate</p>

            {/* ------------------------------------------------- */}

      <div className="icon-text-wrapper">
        <IoCheckmarkCircleOutline className='check-icon'/>
            <p className='things-title'>Template for your shop page</p>
        </div>
            <p className='things-para'>Nulla congue. Donec tortor. Morbi tincidunt. Fusce ut nibh. Suspendisse adipiscing</p>
            {/* ------------------------------------------------- */}
</div>
    </section>
  )
}

export default ThingsToKnow
