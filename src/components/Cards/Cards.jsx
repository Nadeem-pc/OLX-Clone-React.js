import React from "react";
import './Cards.css'
// import favourites_icon from '../../assets/favourites_icon.svg'
import sample from '../../assets/blue-lamborghini-front.jpg'
import { useNavigate } from "react-router-dom";


const BootstrapCards = () => {
  const cards = [
    { title: "Card 1", text: "This is card 1." },
    { title: "Card 2", text: "This is card 2." },
    { title: "Card 3", text: "This is card 3." },
    { title: "Card 4", text: "This is card 4." }
  ];

  const navigate = useNavigate()

  return (
    <div className="container mt-5 p-5">
        <h4>Fresh recommendations</h4>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100" style={{ minHeight: '260px' }}>
                <div className="card-body">
                    {/* <img id='fav_icon' src={favourites_icon} alt="" /> */}
                    <img src={sample} onClick={() => navigate('/details')} alt="" />
                    <div className="details">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootstrapCards;