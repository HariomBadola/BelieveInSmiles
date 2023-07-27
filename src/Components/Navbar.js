import React from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import './Navbar.css';

const Navbar = () => {
  return (
    
       <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <motion.div
              
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
              <Link className="navbar-brand" to="/">Believe In Smiles</Link>
              </motion.div>
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item ">
                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Events">Events</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/Contact" >Contact</Link>
                  </li>
                  <li className="nav-item  ">
                  <Link className="nav-link" to="/Getinvolved" >Get Involved</Link>
                  </li>
                  <li className="nav-item  ">
                  <Link className="nav-link" id = "donate" to="/Donate" >Donate!</Link>
                  
                  </li>
                </ul>
              </div>
            </div>
          </nav>
       
          
        
   
  )
}

export default Navbar;
