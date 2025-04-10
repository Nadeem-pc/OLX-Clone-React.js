import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import Navbar from '../../components/Navbar/Navbar'
import sample from '../../assets/blue-lamborghini-front.jpg'
import Footer from '../../components/Footer/Footer'
import map from '../../assets/map.png'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetail = () => {

    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const res = await axios.get(`http://localhost:4000/api/products`);
            const selected = res.data.find(p => p._id === id);
            setProduct(selected);
          } catch (err) {
            console.error('Error fetching product:', err.message);
          }
        };
        fetchProduct();
      }, [id]);
    
      const handlePrev = () => {
        if (imageIndex > 0) setImageIndex(prev => prev - 1);
      };
    
      const handleNext = () => {
        if (product && imageIndex < product.images.length - 1) {
          setImageIndex(prev => prev + 1);
        }
      };
    
      if (!product) return <p>Loading...</p>;

  return (
    <div>
        <Navbar/>
        <div className="detail-page-container">
            <section className='product-img'>
                <img src={`http://localhost:4000/${product.images[imageIndex]}`} alt="" />
                <div className="image-controls">
                    <button onClick={handlePrev} disabled={imageIndex === 0}>Prev</button>
                    <button onClick={handleNext} disabled={imageIndex === product.images.length - 1}>Next</button>
                </div>
                <div className="title">
                    <h2>{product.title}</h2>
                </div>
                <div className="product-details">
                    <h4>Description</h4>
                    <p>{product.description}</p>
                    {product.category === 'Car' ? (
                        <>
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>Year:</strong> {product.year}</p>
                            <p><strong>Owners:</strong> {product.owners}</p>
                            <p><strong>Kilometers Driven:</strong> {product.KmDriven} Km</p>
                        </>    
                    ) : (
                        <>
                            <p><strong>Sqft:</strong> {product.sqft}</p>
                            <p><strong>Bathrooms:</strong> {product.bathrooms}</p>
                            <p><strong>Bedrooms:</strong> {product.bedrooms}</p>
                        </>
                    )}
                </div>
            </section>

            <section className='other-info'>
                <div className="price">
                    <h1>₹ {product.price}</h1>
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