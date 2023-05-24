import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MEDIA from '../../media/media';

const NewVip = () => {

  return (
    <div>
      <Helmet>
        <title>Motor Culture Australia - New VIP</title>
      </Helmet>
      <div class="box">
        <h1>Join the VIP Members Club</h1>
        <p>Template content</p>
        <button name="Terms and Conditions – VIP Members Club">
        <NavLink to="/vip-terms-and-conditions.pdf" exact className="link" activeClassName="active">Terms and Conditions – VIP Members Club</NavLink>
      </button>
      </div>
    </div>
  );
};

export default NewVip;
