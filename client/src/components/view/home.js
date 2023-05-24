import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MEDIA from '../../media/media';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Motor Culture Australia</title>
      </Helmet>
      <div class="box">
        <h1>AUSTRALIA'S MOST DIVERSE &</h1>
        <h1>REWARDING AUTO COMMUNITY</h1>
        <h2>VIP ACCUMULATING REWARDS MEMBERSHIP</h2>
        <ul>
          <li>Get Accumulating Entries Monthly into EVERY draw</li>
          <li>VIP Exclusive Membership Savings</li>
          <li>VIP Only Rewards Program</li>
          <li>Exclusive Event Access & Vouchers</li>
          <li>Member Only Partner Offers</li>
          <li>& Much More</li>
        </ul>
        <button name="Sign Up  - VIP Member">
          <NavLink to="/new-vip" exact className="link" activeClassName="active">Sign Up - VIP Member</NavLink>
        </button>
      </div>
      <div class="box odd">
        <h1>JOIN THE MOTOR CULTURE AUSTRALIA</h1>
        <h1>BUSINESS PARTNER NETWORK</h1>
        <h2>Your success is our success. Experience multi-channel exposure like never before.</h2>
        <button name="Join Our Partner Network">
          <NavLink to="/partners" exact className="link" activeClassName="active">Join Our Partner Network</NavLink>
        </button>
      </div>
      <div class="box">
        <h1>Get social with us</h1>
        <a href="https://www.facebook.com/motorcultureaustralia" target="_blank" rel="noopener noreferrer" name="Facebook">
          <img src={MEDIA.facebook} alt="MCA Facebook page" className='channel'/>
        </a>
        <a href="https://www.youtube.com/channel/UCf7S7jAmb7_sT2ZCsO6Ajig" target="_blank" rel="noopener noreferrer" name="Youtube">
          <img src={MEDIA.youtube} alt="MCA Youtube channel" className='channel'/>
        </a>
        <a href="https://www.instagram.com/motor_culture_australia/?hl=en" target="_blank" rel="noopener noreferrer" name="Instagram">
          <img src={MEDIA.instagram} alt="MCA Instagram page" className='channel'/>
        </a>
        <a href="https://www.tiktok.com/@motorcultureaustralia" target="_blank" rel="noopener noreferrer" name="Tiktok">
          <img src={MEDIA.tiktok} alt="MCA Tiktok channel" className='channel'/>
        </a>
      </div>
    </div>
  );
};

export default Home;
