import React, { useState } from 'react';
import api from './services/api';

import './App.css';
import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');
 
  async function handleSubmit(event) {
    event.preventDefault();
    
    const response = await api.post('/users', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);
  }

  return (
    <div className="container">
      <img src={logo} alt="Fruit-Shop"/>
      
      <div className="content">

        <p>Alimentos <strong>saudáveis</strong> para toda sua <strong>família</strong>.</p>

        <form onSubmit={handleSubmit} >
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          
          <label htmlFor="email">SENHA *</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Sua senha"
          />

          <button className="btn-login" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
