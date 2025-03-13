import React from 'react';
import './Footer.css'; 
import './fanta.css';
import facebookLogo from './img.jpg/logo-facebook_1080029-107.webp';
import  twitterLogo from'./img.jpg/twitter.webp';
import instagramLogo from'./img.jpg/Instagram.webp';
import linkedinLogo from './img.jpg/logo-linkedin.webp';
function Footer() {
  return (
    <footer className="footer">
      
   <div className="footer-container">
        <div className="footer-branding">
          <h4>Eco tech</h4>
          {/* <image src {} alt='ecotech' */}
          <p> {new Date().getFullYear()} consommer de façon responsable</p>
        </div>





        <div className="footer-social">

          <h3>Suivez-nous</h3>

          <div className="social-icons">
            <a href="#" aria-label="Facebook" className="social-icon">
            <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="#" aria-label="Twitter" className="social-icon">
            <img src={twitterLogo } alt="twitter" />
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
            <img src={instagramLogo} alt="instagram" />
            </a>
            <a href="#" aria-label="Linkedin" className="social-icon">   
               <img src={linkedinLogo} alt="linkedin" /></a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;