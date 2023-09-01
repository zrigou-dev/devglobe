import React from 'react'
import './Hero.css'
import zrigou from '../../Assets/zrigou.jpeg' 

const Hero = () => {
  return (
    <div className="hero" id='#'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p className='hi'>Hi, I'm</p>
                    <h3>Mohamed Zrigou</h3>
                    <h2>Full Stack developer</h2>
                    <p>Dedicated web developer with a passion for crafting contemporary web applications, innovating to deliver flawless and exceptional user experiences.</p>
                    <a href="#portfolio">My Works</a>
                </div>
                <div className="col-md-6">
                    <img src={zrigou} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
