import React from 'react';
import Hero from './Hero';

function Home() {
  const textComponent = <div>Hey there</div>;

  return (
    <div className="home">
      <Hero
        text={textComponent}
      />
    </div>
  );
}

export default Home;
