import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/01LogoJC_Firma_NegroLleno.png'; // Adjust the path as needed
import './Navbar.css'; // Create this CSS file for styling

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo-container'>
        <Link to="/home">
        <img src={Logo} alt='Logo' className='navbar-logo' />
        </Link>
      </div>
      <div className='nav-links'>
        <Link to='/shop' className='nav-link'>Shop</Link>
        <Link to='/collabs' className='nav-link'>Collabs</Link>
        <Link to='/about' className='nav-link'>About</Link>
        <Link to='/contact' className='nav-link'>Contact</Link>
      </div>
      <div className='nav-cart'>
        <Link className='cart-button' to='/cart'>Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;
