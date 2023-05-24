import React, { useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Model from '../model';
import { CartContext } from '../cartContext';
import { unescape } from 'lodash';

const Category = () => {
  // Display cateogory's products
  const[products, setProducts] = useState([]);
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const location = useLocation();
  // Guard if category's data is not passed in
  if (!location.state || !location.state.category) { return(<div class="box"><h1>Loading...</h1></div>) } 
  
  // Pull category's data
  const category = location.state.category;
  Model.fetch('/getProducts/'+ category.id).then(response => { setProducts(response); });

  // Import cart functions from context
  const buy = (product) => { addItemToCart(product); };

  // Render categories into 3 boxes a row
  const renderBoxes = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += 3) {
      const rowItems = [];
      for (let j = 0; j < 3; j += 1) {
        const index = i + j;
        if (index < products.length) {
          const product = products[index];
          const buyText = 'Add “' + unescape(product.desc) + '” to your cart';
          rowItems.push(
              <div key={index} className="flex-item" role="listitem">
                <div><img src={require('../../media/' + product.image)} alt={product.name} /></div>
                <NavLink 
                  to='/checkout' exact 
                  className="link" activeClassName="active"
                  onClick={() => buy(product)}
                >{product.name} </NavLink>
                <p><bdi>${product.price} </bdi></p>
                <button name={buyText}>
                  <NavLink 
                    to={{pathname:'/checkout', state:{product}}} exact 
                    name={buyText}
                    className="link" activeClassName="active"
                    onClick={() => buy(product)}
                  >Buy Now</NavLink>
                </button>
              </div>
          );
        } else {rowItems.push(<div key={index} className="flex-item" role="listitem"></div>)}
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
        <h1>{category.name}</h1>
      </div>
      {renderBoxes()}
    </div>
  );
};

export default Category;
