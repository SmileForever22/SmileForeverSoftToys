import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>CONTACT US</h4>
        <p>smileforeverst22@gmail.com</p>
      </div>

      <div className="midFooter">
        <h1>SMILE FOREVER</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2022 &copy; Smile Forever</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://instagram.com/smileforever_softtoys">Instagram</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
