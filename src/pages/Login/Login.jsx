import React from 'react'
import './login.css'
import { RxCross1 } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";



function Login() {
 
  return (
    <section className='login-form'>
      <form action="">
     <div className="login-top">
     <RxCross1  className='cross-icon'/>
          {/* <p className='cross-icon'>X</p> */}
     <p>Login</p>
     </div>

     <div className="login-bottom">
      <div className="login-input"><FaRegUser/><input  className='login-input-box' type='text' placeholder='username or email *' 
      required/></div>
      <div className="login-input"><IoBagOutline/><input className='login-input-box'  type='password' placeholder='Password *' required/></div>
      <p className='login-checkbox'><input type='checkbox'/>Remember me</p>
      <button className='login-btn'>Login</button>
      <p className='lost-password-text'>Lost your password?</p>
     </div>
     </form>
    </section>
  )
}

export default Login
