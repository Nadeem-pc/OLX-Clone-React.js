import React from 'react'
import './Footer.css'
import appStore from '../../assets/appstore.webp'
import playStore from '../../assets/playstore.webp'
import socialmedia_icons from '../../assets/socialmedia_icons.png'
import footer_img from '../../assets/footer_img.png'


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

            {/* <div className="lower-footer">
                <img src={footer_img} alt="" />
                <p>Help - Sitemap</p>
                <p>All rights reserved &copy; 2006-{new Date().getFullYear()} OLX</p>
            </div> */}
        </div>
    </div>
  )
}

export default Footer