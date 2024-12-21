import React, { useState, useEffect } from 'react';

const AutoRestock = ({ threshold, restockAmount }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        const lowStockProducts = data.filter((product) => product.stock < threshold);
        lowStockProducts.forEach((product) => {
          fetch(`/api/products/${product.id}/stock`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ stock: product.stock + restockAmount }),
          }).catch((error) => console.error(error));
        });
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, [threshold, restockAmount]);

  return (
    <div>
      <h2>Auto Restock Products</h2>
      <p>Threshold: {threshold}, Restock Amount: {restockAmount}</p>
    </div>
  );
};

export default AutoRestock;