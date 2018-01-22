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

// SharedComponents
import ContactUsModal from 'components/ContactUsModal';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import NavBar from 'components/NavBar';

import * as actions from './actions';
import {
  makeSelectContactModalActive,
  makeSelectMobileNavActive,
} from './selectors';

// Styling

export const App = ({ children, contactModalActive, mobileNavActive, toggleContactModal, toggleMobileNav }) => (
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
    <NavBar {...{ mobileNavActive, toggleContactModal, toggleMobileNav }} />
    { React.Children.toArray(children) }
    <Footer />
    { contactModalActive && <ContactUsModal close={toggleContactModal} /> }
  </div>
);

App.propTypes = {
  children: PropTypes.node,
  contactModalActive: PropTypes.bool.isRequired,
  mobileNavActive: PropTypes.bool.isRequired,
  toggleContactModal: PropTypes.func.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contactModalActive: makeSelectContactModalActive(),
  mobileNavActive: makeSelectMobileNavActive(),
});

export default connect(mapStateToProps, actions)(withProgressBar(App));
