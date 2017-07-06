import React from 'react';

// Components
import LinkButton from '../LinkedComponents/LinkButton';

// Styles
import styles from './styles.scss';

const NavBar = () => (
  <nav className={styles.bar}>
    <LinkButton label="Home" to="/" />
    <LinkButton label="Solutions" to="/solutions" />
    <LinkButton label="Telecom" to="/telecom" />
    <LinkButton label="Blog" to="/blog/page/1" />
  </nav>
);

export default NavBar;
