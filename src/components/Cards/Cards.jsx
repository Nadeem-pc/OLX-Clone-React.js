import React, { useEffect, useState } from "react";
import './Cards.css'
// import favourites_icon from '../../assets/favourites_icon.svg'
import { useNavigate } from "react-router-dom";
import axios from "axios";


const BootstrapCards = () => {

  const [cards, setCards] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
        try {
          const res = await axios.get("http://localhost:4000/api/products", { withCredentials: true });
          setCards(res.data);
        } catch (error) {
          console.error("Error fetching products:", error.message);
        }
    }
    fetchProducts()
  },[])

  return (
    <div className="container mt-5 p-5">
        <h4>Fresh recommendations</h4>
      <div className="row mt-4">
        {cards.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100" style={{ minHeight: '260px' }}>
                <div className="card-body">
                    {/* <img id='fav_icon' src={favourites_icon} alt="" /> */}
                    {card.images ?. [0] && (
                        <img
                            src={`http://localhost:4000/${card.images[0]}`} 
                            onClick={() => navigate(`/details/${card._id}`)} 
                            style={{ width: "100%", height: "190px", objectFit: "cover", cursor: "pointer" }} 
                        />
                    )}
                    <div className="details">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">₹{card.price}</p>
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