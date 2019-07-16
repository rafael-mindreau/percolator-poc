import React from 'react';
import TopDefault from './percolator-parts/3D/tops/TopDefault';
import SpreaderBasic from './percolator-parts/3D/spreaders/Spreader01';
import BasketBasic from './percolator-parts/3D/baskets/Basket01';
import Ring from './percolator-parts/3D/Ring';
import BottomDefault from './percolator-parts/3D/bottoms/BottomDefault';
import './PercolatorAssembly.scss';

function PercolatorAssembly() {
  return (
    <div className="assembly-perspective-view">
      <TopDefault />
      <SpreaderBasic />
      <BasketBasic />
      <Ring />
      <BottomDefault />
    </div>
  );
}

export default PercolatorAssembly;
