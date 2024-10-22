import React from 'react'
import CardsPage from './sub-components/CardsPage/CardsPage';
import Home from './sub-components/TopPage1.jsx/Home'
import PromotionCards from './sub-components/PromotionsPage/PromotionCards';
import FeaturedProducts from './sub-components/Featured products/FeaturedProducts';
import Benefit from './sub-components/BenefitsPage/Benefit';
import SliderPage from './sub-components/SliderPage/SliderPage';
import Subscription from './sub-components/SubscriptionPage/Subscription';
import Brands from './sub-components/BrandsPage/Brands';
import ProductsPage from './sub-components/ProductsPage/ProductsPage';

function HomePage() {
  return (
    <>
    <Home/>
    <CardsPage/>
    <PromotionCards/>
    <ProductsPage/>
    <FeaturedProducts/>
    <Benefit/>
    <SliderPage/>
    <Subscription/>
    <Brands/>
    </>
  )
}

export default HomePage
