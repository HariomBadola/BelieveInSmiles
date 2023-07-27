import React from 'react';
import '../Components/Card.css'
import { motion } from 'framer-motion';

const Card = ({ imgSrc, imgAlt, title, description, buttonText, link }) => {
  return (
  <motion.div
        className="card-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        
        <div class="card" >
          <img
            src={imgSrc}
            class="card-img-top"
            alt={imgAlt}
            style={{ width: "90%", alignSelf: "center", marginBottom: "1rem" }}
          />
          <div class="card-body" style={{ textAlign: "center" }}>
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <a href={link} class="btn btn-success" >{buttonText}</a>
          </div>
        </div>
      </motion.div>
  );
};

export default Card;
