import React, { useState } from 'react'
import './index.css'
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { RiLinkM } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";

function Card({data,imageWidth,onClick}) {
    const [image,setImage]=useState(data.imageBefore)
    const [showIcons,setShowIcons]=useState(false);


    function changeImage(){
      setImage(data.imageAfter);
      setShowIcons(true);
    }

    function prevImage(){
        setImage(data.imageBefore);
        setShowIcons(false);

    }


function renderStars(rating){
  const totalStars=5;
  const stars=[];

  for(let i=1;i<=totalStars;i++){
    if(i<=rating){
      stars.push(<IoIosStar key={i}/>)
    }
    else{
      stars.push(<IoIosStarOutline key={i}/>)
    }
  }
return stars;
}



  return (
    <div className='card-outer-div' onClick={onClick}>
     <div className="card-top-imageSection" onMouseEnter={changeImage} onMouseLeave={prevImage}>  
      <img className='card-img' style={{width:imageWidth || '280px'}} src={image} alt='product-image'/>

      {/* ----------------------------------------------------------label if data.label is present */}
      {
        data.label && (
      <div className="card-image-label">
        <p>-{data.label}%</p>
      </div>
        )}

        {/* ---------------------------------------------------------------------icons on hover */}
        {
          showIcons && data.showIcons && (     
        <div className="card-image-icons">
          <IoBagOutline className='hover-sideicon'/>
          <RiLinkM className='hover-sideicon'/>
          <IoMdHeartEmpty className='hover-sideicon'/>
          <MdOutlineZoomOutMap className='hover-sideicon'/>
        </div>
          )}


      </div>
      <div className="card-bottom">
      <p className='card-title'>{data.title}</p>
      {/* -----------------------------------------------------------------Card-Rating only when rating prop is passed */}
      
        {data.rating && (
      <div className="rating-div">
     <p>
      {renderStars(data.rating)}
</p>
      </div>
        )}
      {/* -----------------------------------------------------------------*/}



<div className="price-box">
  {
    data.originalPrice &&
(    
    <span className='old-price'>${data.originalPrice}</span>
)}
      <span className='new-price'><u>${data.afterDiscountPrice}</u></span>
      </div>
      </div>

    </div>
  )
}

export default Card
