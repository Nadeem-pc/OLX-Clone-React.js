import React from 'react'
import Home from './Pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import AddProduct from './Pages/AddProduct/AddProduct';
import ProductProvider from './Context/ProductContext';


const App = () => {
  return (
    <>
      <ProductProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<ProductDetail/>}/>
        <Route path='/post' element={<AddProduct/>}/>
      </Routes>
      </ProductProvider>
    </> 
  )
}

export default App