import React, { useState } from 'react';

const CreateProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProductForm;