import React, { useState } from 'react'
import './slider.css'
import sliderData from './sliderData';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


function SliderPage() {

const[currentIndex,setCurrentIndex]=useState(0);


function GoToPrevSlide(){
setCurrentIndex((prevIndex)=>
  prevIndex===0 ? sliderData.length-1 :prevIndex-1);
}

function GoToNextSlide(){
  setCurrentIndex((prevIndex)=>
    prevIndex===sliderData.length-1 ?0 :prevIndex+1 );

}


const currentData=sliderData[currentIndex];
  return (
    <section  className='slider-main-wrapper' style={{backgroundColor:currentData.backgroundColor}}>
      <div className="slider-left-data">
        <img src={currentData.logoImage} alt="logo" />
        <h1 className='left-slider-heading'>{currentData.title}</h1>
        <div className="left-slider-bottom">
            <p className='browse-btn'> <span>Browse products</span></p>
            <div className="leftSlider-arrow-buttons">
                <p className='arrow-btn' onClick={GoToPrevSlide}> <IoIosArrowBack/></p>
                <p className='arrow-btn' onClick={GoToNextSlide}><IoIosArrowForward/></p>
            </div>
        </div>

      </div>
      <div className="slider-right">
        <img className='slider-image' src={currentData.rightImage} alt='slider-image'/>
      </div>
    </section>
  )
}

export default SliderPage
