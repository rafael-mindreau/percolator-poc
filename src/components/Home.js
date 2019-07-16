import React from 'react';
import Hero from './Hero';
import Button from './general/ButtonLink';
import Photo from '../img/Coffee-Percolator.jpg';
import './Home.scss';

function Home() {
  const heroText = (
    <div>
      <h2 className="fancy-title definition-text">перколятор</h2>
      <p className="definition-text">
        n. (pʲɛrkɔlʲatɔr)
      </p>

      <p className="definition-text">
        A device used to brew coffee by passing boiling water through coffee grounds.
      </p>

      <p>
        Configure and make your own percolator today,
        with many options and customisation to create a truly personal
        brewing experience!
      </p>

      <Button title="Configure your own" />
    </div>
  );

  return (
    <div className="home">
      <Hero
        textComponent={heroText}
      />
      <img src={Photo} alt="Percolator on table" />
    </div>
  );
}

export default Home;
