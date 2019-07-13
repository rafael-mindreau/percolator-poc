import React from 'react';
import { BrowserRouter as Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Configurator from './components/Configurator';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/configurator">Configurator</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/" component={Home}>Home</Route>
        <Route path="/configurator" component={Configurator}>Configurator</Route>
      </Switch>

      <footer />

    </div>
  );
}

export default App;
