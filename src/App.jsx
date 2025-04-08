import React from 'react'
import Home from './Pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductDetail from './Pages/ProductDetail/ProductDetail';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<ProductDetail/>}/>
      </Routes>
    </div> 
  )
}

export default App