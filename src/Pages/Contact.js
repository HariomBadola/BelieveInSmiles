import React from 'react';
import Navbar from '../Components/Navbar';

import '../Pages/Contact.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='contact-outer'>
        <div className='container1'>
          <img className='iconimg' src='../images/logo.png' alt='Logo' />
        </div>
        <div className='container2'>
          <div className='strips'></div>
          <a href="https://www.facebook.com/believe.in.smile/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} style={{ marginLeft: '8px', color: '#3b5998' }} />
            </a>
            <a href="https://www.twitter.com/believe_insmile" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} style={{ marginLeft: '8px', color: '#1DA1F2' }} />
            </a>
            <a href="https://www.instagram.com/believe_in.smiles/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} style={{ marginLeft: '8px', color: '#E1306C' }} />
            </a>
          <a href='believeinsmiles.org@gmail.com'>
          <AiOutlineMail size={24} style={{ marginLeft: '8px', color: '#800000' }} />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
