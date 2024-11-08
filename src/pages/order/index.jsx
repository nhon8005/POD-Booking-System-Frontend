import React, { useState } from 'react';
import axios from 'axios';

const OrderPage = () => {
  const [orderDetails, setOrderDetails] = useState([{ productId: 0, quantity: 0 }]);

  const handleInputChange = (index, event) => {
    const values = [...orderDetails];
    values[index][event.target.name] = event.target.value;
    setOrderDetails(values);
  };

  const handleAddProduct = () => {
    setOrderDetails([...orderDetails, { productId: 0, quantity: 0 }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/orders', { detail: orderDetails });
      console.log('Order submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <div>
      <h1>Order Page</h1>
      <form onSubmit={handleSubmit}>
        {orderDetails.map((detail, index) => (
          <div key={index}>
            <label>
              Product ID:
              <input
                type="number"
                name="productId"
                value={detail.productId}
                onChange={(event) => handleInputChange(index, event)}
              />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                value={detail.quantity}
                onChange={(event) => handleInputChange(index, event)}
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={handleAddProduct}>Add Product</button>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderPage;