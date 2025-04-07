import React from 'react';
import './Login.css';
import guitar_img from '../../assets/loginEntryPointPost.webp'


const LoginPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <img id='guitarImg' src={guitar_img} alt="Guitar Icon" className="popup-icon" />
        <p>Help us become one of the safest places to buy and sell</p>

        <button className="phone-btn">
          📱 Continue with phone
        </button>
        <button className="google-btn" id='googleBtn'>
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