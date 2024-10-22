import React from 'react'
import Card from '../../../../Components/Card'
import './cardsPage.css'
import Counter from '../../../../Components/Counter'
import { cardPageData } from '../../../../data/productData'
function CardsPage() {
  return (
    <>
    <Counter/>
    <div className='CardComponent'>
      {
      cardPageData.map((data,index)=>(

      <Card key={index} className='card-box' imageUrl={data.imageUrl} title={data.title} alt='card-image'/>
     
      ))}
       
    </div>
    </>
  )
}

export default CardsPage
