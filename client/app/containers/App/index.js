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
// Sadly Scrollbars seems to be breaking useScroll middleware...
import { Scrollbars } from 'react-custom-scrollbars';

import * as actions from './actions';
import { makeSelectMobileNavActive } from './selectors';

// Styling

export const App = ({ children, mobileNavActive, router: { location: { pathname } }, toggleMobileNav }) => (
  // Need to use a nested Layout structure to keep fixed AppBar from going
  // over the NavDrawer, at least until 2.x beta of react-toolbox is in production
  <div>
    <Helmet
      titleTemplate="%s - KeystoneJS + React-Redux!"
      defaultTitle="KeystoneJS + React-Redux!"
      meta={[
        {
          name: 'description',
          content: 'A meshing of KeystoneJS CMS and MXSTBR\'s React.js Boilerplate',
        },
      ]}
    />

    <Scrollbars autoHeight autoHeightMax={'100vh'} autoHide>
      <NavBar mobileNavActive={mobileNavActive} pathname={pathname} toggleMobileNav={toggleMobileNav} />
      {React.Children.toArray(children)}
      <Footer />
    </Scrollbars>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
  mobileNavActive: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mobileNavActive: makeSelectMobileNavActive(),
});

export default connect(mapStateToProps, actions)(withProgressBar(App));
