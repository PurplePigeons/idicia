/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// Components

const HomePage = () => (
  <article>
    <Helmet
      title="Home"
      meta={[
        {
          name: 'description',
          content: 'IDICIA: Real-Time Identity Verification & Fraud Prevention',
        },
      ]}
    />
  </article>
);

HomePage.propTypes = {
  routeParams: PropTypes.object.isRequired,
};

export default HomePage;
