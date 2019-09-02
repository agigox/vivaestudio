import React from 'react';
import "./App.scss";
import Header from '../layout/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Legal from '../pages/Legal';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/legal" exact component={Legal} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Router>
  );
}

export default App;
