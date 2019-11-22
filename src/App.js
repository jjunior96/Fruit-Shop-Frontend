import React, { useState } from 'react';
import api from './services/api';

import Routes from './routes';

import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Fruit-Shop"/>
      
      <div className="content">
        <Routes />   
      </div>
    </div>
  );
}

export default App;
