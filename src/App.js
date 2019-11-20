import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Fruit-Shop"/>
      
      <div className="content">

        <p>Alimentos <strong>saudáveis</strong> para toda sua <strong>família</strong>.</p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor email"
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
