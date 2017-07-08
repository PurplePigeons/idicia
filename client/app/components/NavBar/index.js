import React from 'react';
import { Link } from 'react-router';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const NavBar = () => (
  <nav>
    <Link label="Home" to="/">Home</Link>
    <Link label="Solutions" to="/solutions">Solutions</Link>
    <Link label="Verification" to="/verification">Verification</Link>
    <Link label="Enrichment" to="/enrichment">Enrichment</Link>
    <Link label="Comparison" to="/comparison">Comparison</Link>
    <Link label="Telecom" to="/telecom">Telecom</Link>
    <Link label="Healthcare" to="/healthcare">Healthcare</Link>
    <Link label="Compliance" to="/compliance">Compliance</Link>
    <Link label="Blog" to="/blog/page/1">Blog</Link>
  </nav>
);

export default NavBar;
