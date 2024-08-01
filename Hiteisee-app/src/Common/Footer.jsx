import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; // Correct import
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'; // Correct import
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Correct import
import { faYoutube } from '@fortawesome/free-brands-svg-icons'; // Correct import

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Have a Questions?</h4>
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          <p>+2 392 3929 210</p>
          <p>info@yourdomain.com</p>
        </div>
        <div className="footer-section">
          <h4>Recent Blog</h4>
          <div className="blog-post">
            <img src="path_to_image" alt="Blog post" />
            <div>
              <p>Even the all-powerful Pointing has no control about</p>
              <p><span>June 27, 2019</span> | <span>Admin</span> | <span>19</span></p>
            </div>
          </div>
          <div className="blog-post">
            <img src="path_to_image" alt="Blog post" />
            <div>
              <p>Even the all-powerful Pointing has no control about</p>
              <p><span>June 27, 2019</span> | <span>Admin</span> | <span>19</span></p>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Subscribe Us!</h4>
          <input type="email" placeholder="Enter email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy;2024 All rights reserved Hiteisee Consulting</p>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
