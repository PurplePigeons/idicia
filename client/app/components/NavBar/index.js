import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';

// Styles
import bulma from 'styles/bulma.scss';
import logo from './full_logo.png';

const NavBar = ({ mobileNavActive, toggleMobileNav }) => {
  // Pattern for refs in functional components...
  let navButton;

  // In addition to toggling the nav menu, we also want the button to lose focus after being used
  // since the outline is an eyesore, and simply hiding the focus outline with css is bad for usability
  const handleClick = () => {
    toggleMobileNav();
    navButton.blur();
  };

  const hoverableDropdownItem = classNames(
    bulma['navbar-item'],
    bulma['has-dropdown'],
    bulma['is-hoverable'],
  );

  const navMenu = classNames({
    [bulma['navbar-menu']]: true,
    [bulma['is-active']]: mobileNavActive,
  });

  const navHamburger = classNames({
    [bulma['navbar-burger']]: true,
    [bulma.burger]: true,
    [bulma['is-active']]: mobileNavActive,
  });

  return (
    <nav className={bulma.navbar}>
      <div className={bulma['navbar-brand']}>
        <Link to={'/'} className={bulma['navbar-item']}>
          <img src={logo} alt="Idicia" width="112" height="28" />
        </Link>

        <button
          className={navHamburger}
          onClick={handleClick}
          ref={(button) => { navButton = button; }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={navMenu}>
        <div className={`${bulma.columns} ${bulma['navbar-start']} ${bulma['is-multiline']} ${bulma['is-centered']}`}>
          <Link to={'/'} className={bulma['navbar-item']}>Home</Link>

          <div className={hoverableDropdownItem}>
            <Link to={'/solutions'} className={bulma['navbar-link']}>Solutions</Link>
            <div className={bulma['navbar-dropdown']}>
              <Link to={'/verification'} className={bulma['navbar-item']}>Verification</Link>
              <Link to={'/enrichment'} className={bulma['navbar-item']}>Enrichment</Link>
              <Link to={'/comparison'} className={bulma['navbar-item']}>Comparison</Link>
              <Link to={'/telecom'} className={bulma['navbar-item']}>Telecom</Link>
              <Link to={'/healthcare'} className={bulma['navbar-item']}>Healthcare</Link>
              <Link to={'/compliance'} className={bulma['navbar-item']}>Compliance</Link>
            </div>
          </div>

          <div className={hoverableDropdownItem}>
            <Link to={'/services'} className={bulma['navbar-link']}>Services</Link>
            <div className={bulma['navbar-dropdown']}>
              <Link to={'/telefied'} className={bulma['navbar-item']}>Telefied</Link>
              <Link to={'/contact-data-enrichment'} className={bulma['navbar-item']}>Contact Data Enrichment</Link>
              <Link to={'/wireless-flagging'} className={bulma['navbar-item']}>Wireless Flagging</Link>
              <Link to={'/caller-id'} className={bulma['navbar-item']}>Caller ID</Link>
              <Link to={'/telecom-hosting'} className={bulma['navbar-item']}>Telecom Hosting</Link>
            </div>
          </div>

          <div className={hoverableDropdownItem}>
            <Link to={'/resources'} className={bulma['navbar-link']}>Resources</Link>
            <div className={bulma['navbar-dropdown']}>
              <Link to={'/developer'} className={bulma['navbar-item']}>Developer</Link>
              <Link to={'/blog'} className={bulma['navbar-item']}>Blog</Link>
              <Link to={'/contact-us'} className={bulma['navbar-item']}>Contact Us</Link>
              <Link to={'/learning-center'} className={bulma['navbar-item']}>Learning Center</Link>
            </div>
          </div>

          <Link to={'/about-us'} className={bulma['navbar-item']}>About Us</Link>
        </div>

        <div className={bulma['navbar-end']}>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  mobileNavActive: PropTypes.bool.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
};

export default NavBar;
