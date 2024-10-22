import React from 'react'
import './index.css'

function Circle({circleColor}) {
  return (
    <div className='outer-circle' >
      <div className="inner-circle" style={{backgroundColor:circleColor}}>

      </div>
    </div>
  )
}

export default Circle
