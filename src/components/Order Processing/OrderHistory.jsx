import React, { useState, useEffect } from 'react';

const OrderHistory = ({ customerId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`/api/orders?customerId=${customerId}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error(error));
  }, [customerId]);

  return (
    <div>
      <h2>Order History</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
              <p>Products:</p>
              <ul>
                {order.products.map((product) => (
                  <li key={product.id}>
                    {product.name} (x{product.quantity}) - ${product.price}
                  </li>
                ))}
              </ul>
              <p>Total: ${order.total}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
