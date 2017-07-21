/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Package Imports
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';

// Components
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import NavBar from 'components/NavBar';

import * as actions from './actions';
import { makeSelectMobileNavActive } from './selectors';

// Styling

export const App = ({ children, mobileNavActive, toggleMobileNav }) => (
  <div>
    <Helmet
      titleTemplate="%s - IDICIA: Real-Time Identity Verification & Fraud Prevention"
      defaultTitle="IDICIA: Real-Time Identity Verification & Fraud Prevention"
      meta={[
        {
          name: 'description',
          content: 'IDICIA: Real-Time Identity Verification & Fraud Prevention',
        },
      ]}
    />

    <NavBar mobileNavActive={mobileNavActive} toggleMobileNav={toggleMobileNav} />
    {React.Children.toArray(children)}
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.node,
  mobileNavActive: PropTypes.bool.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mobileNavActive: makeSelectMobileNavActive(),
});

export default connect(mapStateToProps, actions)(withProgressBar(App));
