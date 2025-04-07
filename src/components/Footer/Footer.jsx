import React from 'react'
import './Footer.css'
import appStore from '../../assets/appstore.webp'
import playStore from '../../assets/playstore.webp'
import socialmedia_icons from '../../assets/socialmedia_icons.png'
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img3.svg'
import img3 from '../../assets/igg4.svg'
import img4 from '../../assets/igm5.svg'
import img5 from '../../assets/img6.svg'
import olx_img from '../../assets/olx.svg'

const Footer = () => {
  return (
    <div>
        <div className="main">
            <div className="upper-footer">
                <ul>
                    <section>
                        <p>POPULAR LOCATIONS</p>
                        <li>Kolkata</li>
                        <li>Mumbai</li>
                        <li>Chennai</li>
                        <li>Pune</li>
                    </section>

                    <section>
                        <p>TRENDING LOCATIONS</p>
                        <li>Bhubaneshwar</li>
                        <li>Hyderabad</li>
                        <li>Chandigarh</li>
                        <li>Nashik</li>
                    </section>

                    <section>
                        <p>ABOUT US</p>
                        <li>Tech@OLX</li>
                    </section>

                    <section>
                        <p>OLX</p>
                        <li>Blog</li>
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>Legal & Privacy information</li>
                        <li>Vulnerability Disclosure Program</li>
                    </section>

                    <section>
                        <p>FOLLOW US</p>
                        <div className="socialmedia-icons">
                            <img src={socialmedia_icons} alt="" />
                        </div>
                        <div className="imgs">
                            <img src={playStore} alt="" />
                            <img src={appStore} alt="" />
                        </div>
                    </section>
                </ul>
            </div>

            <div className="lower-footer">
                <img src={img1} alt="" />
                <img src={olx_img} id='olx-img' alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </div>
            <div className="coypright">
                <p>Help - Sitemap</p>
                <p>All rights reserved &copy; 2006-{new Date().getFullYear()} OLX</p>
            </div>
        </div>
    </div>
  )
}

export default Footer