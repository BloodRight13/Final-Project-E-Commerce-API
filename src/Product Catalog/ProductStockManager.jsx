import React, { useState, useEffect } from 'react';

const ProductStockManager = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const updateStock = (productId, newStock) => {
    fetch(`/api/products/${productId}/stock`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stock: newStock }),
    })
      .then(() => {
        setProducts((prev) =>
          prev.map((product) =>
            product.id === productId ? { ...product, stock: newStock } : product
          )
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Manage Product Stock</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Stock: {product.stock}
            <button onClick={() => updateStock(product.id, product.stock + 1)}>+1</button>
            <button onClick={() => updateStock(product.id, product.stock - 1)}>-1</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductStockManager;