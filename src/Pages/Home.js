import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'

import Footer from '../Components/Footer'
import Stories from '../Pages/Stories'
import Youtube from './Youtube'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <div>
      
      <Navbar/> 
      <Header/>
      <Youtube/>
     
      <Stories/>
      <Footer/>
    </div>
  )
}

export default Home
