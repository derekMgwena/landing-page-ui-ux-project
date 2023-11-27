import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">

    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement , adventure, and the immersive nature of gaming , <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Help</h4>
        <p>Support</p>
        <p>About</p>
       <p>Contact Us</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>products </p>
        <p>Apps & Games</p>
        <p>Features</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Resources</h4>
        <p>Youtube playlist</p>
        <p>How to - Blog</p>
        <p>Terms & Conditions</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@ Copyright 2023. All rights reserved by board.</p>
    </div>
  </div>
);

export default Footer;
