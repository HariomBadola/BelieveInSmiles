import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import './AboutUs.css'
import { motion } from 'framer-motion'


const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <div className='outer-about'>
        <motion.div className='about-container'
        
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 50
        }}
      
        >
        <h6 className='head-1'>
          Motto
        </h6>
        <p className='head-2'>
        'Spread smiles to reach miles' is the main and a very basic motto of BIS. We aim to make everyone smile a little more and worry a lot less even if it's just for a moment. Most smiles are started by another smile. You can only make others smile when you yourself are happy and full of joy. We believe in making ourselves smile more in order to make others smile. And this relationship goes hand-in-hand.
        </p>
        </motion.div>
        <motion.div className='about-container'
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 70
        }}
        >
        <h6 className='head-1'>
          Vision
        </h6>
        <p className='head-2'>
        It all started with a blurry vision and the journey of misty eyes joining us in order to see and to create a better world , world with countless smiles. In Believe In Smiles we do not have a sole practice but we do carry a sole motive of making YOU smile.
We have not just only laughed together but we have shared the pain too because that's when the heart smiles.
</p>
        </motion.div>
       
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs;
