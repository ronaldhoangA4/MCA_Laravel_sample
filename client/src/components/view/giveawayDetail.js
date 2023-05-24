import React, { useState } from 'react';
import { Link, NavLink, useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const GiveawayDetail = () => {
  const location = useLocation();
  // Define entry option state
  let item = "Bronze";
  const [option, setOption] = useState('LOCK IN 1 ENTRY FOR $25');
  const chooseOption = (newOption, choose) => { 
    setOption(newOption)
    item = choose; 
  };

  // Guard if giveaway's data is not passed in
  if (!location.state || !location.state.giveaway) { return(<div class="box"><h1>Loading...</h1></div>) } 
  
  // Pull giveaway's data
  const giveaway = location.state.giveaway;
  return (
    <div>
        <Helmet>
          <title>Win a {giveaway.name}</title>
        </Helmet>
        <div class="box">
          <h1>Enter the draw to win a {giveaway.name}</h1>
          <p>Template content</p>
          <div>
            <button id='entries-bronze-2' onClick={() => chooseOption('LOCK IN 1 ENTRY FOR $25', 'Bronze')}>1 ENTRY FOR $25</button>
            <button id='entries-silver-2' onClick={() => chooseOption('LOCK IN 10 ENTRIES FOR $100', 'Silver')}>10 ENTRIES FOR $100</button>
            <button id='entries-gold-2' onClick={() => chooseOption('LOCK IN 30 ENTRIES FOR $200', 'Gold')}>30 ENTRIES FOR $200</button>
            <button id='entries-diamond-2' onClick={() => chooseOption('LOCK IN 100 ENTRIES FOR $400', 'Diamond')}>100 ENTRIES FOR $400</button>
          </div>
          <button>
            <NavLink to={{pathname:`/checkout/${giveaway.name}/${item}`}}>{option}</NavLink>
          </button>
        </div>
    </div>
  ); 
};

export default GiveawayDetail;
