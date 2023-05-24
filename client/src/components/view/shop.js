import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Model from '../model';

const Shop = () => {
  // Display shop categories
  const[categories, setCategories] = useState([]);
  Model.fetch('/getCategories').then(response => { setCategories(response); });

  // Render categories into 3 boxes a row
  const renderBoxes = () => {
    const rows = [];
    for (let i = 0; i < categories.length; i += 3) {
      const rowItems = [];
      for (let j = 0; j < 3; j += 1) {
        const index = i + j;
        if (index < categories.length) {
          const category = categories[index];
          rowItems.push(
            <div key={index} className="flex-item">
              <div><img src={require('../../media/' + category.image)} alt={category.name} /></div>
              <NavLink to={{pathname:`/shop/${category.name}`, state: {category}}} exact className="link" activeClassName="active">{category.name}</NavLink>
            </div>
          );
        }
      }
      rows.push(
        <div key={i} className="horizontal-flex">
          {rowItems}
        </div>
      );
    }
    return rows;
  };

  return (
    <div>
      <Helmet>
        <title>Motor Culture Australia - Shop</title>
      </Helmet>
      <div class="box title">
        <h1>Shop</h1>
      </div>
      {renderBoxes()}
    </div>
  );
};

export default Shop;
