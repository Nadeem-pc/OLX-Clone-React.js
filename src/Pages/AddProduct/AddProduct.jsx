import React, { useContext } from 'react'
import './AddProduct.css'
import goBack from '../../assets/left_arrow.png'
import Footer from '../../components/Footer/Footer'
// import sample from '../../assets/blue-lamborghini-front.jpg'
import add_photo from '../../assets/add_photo.svg'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../Context/ProductContext'


const AddProduct = () => {

    const {productData, setProductData} = useContext(ProductContext)

    const navigate = useNavigate()

    const formControl = (e) => {
        const { name, value } = e.target
        setProductData((prv) => ({ ...prv, [name]: value }))
    }

    const handleForm = (e) => {
        e.preventDefault();
        // console.log(productData)
    }

    return (
        <>
            <div className='form-container'>
                <div className="header">
                    <img src={goBack} onClick={() => navigate('/')} alt="" />
                </div>
                <h4 className='title'>POST YOUR AD</h4>
                <div className="form">
                    <form onSubmit={handleForm}>
                        <label>Category</label>
                        <select name='category' value={productData.category} onChange={formControl} required>
                            <option value="">Select</option>
                            <option value="Car">Car</option>
                            <option value="House">House</option>
                        </select>

                        {productData.category === 'House' && (
                            <>
                                <label>SQFT</label>
                                <input type="number" name='sqft' value={productData.sqft} onChange={formControl}/>
    
                                <label>Bathrooms</label>
                                <input type="number" name='bathrooms' value={productData.bathrooms} onChange={formControl}/>
    
                                <label>Bedrooms</label>
                                <input type="number" name='bedrooms' value={productData.bedrooms} onChange={formControl}/>
                            </>
                        )}


                        {productData.category === 'Car' && (
                            <>
                                <label>Brand</label>
                                <input type="text" name='brand' value={productData.brand} onChange={formControl}/>

                                <label>Year</label>
                                <input type="number" name='year' value={productData.year} onChange={formControl}/>

                                <label>No: of Owners</label>
                                <input type="number" name='owners' value={productData.owners} onChange={formControl}/>

                                <label>KM Driven</label>
                                <input type="number"  name='KmDriven' value={productData.KmDriven} onChange={formControl}/>
                            </>
                        )}


                        <label>Title</label>
                        <input type="text" name='title' value={productData.title} onChange={formControl} required/>

                        <label>Description</label>
                        <input type="text" name='description' value={productData.description} onChange={formControl} required/>

                        <label>Price</label>
                        <input type="number" name='price' value={productData.price} onChange={formControl} required/>

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

                        <div className="upload-img">
                            <input type="file" id='img1' accept='image/*'/>
                            <input type="file" id='img2' accept='image/*'/>
                            <input type="file" id='img3' accept='image/*'/>
                        </div>  

                        <button type="submit" style={{marginTop:'20px'}} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AddProduct