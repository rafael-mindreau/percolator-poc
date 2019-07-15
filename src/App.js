import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Configurator from './components/Configurator';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/configurator" component={Configurator} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
