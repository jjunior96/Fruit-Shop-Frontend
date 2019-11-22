import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Products() {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/products', {
        headers: { user_id }
      });

      setProducts(response.data);
    }

    loadProducts();
  }, []);
  return (
    <>
      <ul className="product-list">
        {products.map(product => (
          <li key={product._id}>
            <header></header>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </li>
        ))}
      </ul>
    </>
  )
}