import React from 'react'
import './home.css';
import Circle from '../../../../Components/Circle'

function Home() {
  return (
    <>
    <section className='home-outer-div'>
        {/* ---------------------------------------------------left div */}
     <div className='home-left-div'>
        <p className='left-heading'>
   The watch <br/>that has it all
        </p>
        <p className='left-text'>
Betheme's is ready for your <br/>ecoomerce business
        </p>
        <div className="color-circles">
          <div className="color-circles-div">
            <Circle circleColor='#C4826B'/>
            <Circle circleColor='#2E3D66'/>
            <Circle circleColor='#C4C4C4'/>
            <Circle circleColor='#e1c2c2'/>
            </div>
            <button className='left-view-button'>View details</button>
        </div>

     </div>

             {/* ---------------------------------------------------right div */}

     <div className='home-right-div'>
<img src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-slider-pic1.webp'/>
     </div>
    </section>
    <ul className='homepage-bottom-ul'>
      <li>The Watch</li>
      <li>The blast of details</li>
      <li>Small and powerful</li>
      </ul>
      </>
  )
}

export default Home
