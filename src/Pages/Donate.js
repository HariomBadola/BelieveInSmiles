import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar.js'
import '../Pages/Donate.css'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';



const Donate = () => {
  
  return (
    
    <div>
    
    <Navbar/>
    <div className='Container'>
    
      <motion.div
        className="card-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        
        {/* First Card */}
        <div className="card" >
          <img
            src="../images/Donate/Picture1.jpg"
            class="card-img-top"
            alt="..."
            style={{ width: "80%", alignSelf: "center", marginBottom: "1rem" }}
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title">Donate time for a cause</h5>
            <p className="card-text}">Get involved with us on ground.     </p>
            <Link to="/Getinvolved"  class="btn btn-success">Join</Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="card-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Second Card */}
        <div className="card" >
          <img
            src="../images/Donate/Picture2.png"
            class="card-img-top"
            alt="..."
            style={{ width: "80%", alignSelf: "center", marginBottom: "1rem" }}
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title">Donate to sponsor</h5>
            <p className="card-text">Sponsor the efforts.</p>
            <Link to="/TransactionForm" class="btn btn-success" >Pay</Link>
          </div>
        </div>
      </motion.div>
      
    </div>
      <Footer/>
    </div>
  );
};

export default Donate;
