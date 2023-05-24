import React, { useState ,useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Model from '../model';

const CurrentGiveaways = () => {
  const[giveaways, setGiveaways] = useState([]);
  Model.fetch('/getGiveaways').then(response => { setGiveaways(response); });

  return (
    <div>
      <Helmet>
        <title>Motor Culture Australia - Current Giveaways</title>
      </Helmet>
      <div class="box title">
        <h1>Current Giveaways</h1>
      </div>
      <div class="box">
        <h1>Still undecided? Enter all of them for less than $1 a day!</h1>
        <button name="Become a vip member now">
          <NavLink to="/new-vip" exact className="link" activeClassName="active">Become a vip member now</NavLink>
        </button>
      </div>
      {giveaways.map((giveaway, index) => (
          <div class="box odd">
            <h2>{giveaway.name}</h2>
            <button>
              <NavLink to={{pathname:`/current-giveaways/${giveaway.name}`, state: {giveaway}}} className="link" activeClassName="active">See More & Enter The Draw</NavLink>
            </button>
          </div>
      ))}
    </div>
  );
};

export default CurrentGiveaways;
