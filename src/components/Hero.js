import React from 'react';
import PercolatorAssembly from './PercolatorAssembly';
import './Hero.scss';

function Hero({ textComponent }) {
  return (
    <div className="hero">
      <PercolatorAssembly />
      <div className="hero-text">
        { textComponent }
      </div>
    </div>
  );
}

export default Hero;
