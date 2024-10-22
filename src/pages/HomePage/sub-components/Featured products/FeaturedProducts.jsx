import React from 'react';
import './featureProduct.css';
import { ProductData } from '../../../../data/productData';
import Card from '../../../../Components/promotionsCard/Card';
import Button from '../../../../Components/Button/Button';

function FeaturedProducts() {
  const featurePageData=ProductData.slice(0,8)
  return (

    <section className='feature-outer-div'>
      <h1 className='feature-title'>Featured products</h1>
      <div className="outer-card-wrapper">
      {
        featurePageData.map((data,index)=>(
<Card data={data} key={index} className='card-component'/>
))
      }
    </div>
    <Button btnColor='#dcdcdc' btnText='Browse more'/>
    </section>
  )
}

export default FeaturedProducts
