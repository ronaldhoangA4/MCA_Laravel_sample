//import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {React} from 'react';

const Footer = () => {
  return (
    <footer>
        <span>Copyright © 2023 Motor Culture Australia | Powered by Motor Culture Australia</span>
            <NavLink to="/terms-and-conditions" exact className="link hide" activeClassName="active hide">Terms and Conditions</NavLink>
            <NavLink to="/terms-and-conditions" exact className="link" activeClassName="active">Terms and Conditions</NavLink>
            <NavLink to="/privacy-policy" exact className="link" activeClassName="active">Privacy Policy</NavLink>
            <NavLink to="/refund-policy" exact className="link" activeClassName="active">Refund Policy</NavLink>
            <NavLink to="/terms-of-service" exact className="link" activeClassName="active">Terms of Services</NavLink>
            <NavLink to="/contact" exact className="link" activeClassName="active">Contact</NavLink>
    </footer>
  );
};

export default Footer;
