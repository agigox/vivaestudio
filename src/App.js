import React from 'react';
import "./App.scss";
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </Router>
  );
}

export default App;
