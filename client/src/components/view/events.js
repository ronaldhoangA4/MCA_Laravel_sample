import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Events = () => {

  return (
    <div>
      <Helmet>
        <title>Motor Culture Australia - Events</title>
      </Helmet>
      <div class="box odd">
        <h1>Upcoming events</h1>
        <p>We live and breathe cars here at Motor Culture (and bikes.. or anything with a motor)! And we want to bring the car 
          scene to not only the enthusiasts, but everyone. That’s why everyone is welcomed at our events, it doesn’t matter if
           you drive a Hot Rod Classic, a JDM, or a Supercar, we want you to be a part of our community.</p>
        <p>We host our monthly car show affectionately known as ‘Cars & Culture’, we run Track Days every 2-3 months, and we host 
          social nights every Friday at our very own MCA Showroom at the heart of Brisbane!</p>
        <button name="Register for Events">
          <a href="https://www.eventbrite.com.au/o/motor-culture-australia-38407643613">Register for Events</a>
        </button>
        <button name="Become a Sponsor">
          <NavLink to="/partners" exact className="link" activeClassName="active">Become a Sponsor</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Events;