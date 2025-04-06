import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg' 
import search_icon from '../../assets/search_icon.svg'
import search_icon2 from '../../assets/search_icon2.svg'
import arrow_down from '../../assets/arrow_down.svg'
import favourites_icon from '../../assets/favourites_icon.svg'


const Navbar = () => {
    return(
        <>
            <div className='navbar'>
                <div className="navbar-left">
                    <img src={logo} alt="" />
                </div>

                <div className="navbar-middle">
                    <div className="location-box">
                        <img src={search_icon} alt="" />
                        <img src={arrow_down} alt="" />
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder='Find Cars, Mobile Phones and more...' disabled/>
                        <div id="search-icon">
                            <img src={search_icon2} alt="" />
                        </div>
                    </div>
                </div>

                <div className="navbar-right">
                    <select name="" id="">
                        <option value="">ENGLISH</option>
                        <option value="">हिंदी</option>
                    </select>
                    <img src={favourites_icon} alt="" />
                    <a>Login</a>
                    <button>+ SELL</button>
                </div>
            </div>

            <div className="sub-header">
                <select name="" id="">
                    <option value="">ALL CATEGORIES</option>
                </select>
                <ul>
                    <li>Cars</li>
                    <li>Motorcycles</li>
                    <li>Mobile Phones</li>
                    <li>For Sale: Houses & Apartments</li>
                    <li>Scooters</li>
                    <li>Commercial & Other Vehicles</li>
                    <li>For Rent: Houses & Apartments</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar