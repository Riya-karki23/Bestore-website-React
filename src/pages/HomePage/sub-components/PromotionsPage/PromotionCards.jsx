import React, { useRef, useState } from 'react'
import cardData from './cardData'
import './index.css'
import Card from '../../../../Components/promotionsCard/Card'
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

function PromotionCards() {
const ScrollCardRef=useRef(null);
const[activeIcon,setActiveIcon]=useState('home')

  function scrollForward(){
if(ScrollCardRef.current){
  ScrollCardRef.current.scrollBy({left:600, behaviour:'smooth'});
  setActiveIcon('circle');
}

  }

  function scrollBack(){

    if(ScrollCardRef.current){
      ScrollCardRef.current.scrollBy({left:-600, behaviour:'smooth'})
      setActiveIcon('home')
    }
  }
  
  return (
    <div className='promotion-outer-div'>
      <div className='outer-div-top' >
        <p className='promotion-heading'>
          Hot promotions</p>
          {/* ---------------------------------------------------------------top arrows for scrolling  left-right */}
        <div className="icons">
         <span className='arrow-icon' onClick={scrollBack}> <IoChevronBack/></span>
         <span className='arrow-icon' onClick={scrollForward}><IoChevronForward/></span>
        </div>
        </div>
        {/* --------------------------------------------------------------------cards mapped through crad component */}
    <div className='parentCard' ref={ScrollCardRef}>
      {
        cardData.map((data,index)=>(
          <Card data={data} key={index}/>
        ))
      }
      
    </div>
    {/* -----------------------------------------------------------------bottom-scroll-icons */}
    <div className='bottom-scroll-icons'>
<BiSolidHomeAlt2 
style={{color:activeIcon==='home'?'':'#D2D2D2'}} 
className='home-icon' 
onClick={scrollBack}/>

<FaCircle 
style={{color:activeIcon==='circle'?'#0089F7':'#D2D2D2'}} 
className='circle-icon' 
onClick={scrollForward}/>
    </div>

    </div>
  )
}

export default PromotionCards
