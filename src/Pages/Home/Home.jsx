import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import BootstrapCards from '../../components/Cards/Cards'

const Home = () => {
  return (
    <div>
        <Navbar />
        <BootstrapCards/>
        <Banner/>
    </div>
  )
}

export default Home