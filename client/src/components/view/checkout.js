import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CartContext } from '../cartContext';

const Checkout = () => {
  // Import cart items from context
  const { cartItems } = useContext(CartContext);
  let total = 0;
  for (let i=0; i < cartItems.length; i++) {
    total = Math.round((total + cartItems[i].price * cartItems[i].quantity) * 100) / 100;
  }

  return (
    <div>
      <Helmet>
        <title>Motor Culture Australia - Checkout</title>
      </Helmet>
      <div class="box">
        <h1>Checkout</h1>
        <div class='checkout'>
          <div class='row headrow'>
              <div role="cell" class='headrow'>Item</div>
              <div role="cell" class='headrow'>Price</div>
          </div>
          {cartItems.map((item, index) => (
            <div class='row'>
              <div role="cell">{item.name} × {item.quantity}</div>
              <div role="cell">{item.price}</div>
            </div>
          ))}
        </div>
        Total: ${total}
      </div>
    </div>
  );
};

export default Checkout;
