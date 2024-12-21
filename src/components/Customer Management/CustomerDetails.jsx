import React, { useState, useEffect } from 'react';

const CustomerDetails = ({ customerId }) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch(`/api/customers/${customerId}`)
      .then((res) => res.json())
      .then((data) => setCustomer(data))
      .catch((error) => console.error(error));
  }, [customerId]);

  if (!customer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Customer Details</h2>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
    </div>
  );
};

export default CustomerDetails;
