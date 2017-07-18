import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';
import logo from './full_logo.png';

const NavBar = ({ mobileNavActive, pathname, toggleMobileNav }) => {
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

  const dynamicHero = classNames({
    [bulma.hero]: true,
    [bulma['is-primary']]: true,
    [bulma['is-bold']]: true,
    [bulma['is-fullheight']]: pathname === '/',
    [bulma['is-small']]: pathname !== '/',
  });

  const navMenu = classNames({
    [bulma['navbar-menu']]: true,
    [bulma['is-active']]: mobileNavActive,
  });

  const navHamburger = classNames({
    [bulma['navbar-burger']]: true,
    [bulma.burger]: true,
    [bulma['is-active']]: mobileNavActive,
  });

  const title = pathname === '/'
    ? 'Welcome to Idicia'
    : pathname
      .split('/')[1]
      .split('-')
      .map((word) => word[0].toUpperCase() + word.substr(1))
      .join(' ');

  return (
    <section className={dynamicHero}>
      <div className={bulma['hero-head']}>
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
            <div className={bulma['navbar-start']}>
              <Link to={'/'} className={bulma['navbar-item']}>Home</Link>

              <div className={hoverableDropdownItem}>
                <Link to={'/solutions'} className={bulma['navbar-link']}>Solutions</Link>
                <div className={`${bulma['navbar-dropdown']} ${bulma['is-boxed']}`}>
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
                <div className={`${bulma['navbar-dropdown']} ${bulma['is-boxed']}`}>
                  <Link to={'/telefied'} className={bulma['navbar-item']}>Telefied</Link>
                  <Link to={'/contact-data-enrichment'} className={bulma['navbar-item']}>Contact Data Enrichment</Link>
                  <Link to={'/wireless-flagging'} className={bulma['navbar-item']}>Wireless Flagging</Link>
                  <Link to={'/caller-id'} className={bulma['navbar-item']}>Caller ID</Link>
                  <Link to={'/telecom-hosting'} className={bulma['navbar-item']}>Telecom Hosting</Link>
                </div>
              </div>

              <div className={hoverableDropdownItem}>
                <Link to={'/resources'} className={bulma['navbar-link']}>Resources</Link>
                <div className={`${bulma['navbar-dropdown']} ${bulma['is-boxed']}`}>
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
      </div>
      <div className={bulma['hero-body']}>
        <div className={bulma.container}>
          <h1 className={bulma.title}>
            <CSSTransitionGroup
              transitionAppear
              transitionLeave={false}
              transitionAppearTimeout={1000}
              transitionEnterTimeout={1000}
              transitionName={{ enter: 'animated', enterActive: 'fadeInDown', appear: 'animated', appearActive: 'fadeInDown' }}
            >
              <div className={styles.title} key={title}>{title}</div>
            </CSSTransitionGroup>
          </h1>
        </div>
      </div>
    </section>
  );
};

NavBar.propTypes = {
  mobileNavActive: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
};

export default NavBar;
