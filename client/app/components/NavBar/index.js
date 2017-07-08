import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

// Styles
import bulma from 'styles/bulma.scss';
import logo from './full_logo.png';

const NavBar = ({ mobileNavActive, toggleMobileNav }) => {
  const hoverableDropdownItem = `${bulma['navbar-item']} ${bulma['has-dropdown']} ${bulma['is-hoverable']}`;
  const dropdownPrimaryLink = `${bulma['navbar-link']} ${bulma['is-active']}`;

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

        <button className={navHamburger} onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={navMenu}>
        <div className={bulma['navbar-start']}>
          <Link to={'/'} className={bulma['navbar-item']}>Home</Link>

          <div className={hoverableDropdownItem}>
            <Link to={'/solutions'} className={dropdownPrimaryLink}>Solutions</Link>
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
            <Link to={'/resources'} className={dropdownPrimaryLink}>Resources</Link>
            <div className={bulma['navbar-dropdown']}>
              <Link to={'/learningcenter'} className={bulma['navbar-item']}>Learning Center</Link>
            </div>
          </div>

          <Link to={'/contactus'} className={bulma['navbar-item']}>Contact Us</Link>
        </div>

        <div className={bulma['navbar-end']}>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
