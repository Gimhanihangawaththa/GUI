import React from 'react'
import './Hero.css'
import arrow_icon from "../Assets/arrow_icon.png"
import arrow2_icon from "../Assets/arrow2_icon.png"
import hero_image from "../Assets/hero_image.jpg"
const Hero = () => {
  return (
   
    <div className="hero">
      <div className="hero-left">
<h2>NEW ARRIVALS ONLY</h2>
<div>
  <div className="arrow-arrow-icon">
    <p>NEW</p>
    <img src={arrow_icon} alt=''/>
  </div>
  <p>collections</p>
  <p>for everyone</p>
</div>
<div className="hero-laset-btn">
<div>Lastest Collection</div>
<img src={arrow2_icon} alt=''/>
</div>
      </div>
      <div className="hero-right">
<img src={hero_image} alt=''/>
      </div>
    </div>
     
    
  )
}

export default Hero
