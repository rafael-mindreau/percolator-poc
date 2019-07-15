import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.scss';

function Logo() {
  return (
    <NavLink exact to="/" className="logo">П</NavLink>
  );
}

export default Logo;
