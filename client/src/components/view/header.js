import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import MEDIA from '../../media/media';
import Model from '../model';
import { CartContext } from '../cartContext';

const Header = () => {
  // Display menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};

  // Display giveaway menu toggle
  const [isGiveawaysMenuOpen, setIsGiveawaysMenuOpen] = useState(false);
  const toggleGiveawaysMenu = () => {setIsGiveawaysMenuOpen(!isGiveawaysMenuOpen);};

  // Display contact menu toggle
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const toggleContactMenu = () => {setIsContactMenuOpen(!isContactMenuOpen)}

  // Display cart quantity
  const { cartItems } = useContext(CartContext);
  const cartQuantity = cartItems.length;

  // Display giveaway list
  const[giveaways, setGiveaways] = useState([]);
  Model.fetch('/getGiveaways').then(response => { setGiveaways(response); });

  // Close menu after every navigation
  const history = useHistory();
  useEffect(() => { 
    const closeMenu = history.listen(() => { setIsMenuOpen(isMenuOpen); }) 
    return () => { closeMenu(); };
  }, [history]);

  return (
    <header>
      <nav className="navbar">
      <Link to="/" exact>
        <img src={MEDIA.logo} alt="Motor Culture Australia logo" className="logo"/>
      </Link>
        <button className="cart-button ast-masthead-custom-menu-items">
          <NavLink to="/cart" exact className="link" activeClassName="active">Cart: {cartQuantity}</NavLink>
        </button>
        <button onClick={toggleMenu} className="menu-toggle">Menu</button>
        {isMenuOpen && (
          <ul className="menu-items">
            <li><NavLink to="/" exact className="link" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/events" className="link" activeClassName="active">Events</NavLink></li>
            <li><NavLink to="/benefits" className="link" activeClassName="active">Benefits</NavLink></li>
            <li id="menu-item-333032">
              <NavLink to="/current-giveaways" className="link" activeClassName="active">Current Giveaways</NavLink>
              <button>
                <img onClick={toggleGiveawaysMenu} src={MEDIA.arrowDown} alt="Toggle"/>
              </button>
            </li>
            {isGiveawaysMenuOpen && (
            <ul className="sub-menu-items">
                {giveaways.map((giveaway, index) => (
                  <li><NavLink to={{pathname:`/current-giveaways/${giveaway.name.toLowerCase()}`, state: {giveaway}}} className="link" activeClassName="active">{giveaway.name}</NavLink></li>
                ))}
                <li>Upcoming</li>
            </ul>)}
            <li><NavLink to="/winners" className="link" activeClassName="active">Winners</NavLink></li>
            <li><NavLink to="/shop" className="link" activeClassName="active">Shop</NavLink></li>
            <li><NavLink to="/faq" className="link" activeClassName="active">FAQ's</NavLink></li>
            <li id="menu-item-22">
              <NavLink to="/contact" className="link" activeClassName="active">Contact</NavLink>
              <button name=" Menu Toggle">
                <img onClick={toggleContactMenu} src={MEDIA.arrowDown} alt="Toggle"/>
              </button>
            </li>
            {isContactMenuOpen && (
            <ul className="sub-menu-items">
                <li><NavLink to="/contact" className="link" activeClassName="active">Contact</NavLink></li>
                <li><NavLink to="/about" className="link" activeClassName="active">About</NavLink></li>
            </ul>)}
            <li><NavLink to="/my-account" className="link" activeClassName="active">My Account</NavLink></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
