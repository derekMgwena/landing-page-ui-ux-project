import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './features.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>DISCOVER THE VIRTUAL REALITY GAMING</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement , adventure, and the immersive nature of gaming  .</p>
    </div>
  </div>
);

export default Possibility;


