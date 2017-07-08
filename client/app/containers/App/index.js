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
// import { Scrollbars } from 'react-custom-scrollbars';

import { toggleDrawer } from './actions';
import { makeSelectDrawerActive } from './selectors';

// Styling

export const App = ({ children, drawerActive, onToggleDrawer }) => (
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
    <NavBar />
    {React.Children.toArray(children)}
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.node,
  drawerActive: PropTypes.bool,
  onToggleDrawer: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onToggleDrawer: () => dispatch(toggleDrawer()),
});

const mapStateToProps = createStructuredSelector({
  drawerActive: makeSelectDrawerActive(),
});

export default connect(mapStateToProps, mapDispatchToProps)(withProgressBar(App));
