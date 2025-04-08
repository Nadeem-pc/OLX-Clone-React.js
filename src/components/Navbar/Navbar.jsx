import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg' 
import search_icon from '../../assets/search_icon.svg'
import search_icon2 from '../../assets/search_icon2.svg'
import arrow_down from '../../assets/arrow_down.svg'
import favourites_icon from '../../assets/favourites_icon.svg'
import LoginPopup from '../Login/Login';
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate()

    const [showLogin, setShowLogin] = useState(false)

    const toggleLogin = () => {
        setShowLogin(prev => !prev)
    }

    const email = localStorage.getItem('email');
    const username = email ? email.split('@')[0] : null;

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
                    {username ? (
                        <span style={{fontSize:'14px'}}>{username}</span>
                    ) : (
                        <a onClick={toggleLogin} style={{ cursor: 'pointer' }}>Login</a>
                    )}
                    <button onClick={() => navigate('/post')}>+ SELL</button>
                </div>
            </div>

            <div className="sub-header">
                <select>
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
            {showLogin && <LoginPopup onClose={toggleLogin} />}
        </>
    )
}

export default Navbar