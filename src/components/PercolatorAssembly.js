import React from 'react';
import TopDefault from './percolator-parts/tops/TopDefault';
import Spreader01 from './percolator-parts/spreaders/Spreader01';

function PercolatorAssembly() {
  return (
    <div className="assembly-perspective-view">
      <Spreader01 />
      <TopDefault />
    </div>
  );
}

export default PercolatorAssembly;
