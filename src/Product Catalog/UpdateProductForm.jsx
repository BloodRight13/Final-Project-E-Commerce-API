import React, { useState, useEffect } from 'react';

const UpdateProductForm = ({ productId, onUpdate }) => {
  const [formData, setFormData] = useState({ name: '', price: '' });

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error(error));
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(productId, formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
      </label>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;