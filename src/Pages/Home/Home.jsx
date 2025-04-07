import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import BootstrapCards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    
  return (
    <div>
        <Navbar />
        <BootstrapCards/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Home