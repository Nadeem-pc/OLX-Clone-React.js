import React, { useEffect, useState } from 'react';
import './Login.css';
import { auth, provider } from '../../firebase'
import {signInWithPopup} from 'firebase/auth'
import guitar_img from '../../assets/loginEntryPointPost.webp'
import { data } from 'react-router-dom';


const LoginPopup = ({ onClose }) => {

  const[value, setValue] = useState("")

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
      location.reload()
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })


  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <img id='guitarImg' src={guitar_img} alt="Guitar Icon" className="popup-icon" />
        <p>Help us become one of the safest places to buy and sell</p>

        <button className="phone-btn">
          📱 Continue with phone
        </button>
        <button className="google-btn" id='googleBtn' onClick={handleClick}>
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Icon" />
          Continue with Google
        </button>

        <div className="separator">OR</div>
        <a href="#" className="email-link">Login with Email</a>

        <p className="policy-note">
          All your personal details are safe with us.
          <br />
          If you continue, you are accepting
          <a className='policy-note-link'> OLX Terms and Conditions and Privacy Policy</a>
        </p>
      </div>
    </div>
  ); 
};

export default LoginPopup;