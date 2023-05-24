import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Partners = () => {

  return (
    <div>
      <Helmet>
        <title>Motor Culture Australia - Partners</title>
      </Helmet>
      <div class="box">
        <h1>Partners</h1>
        <p>Template content</p>
        <NavLink to="/partner-terms-and-conditions" exact className="link" activeClassName="active">Partner Terms and Conditions</NavLink>
      </div>
    </div>
  );
};

export default Partners;
