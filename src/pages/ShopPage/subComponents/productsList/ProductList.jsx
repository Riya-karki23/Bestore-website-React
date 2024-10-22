import React from 'react'
import './productList.css';
import {ProductData} from '../../../../data/productData';
import Card from '../../../../Components/promotionsCard/Card';

function ProductList() {


  return (
    <div className='main-products-wrapper'>
        <div className="left-side-data">
       <p>
        Dropdowns
       </p>
       
        </div>
        <div className="right-side-data">
  {
    ProductData.map((data,index)=>(
        <Card key={index} data={data}/>
    ))
  }

        </div>
      
    </div>
  )
}

export default ProductList
