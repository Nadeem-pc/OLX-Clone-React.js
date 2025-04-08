import React from 'react'
import './AddProduct.css'
import goBack from '../../assets/left_arrow.png'
import Footer from '../../components/Footer/Footer'
// import sample from '../../assets/blue-lamborghini-front.jpg'
import add_photo from '../../assets/add_photo.svg'
import { useNavigate } from 'react-router-dom'


const AddProduct = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='form-container'>
                <div className="header">
                    <img src={goBack} onClick={() => navigate('/')} alt="" />
                </div>
                <h4 className='title'>POST YOUR AD</h4>
                <div className="form">
                    <form>
                        <label>Category</label>
                        <select required>
                            <option value="">Select</option>
                            <option value="Car">Car</option>
                            <option value="House">House</option>
                        </select>

                        {/* <label>SQFT</label>
                        <input type="number"/>

                        <label>Bathrooms</label>
                        <input type="number"/>

                        <label>Bedrooms</label>
                        <input type="number" /> */}


                        {/* <label>Brand</label>
                        <input type="text"/>

                        <label>Year</label>
                        <input type="number"/>

                        <label>No: of Owners</label>
                        <input type="number" />

                        <label>KM Driven</label>
                        <input type="number" /> */}


                        <label>Title</label>
                        <input type="text" required/>

                        <label>Description</label>
                        <input type="text" required/>

                        <label>Price</label>
                        <input type="number" required/>

                        <label>Images</label>
                        <section className='img-section'>
                            <div className="img-1">
                                <img src={add_photo} alt="" />
                            </div>
                            <div className="img-2">
                                <img src={add_photo} alt="" />
                            </div>
                            <div className="img-3">
                                <img src={add_photo} alt="" />
                            </div>
                        </section>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AddProduct