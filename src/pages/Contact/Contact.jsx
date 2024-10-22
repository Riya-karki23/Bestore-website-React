import React from 'react';
import SubHeader from './SubHeader/SubHeader';
import ContactPage1 from './ContactPage1';
import ContactForm from './ContactForm';
import ThingsToKnow from './ThingsToKnow';

function Contact() {
  return (
    <>
    <SubHeader pageName='Contact with us'/>
    <ContactPage1/>
    <ContactForm/>
    <ThingsToKnow/>
    </>
  )
}

export default Contact
