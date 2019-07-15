import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/configurator">Configurator</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
