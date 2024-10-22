import React from 'react'
import './benefit.css'
import benefitData from './benefitData'
// import BenefitCard from '../../../../Components/BenefitCard/BenefitCard'

function Benefit() {
  return (
    <section className='benefit-outer-div'>
      <div className="benefit-heading">
        <p>
        Betheme offers you convenient </p>
        <p>shopping experience at any scale</p>
      </div>
      <div className="benefit-cards-wrapper">
        {
          benefitData.map((data,index)=>(
            <div key={index} className='benefitCard-wrapper'>
            <img className='benefit-image' src={data.image} alt='top-image'/>
            <p className='benefit-title'>{data.title}</p>
      
            <p className='benefit-para'>{data.description}</p>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default Benefit
