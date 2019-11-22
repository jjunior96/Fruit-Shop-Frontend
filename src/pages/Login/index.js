import React, { useState } from 'react';
import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
 
  async function handleSubmit(event) {
    event.preventDefault();
    
    const response = await api.post('/users', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);
  }
  
  return (
    <>
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
    </>
  )
}