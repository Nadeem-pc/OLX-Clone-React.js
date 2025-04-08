import React from 'react'
import './ProductDetail.css'
import Navbar from '../../components/Navbar/Navbar'
import sample from '../../assets/blue-lamborghini-front.jpg'
import Footer from '../../components/Footer/Footer'
import map from '../../assets/map.png'


const ProductDetail = () => {
  return (
    <div>
        <Navbar/>
        <div className="detail-page-container">
            <section className='product-img'>
                <img src={sample} alt="" />
                <div className="product-details">
                    <h4>Description</h4>
                    <p>product details will be appear here</p>
                </div>
            </section>

            <section className='other-info'>
                <div className="price">
                    <h1>₹ 1,00,00,000</h1>
                </div>
                <div className="map">
                    <img src={map} alt="" />
                </div>
                <button>Chat with seller</button>
            </section>
        </div>
        <Footer/>
    </div>
  )
}

export default ProductDetail