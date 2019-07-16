import React from 'react';
import { NavLink } from 'react-router-dom';
import './Button.scss';

export default function ButtonBasic({ title }) {
  return (
    <div className="button basic">
      <NavLink to="/configurator">{title}</NavLink>
    </div>
  );
}
