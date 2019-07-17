import React from 'react';
import PercolatorAssembly from './PercolatorAssembly';
import './Configurator.scss';

function Configurator() {
  const style = {
    backgroundColor: '#212121',
  };

  return (
    <div className="configurator">
      <div style={style} className="result-viewport">
        <PercolatorAssembly open backgroundColor={style.backgroundColor} />
      </div>
      <div className="options">
        Options...
      </div>
    </div>
  );
}

export default Configurator;
