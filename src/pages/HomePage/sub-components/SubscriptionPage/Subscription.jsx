import React from 'react'
import './Subs.css'

function Subscription() {
  return (
    <div className='subscription-main-wrapper'>
      <div className="subs-content">
        <p className='subs-heading'>
        Join our newsletter.<br/>
        Receive info about promotions,<br/> tutorials and new pre-built website<br/> releases.
        </p>
        <div className="input-boxes">
           <input className='input-content' type='text' placeholder='Name'/>
           <input className='input-content' type='email' placeholder='Email'/>
        </div>
        <div className="checkbox-div">
            <input type="checkbox"/>
        I can confirm that I have read and accept the <span style={{color:'#0089F7'}}>Terms and Conditions.</span>
        </div>
        <div className="subscribe-btn">
            Subscribe now
        </div>

      </div>
    </div>
  )
}

export default Subscription
