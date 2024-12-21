import React, { useState, useEffect } from 'react';

const OrderTotal = ({ orderId }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`/api/orders/${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        const totalPrice = data.products.reduce(
          (sum, product) => sum + product.price * product.quantity,
          0
        );
        setTotal(totalPrice);
      })
      .catch((error) => console.error(error));
  }, [orderId]);

  return (
    <div>
      <h2>Order Total</h2>
      <p>${total.toFixed(2)}</p>
    </div>
  );
};

export default OrderTotal;