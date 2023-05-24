import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CheckoutEntry = () => {
  const {giveaway, item} = useParams();
  let price = "";
  switch (item) {
    case "Bronze": price = "$25.00"; break;
    case "Silver": price = "$100.00"; break;
    case "Gold": price = "$200.00"; break;
    case "Diamond": price = "$400.00"; break;
    default: price="";
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
                    <div class='headrow'>Item</div>
                    <div class='headrow'>Quantity</div>
                    <div class='headrow'>Price</div>
                </div>
                <div class='row'>
                    <div>{item} entry to draw for {giveaway}</div>
                    <div>1</div>
                    <div>{price}</div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default CheckoutEntry;
