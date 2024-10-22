import React from 'react'
import '../Button/index.css'

function Button({btnColor,textColor='#747474',btnText="Browse products"}) {
  return (
    <div className='btn' style={{backgroundColor:btnColor,color:textColor}}>
      {btnText}
    </div>
  )
}

export default Button
