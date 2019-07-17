import React from 'react';
import TopDefault from './percolator-parts/3D/tops/TopDefault';
import SpreaderBasic from './percolator-parts/3D/spreaders/Spreader01';
import BasketBasic from './percolator-parts/3D/baskets/Basket01';
import Ring from './percolator-parts/3D/Ring';
import BottomDefault from './percolator-parts/3D/bottoms/BottomDefault';
import './PercolatorAssembly.scss';

function PercolatorAssembly({ backgroundColor, dynamic, open }) {
  const className = `assembly-perspective-view ${dynamic ? 'dynamic ' : ''} ${open ? 'open ' : ''}`;

  return (
    <div className={className}>
      <TopDefault fillColor={backgroundColor} />
      <SpreaderBasic fillColor={backgroundColor} />
      <BasketBasic fillColor={backgroundColor} />
      <Ring />
      <BottomDefault fillColor={backgroundColor} />
    </div>
  );
}

export default PercolatorAssembly;
