import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from 'components/Spinner';
import ComparisonTemplate from 'components/ComparisonTemplate';

import * as actions from './actions';
import {
  makeSelectLoading,
  makeSelectComparison,
  makeSelectSuccess,
} from './selectors';

class Comparison extends Component {
  componentWillMount() {
    const {
      getStaticPage,
      comparison,
    } = this.props;

    // Only fetch page data if not already loaded
    if (!comparison) getStaticPage('Comparison');
  }

  render() {
    const {
      loading,
      loadSuccess,
      comparison,
    } = this.props;

    return (
      <div>
        {!loading && !loadSuccess && <strong>Something went wrong. Please refresh or try again later</strong>}
        {loading ? <Spinner /> : comparison && <ComparisonTemplate data={comparison} />}
      </div>
    );
  }
}

Comparison.propTypes = {
  getStaticPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadSuccess: PropTypes.bool.isRequired,
  comparison: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  loadSuccess: makeSelectSuccess(),
  comparison: makeSelectComparison(),
});

export default connect(mapStateToProps, actions)(Comparison);
