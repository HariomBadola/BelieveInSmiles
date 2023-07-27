import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'


const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='container'>
        <div className='location'>
          <p>
            
          </p>
        </div>
        <div className="mt-5">
          <p className="main-hero-para text-center w-100">
            Follow us on social media:
            <a href="https://www.facebook.com/believe.in.smile/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} style={{ marginLeft: '8px', color: '#3b5998' }} />
            </a>
            <a href="https://www.twitter.com/believe_insmile" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} style={{ marginLeft: '8px', color: '#1DA1F2' }} />
            </a>
            <a href="https://www.instagram.com/believe_in.smiles/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} style={{ marginLeft: '8px', color: '#E1306C' }} />
            </a>
            
          </p>
          <p className="main-hero-para text-center w-100">
            Copyright @ 2023 BelieveinSmiles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
