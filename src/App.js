import React from 'react';  
import { BrowserRouter, Route, Link } from 'react-router-dom';  
import CreateCustomerForm from './CustomerManagement/CreateCustomerForm';  
import ProductList from './ProductCatalog/ProductList';  
import PlaceOrderForm from './OrderProcessing/PlaceOrderForm';  
  
const App = () => {  
  return (  
   <BrowserRouter>  
    <nav>  
      <ul>  
       <li><Link to="/customers">Customers</Link></li>  
       <li><Link to="/products">Products</Link></li>  
       <li><Link to="/orders">Orders</Link></li>  
      </ul>  
    </nav>  
    <Route path="/customers" component={CreateCustomerForm} />  
    <Route path="/products" component={ProductList} />  
    <Route path="/orders" component={PlaceOrderForm} />  
   </BrowserRouter>  
  );  
};  
  
export default App;
