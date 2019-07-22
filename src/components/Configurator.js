import React from 'react';
import { connect } from 'react-redux';
import PercolatorAssembly from './PercolatorAssembly';
import options from '../constants/options';
import './Configurator.scss';

function Configurator({ spreader }) {
  const style = {
    backgroundColor: '#212121',
  };

  console.log(options.spreaders);

  const mappedOptions = Object.keys(options).map((partKey, index) => {
    // Put choices per part into a list
    const part = options[partKey];
    const optionsPerPart = Object.keys(part).map((optionKey) => {
      const option = part[optionKey];

      return (
        <div className="choice">
          {option.name}
        </div>
      );
    });

    // Normalise number to have an appended 0 if not higher than 10
    const optionNumber = index >= 9 ? index : `0${index + 1}`;

    // Display option and its choices
    // TODO also display options
    return (
      <div className="option">
        <h2 className="option-number">{optionNumber}</h2>
        <h3 className="option-title">{partKey}</h3>
        <div className="choices">
          {optionsPerPart}
        </div>
        <h3 className="choice-title">Default</h3>
        <p className="choice-description">
          {spreader.description}
        </p>
        <div className="bottom-bar">
          <span className="cost">
            {spreader.price}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="configurator">
      <div style={style} className="result-viewport">
        <PercolatorAssembly open backgroundColor={style.backgroundColor} />
      </div>
      <div className="options">
        {mappedOptions}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  top: state.config.top,
  spreader: state.config.spreader,
});

export default connect(mapStateToProps)(Configurator);
