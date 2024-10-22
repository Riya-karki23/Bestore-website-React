import React from 'react'
import './brands.css';
import Button from '../../../../Components/Button/Button';

function Brands() {
const images=[
    {
        image:'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-logo6-150x55.webp' 
    },
    {
        image:'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-logo5-150x55.webp' 
    },
    {
    image:'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-logo4-150x55.webp' 
    },
    {
       image:'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-logo3-150x55.webp' 
    },
    {
       image:'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-logo2-150x55.webp' 
    }
]


  return (
    <>
      <section className='brands-wrapper'>
        <p className= 'brands-heading'>Luxury brands in our store</p>
        <ul>
        {images.map((data,index)=>(
   <li key={index} className='brands-li'> <img  className='brand-logo-image' src={data.image} alt="brand-logo"/></li>
))}
</ul>


{/* --------------------------------------------bottom-text 2 para */}
<div className="bottom-text">
    <div className="bottom-left-text">
       <h3 className='heading-bottom'>Our product for you</h3>
       <p className='bottom-para'>Vehicula quisque sed senectus enim nisl torquent velit <span className='text-gray'>viverra </span>cubilia ligula in ut euismod conubia curabitur porta consequat potenti <span className='text-blue'>lorem ad sed taciti</span> lacinia pulvinar suscipit diam justo eros inceptos dolor massa litora aliquet justo ultrices aliquam mi habitant aenean orci euismod justo aliquam fringilla <span className='text-gray'>molestie porttitor</span> consequat phasellus sollicitudin.</p>
    </div>
    <div className="bottom-right-text">
    <h3 className='heading-bottom'>About the shop</h3>
    <p className='bottom-para'><span className='text-gray'>Rhoncus fringilla quisque dictumst</span> eget rhoncus ullamcorper tempus nunc scelerisque vehicula nunc nisl eleifend libero ligula primis turpis aliquet eget condimentum consectetur vitae aliquet pulvinar at eros consequat eget sit mauris sociosqu aliquam senectus adipiscing primis ad facilisis bibendum aptent eget faucibus <span className='text-blue'>himenaeos viverra enim.</span></p>
  
    </div>
</div>
    </section>
    {/* ------------------------------------------------------ */}

    <section className="brands-page-bottom-section">
  <img src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon7.webp' alt='icon-image'/>
  <div className="bottom-page-textContent">
    <p className='bottom-title'>Ready to create website with Betheme?</p>
    <p className='bottom-text-para'>Mi maecenas dolor risus iaculis <span className='text-blue'> porttitor</span></p>
  </div>
  <Button btnColor='#0089F7' textColor='white' btnText='Buy Betheme now'/>
    </section>
    </>
  )
}

export default Brands
