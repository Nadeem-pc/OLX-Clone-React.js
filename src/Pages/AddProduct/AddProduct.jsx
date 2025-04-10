import React, { useContext, useState } from 'react'
import './AddProduct.css'
import goBack from '../../assets/left_arrow.png'
import Footer from '../../components/Footer/Footer'
import add_photo from '../../assets/add_photo.svg'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../Context/ProductContext'
import { addProduct } from '../../service'

const AddProduct = () => {

    const {productData, setProductData} = useContext(ProductContext)

    const [imageFiles, setImageFiles] = useState([null, null, null]);

    const navigate = useNavigate()

    const formControl = (e) => {
        const { name, value, files, dataset } = e.target

        if (name === 'images') {
            const index = Number(dataset.index);
            const file = files[0];

            if (file) {
                const updatedFiles = [...imageFiles]
                updatedFiles[index] = file
                setImageFiles(updatedFiles)
            }

        } else {
            setProductData((prev) => ({ ...prev, [name]: value }))
        }
    }

    const handleForm = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        for (const key in productData) {
            if (productData[key]) {
                formData.append(key, productData[key])
            }
        }

        imageFiles.forEach((file, i) => {
            if (file) {
                formData.append('images', file)
            }
        })

        try {
            const res = await addProduct(formData);
            
            if (res.status === 201) {
                alert('Product uploaded successfully!')
                navigate('/')
            } else {
                console.error('Upload failed:')
                alert('Upload failed')
            }

        } catch (error) {
            console.error('Error uploading:', error)
            alert('Error occurred during upload')
        }
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
                                <input type="number" name='sqft' value={productData.sqft} onChange={formControl} required/>
    
                                <label>Bathrooms</label>
                                <input type="number" name='bathrooms' value={productData.bathrooms} onChange={formControl} required/>
    
                                <label>Bedrooms</label>
                                <input type="number" name='bedrooms' value={productData.bedrooms} onChange={formControl} required />
                            </>
                        )}


                        {productData.category === 'Car' && (
                            <>
                                <label>Brand</label>
                                <input type="text" name='brand' value={productData.brand} onChange={formControl} required/>

                                <label>Year</label>
                                <input type="number" name='year' value={productData.year} onChange={formControl} required/>

                                <label>No: of Owners</label>
                                <input type="number" name='owners' value={productData.owners} onChange={formControl} required/>

                                <label>KM Driven</label>
                                <input type="number"  name='KmDriven' value={productData.KmDriven} onChange={formControl} required/>
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
                           {[0, 1, 2].map((i) => (
                                <div key={i} className={`img-${i + 1}`}>
                                  {imageFiles[i] && <img src={URL.createObjectURL(imageFiles[i])} alt={`Preview ${i}`} />}
                                </div>
                            ))}
                        </section>

                        <div className="upload-img">
                            {[0, 1, 2].map((i) => (
                                <input
                                    key={i}
                                    required
                                    type="file"
                                    name="images"
                                    id={`img${i}`}
                                    data-index={i}
                                    accept="image/*"
                                    onChange={formControl}
                                />
                            ))}
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