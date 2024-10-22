import React from 'react'
import './index.css';
import { FaLocationDot } from "react-icons/fa6";
function ContactPage1() {
  return (
    <section className='contact-main-wrapper'>
        <div className="top-contact-section">
         <div className="contact-data">
           <img className='icon-image' src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-contact-icon3.webp' alt='phone-icon'/>
           <p className='title-label'>+61 (0) 3 8376 6284</p>
         </div>
         <div className="contact-data">
          <img className='icon-image' src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-contact-icon2.webp'
          alt='@-icon'/>
          <p className='title-label'>riyakarki@gmail.com</p>
         </div>
        </div>  

           {/*------------------------------------------------------------------image section */}
           <div className="contact-section-2">
            <div className="contact-left-section">
            <p className='contact-sec2-title'>We are here for you</p>
            <p>At habitant varius eros aliquet habitasse senectus quisque rhoncus volutpat nisi pellentesque porta in molestie: <span className='span-gray'>7:00 am - 9:00 pm</span></p>
            <div className="address-wrapper">
                <div className="address">
                  <FaLocationDot className='location-icon'/>
                  <h3 className='text-black'>Address 1</h3>
                  <p className='address-para'>Level 13, 2 Elizabeth<br/>
                      Victoria 3000<br/>
                      Australia</p>
                  <p className='address-bottom-para'>
                  NR 000 000 00 00<br/>
                  NR 00 000 0000 0000
                  </p>
                </div>
                <div className="address">
                    <FaLocationDot className='location-icon'/>
                    <h3 className='text-black'>Address 2</h3>
                    <p className='address-para'>Level 13, 2 Elizabeth<br/>
                       Victoria 3000<br/>
                      Australia                  
                      </p>
                </div>
            </div>
            </div>
            <div className='contact-image-div'>
                <img className='contact-right-image' src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-contact-pic1.webp" alt='image' loading='lazy'/>
            </div>
           </div>

{/*----------------------------------------------------------------------form-section */}
<div className="">
<div className="">

</div>
<div className="">

</div>
</div>

           
    </section>
  )
}

export default ContactPage1
