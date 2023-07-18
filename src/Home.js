import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Events from './Events'
import Stories from './Stories'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Events/>
      <Stories/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
