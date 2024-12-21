import React, { useState, useEffect } from 'react';

const PlaceOrderForm = ({ customerId, onOrderPlaced }) => {
  const [products, setProducts] = useState([]);
  const [orderData, setOrderData] = useState({ productId: '', quantity: 1 });

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      customerId,
      productId: orderData.productId,
      quantity: parseInt(orderData.quantity),
      orderDate: new Date().toISOString(),
    };

    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => onOrderPlaced(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product:
        <select name="productId" value={orderData.productId} onChange={handleChange} required>
          <option value="">Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name} (${product.price})
            </option>
          ))}
        </select>
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={orderData.quantity}
          onChange={handleChange}
          min="1"
          required
        />
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default PlaceOrderForm;