import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import cn from 'classnames';

// Styles
import logo from '/Users/leseanjohnson/Documents/idicia/assets/images/svgs/IDICIA-sample.svg';

const NavBar = ({ mobileNavActive, toggleContactModal, toggleMobileNav }) => {
  // Pattern for refs in functional components...
  let navButton;

  // In addition to toggling the nav menu, we also want the button to lose focus after being used
  // since the outline is an eyesore, and simply hiding the focus outline with css is bad for usability
  const handleClick = () => {
    toggleMobileNav();
    navButton.blur();
  };

  const hoverableDropdownItem = cn(
    'navbar-item',
    'has-dropdown',
    'is-hoverable',
  );

  const navMenu = cn(
    'navbar-menu',
    {
      'is-active': mobileNavActive,
    }
  );

  const navHamburger = cn(
    'navbar-burger',
    'burger',
    {
      'is-active': mobileNavActive,
    }
  );

  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link to={'/'} className="navbar-item">
          <img src={logo} alt="Idicia"/>
        </Link>

        <button
          className={navHamburger}
          onClick={handleClick}
          ref={(button) => { navButton = button; }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={navMenu}>
        <div className="navbar-start">
          <Link to={'/'} className="navbar-item">Home</Link>

          <div className={hoverableDropdownItem}>
            <Link to={'/solutions'} className="navbar-link">Solutions</Link>
            <div className="navbar-dropdown">
              <Link to={'/verification'} className="navbar-item">Verification</Link>
              <Link to={'/enrichment'} className="navbar-item">Enrichment</Link>
              <Link to={'/comparison'} className="navbar-item">Comparison</Link>
              <Link to={'/telecom'} className="navbar-item">Telecom</Link>
              <Link to={'/healthcare'} className="navbar-item">Healthcare</Link>
              <Link to={'/compliance'} className="navbar-item">Compliance</Link>
            </div>
          </div>

          <div className={hoverableDropdownItem}>
            <Link to={'/services'} className="navbar-link">Services</Link>
            <div className="navbar-dropdown">
              <Link to={'/telified'} className="navbar-item">Telefied</Link>
              <Link to={'/contact-data-enrichment'} className="navbar-item">Contact Data Enrichment</Link>
              <Link to={'/wireless-flagging'} className="navbar-item">Wireless Flagging</Link>
              <Link to={'/caller-id'} className="navbar-item">Caller ID</Link>
              <Link to={'/telecom-hosting'} className="navbar-item">Telecom Hosting</Link>
            </div>
          </div>

          <div className={hoverableDropdownItem}>
            <Link to={'/resources'} className="navbar-link">Resources</Link>
            <div className="navbar-dropdown">
              <Link to={'/developer'} className="navbar-item">Developer</Link>
              <Link to={'/blog'} className="navbar-item">Blog</Link>
              <Link to={'/contact-us'} className="navbar-item">Contact Us</Link>
              <Link to={'/learning-center'} className="navbar-item">Learning Center</Link>
            </div>
          </div>

          <Link to={'/about-us'} className="navbar-item">About Us</Link>
        </div>

        <div className="navbar-end">
        </div>
      </div>
      <div className="navbar-item animated fadeIn">
          <button className="button is-link" onClick={toggleContactModal}>
            Contact Us
          </button>
        </div>
    </nav>
  );
};

NavBar.propTypes = {
  mobileNavActive: PropTypes.bool.isRequired,
  toggleContactModal: PropTypes.func.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
};

export default NavBar;
