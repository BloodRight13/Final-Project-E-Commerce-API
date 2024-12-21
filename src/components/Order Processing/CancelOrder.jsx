import React from 'react';

const CancelOrder = ({ orderId, onOrderCancelled }) => {
  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      fetch(`/api/orders/${orderId}`, { method: 'DELETE' })
        .then(() => onOrderCancelled(orderId))
        .catch((error) => console.error(error));
    }
  };

  return <button onClick={handleCancel}>Cancel Order</button>;
};

export default CancelOrder;