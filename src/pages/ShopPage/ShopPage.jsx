import React from 'react'
import './shopPage.css'
import ProductList from './subComponents/productsList/ProductList'
import SubHeader from '../Contact/SubHeader/SubHeader'

function ShopPage() {
  return (
 <>
 <SubHeader pageName='Shop'/>
 <ProductList/>
 </>
  )
}

export default ShopPage
