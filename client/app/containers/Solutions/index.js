import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from 'components/Spinner';

import * as actions from './actions';
import {
  makeSelectLoading,
  makeSelectSolutions,
  makeSelectSuccess,
} from './selectors';

class Solutions extends Component {
  componentWillMount() {
    const { getStaticPage } = this.props;
    // Action dispatch to fetch Solutions page data
    getStaticPage('Solutions');
  }

  render() {
    const {
      loading,
      loadSuccess,
      solutions,
    } = this.props;

    return (
      <section>
        {loading ? <Spinner /> : solutions && solutions.title}
        {!loading && !loadSuccess && <strong>Something went wrong. Please refresh or try again later</strong>}
      </section>
    );
  }
}

Solutions.propTypes = {
  getStaticPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadSuccess: PropTypes.bool.isRequired,
  solutions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  loadSuccess: makeSelectSuccess(),
  solutions: makeSelectSolutions(),
});

export default connect(mapStateToProps, actions)(Solutions);
