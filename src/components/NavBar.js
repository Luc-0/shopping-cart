import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <nav>
      <h1>Shopping Cart</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart" className="navbar-link">
            <i className="fas fa-shopping-cart"></i>
            <p>{props.itemCount}</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
