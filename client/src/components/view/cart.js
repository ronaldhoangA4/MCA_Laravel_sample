import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CartContext } from '../cartContext';

const Cart = () => {
  // Import cart functions from context
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <Helmet>
        <title>Motor Culture Australia - Cart</title>
      </Helmet>
      <div class="box">
        <h1>Cart</h1>
        <div class='checkout'>
          <div class='row headrow'>
              <div class='headrow'>Item</div>
              <div class='headrow'>Quantity</div>
              <div class='headrow'>Price</div>
          </div>
          {cartItems.map((item, index) => (
            <div class='row'>
              <div>{item.name}</div>
              <div>{item.quantity}</div>
              <div>{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
