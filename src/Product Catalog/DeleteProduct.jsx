import React from 'react';

const DeleteProduct = ({ productId, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      fetch(`/api/products/${productId}`, { method: 'DELETE' })
        .then(() => onDelete(productId))
        .catch((error) => console.error(error));
    }
  };

  return <button onClick={handleDelete}>Delete Product</button>;
};

export default DeleteProduct;