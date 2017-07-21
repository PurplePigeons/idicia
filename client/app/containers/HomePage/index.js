/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from 'components/Spinner';
import HomePageTemplate from 'components/HomePageTemplate';

import * as actions from '../StaticPages/actions';
import {
  makeSelectLoading,
  makeSelectHomePage,
  makeSelectSuccess,
} from '../StaticPages/selectors';

class HomePage extends Component {
  componentWillMount() {
    const {
      getHomePage,
      homePage,
    } = this.props;

    // Only fetch page data if not already loaded
    if (!homePage) getHomePage();
  }

  render() {
    const {
      loading,
      loadSuccess,
      homePage,
    } = this.props;

    return (
      <div>
        {!loading && !loadSuccess && <strong>Something went wrong. Please refresh or try again later</strong>}
        {loading ? <Spinner /> : homePage && <HomePageTemplate data={homePage} />}
      </div>
    );
  }
}

HomePage.propTypes = {
  getHomePage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadSuccess: PropTypes.bool.isRequired,
  homePage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  loadSuccess: makeSelectSuccess(),
  homePage: makeSelectHomePage(),
});

export default connect(mapStateToProps, actions)(HomePage);

