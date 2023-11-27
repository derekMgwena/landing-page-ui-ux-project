import React from 'react';
import { Footer, Possibility, Features, Header } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Features />
    <Possibility />
    <Footer />
  </div>
);

export default App;
