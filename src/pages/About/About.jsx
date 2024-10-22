import React from 'react'
import Page1 from './subComponents/Page1';
import Benefit from '../HomePage/sub-components/BenefitsPage/Benefit';
import Page3 from './subComponents/Page3';
import Page4 from './subComponents/Page4';
import Subscription from '../HomePage/sub-components/SubscriptionPage/Subscription';
import CardsPage from '../HomePage/sub-components/CardsPage/CardsPage';



function About() {
  return (
    <>
    <Page1/>
    <Benefit/>
    <Page3/>
    <Page4/>
    <CardsPage/>
    <Subscription/>
    </>
  )
}

export default About
