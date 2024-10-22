import React from 'react'
import Button from '../../Components/Button/Button'

function ContactForm() {
  return (
    <section>
        <div className="contactForm-wrapper">
      <p className='contact-page-heading'>Send us a message</p>
      <form className='contact-form-inputs'>
   <input type='text' placeholder='Name'  className='contact-input-box'/>
   <input type='email' placeholder='Email'  className='contact-input-box'/>
   <input type='text' placeholder='Subject' className='contact-input-box' />
   <textarea rows='10' placeholder='Message' className='contact-input-box'></textarea>
   <Button textColor='white' btnText='Contact us' btnColor='#0089F7'/>
      </form>
      </div>
    </section>
  )
}

export default ContactForm
