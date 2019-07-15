import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Configurator from './components/Configurator';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Home}>Home</Route>
        <Route path="/configurator" component={Configurator}>Configurator</Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
