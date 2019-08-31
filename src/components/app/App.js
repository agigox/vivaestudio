import React from 'react';
import "./App.scss";
import Header from '../layout/Header';
import Home from '../pages/Home';
import About from '../pages/About';

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
