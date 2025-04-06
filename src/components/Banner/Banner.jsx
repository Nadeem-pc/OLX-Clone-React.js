import React from 'react'
import './Banner.css'
import banner_img from '../../assets/phone-app.webp'
import appStore from '../../assets/appstore.webp'
import playStore from '../../assets/playstore.webp'


const Banner = () => {
  return (
    <div className="banner">
        <div className="banner-left">
            <img src={banner_img} alt="" />
        </div>

        <div className="banner-middle">
            <h2>TRY THE OLX APP</h2>
            <p>Buy, sell and find just about anything using <br/>
                the app on your mobile.</p>
        </div>

        <div className="banner-right">
            <p>GET YOUR APP TODAY</p>
            <div className="banner-right-imgs">
                <img src={appStore} alt="" />
                <img src={playStore} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner