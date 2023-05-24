import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Model from '../model';

const model = new Model();

const Benefits = () => {
  const giveaways = model.giveaways;

  return (
    <div>
      <Helmet>
        <title>Motor Culture Australia - Benefits</title>
      </Helmet>
      <div class="box title">
        <h1>Benefits</h1>
      </div>
      <div class="box">
        <h1>Join our VIP club and get lots of benefits</h1>
        <p>Template content</p>
        <ul>
          <li>VIP Mini</li>
          <button name="Learn More & Sign up">
            <NavLink to="/new-vip" exact className="link" activeClassName="active">Learn More & Sign up</NavLink>
          </button>
          <li>VIP Standard</li>
          <button name="Learn More & Sign up">
            <NavLink to="/new-vip" exact className="link" activeClassName="active">Learn More & Sign up</NavLink>
          </button>
          <li>VIP Premium</li>
          <button name="Learn More & Sign up">
            <NavLink to="/new-vip" exact className="link" activeClassName="active">Learn More & Sign up</NavLink>
          </button>
        </ul>
      </div>
      <div class="box odd">
        <h1>Not ready to commit? Try our one-time membership</h1>
        <p>Template content</p>
        <button name="Join & Choose a draw">
          <NavLink to="/current-giveaways" className="link" activeClassName="active">Join & Choose a draw</NavLink>
        </button>
      </div>
      <div class="box">
        <h1>We partner with businesses to give you exclusive discounts</h1>
        <p>Template content</p>
        <button name="See The Partner Businesses">
          <NavLink to="/partners" exact className="link" activeClassName="active">See The Partner Businesses</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Benefits;
