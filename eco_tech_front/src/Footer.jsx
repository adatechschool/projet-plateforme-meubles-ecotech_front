import React from 'react';
import './Footer.css'; 






function Footer() {
  return (
    <footer className="footer">
   <div className="footer-container">
        <div className="footer-branding">
          <h2>Mon Entreprise</h2>
          <p>© {new Date().getFullYear()} Tous droits réservés</p>
        </div>

        <div className="footer-social">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook" className="social-icon">FB</a>
            <a href="#" aria-label="Twitter" className="social-icon">TW</a>
            <a href="#" aria-label="Instagram" className="social-icon">IG</a>
            <a href="#" aria-label="wattsap" className="social-icon">wattsap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;