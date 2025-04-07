import React from 'react'
import Home from './Pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from 'react-router-dom'


const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes> */}
      <Home/>
    </div> 
  )
}

export default App