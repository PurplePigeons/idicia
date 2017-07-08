import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from 'components/Spinner';
import VerificationTemplate from 'components/VerificationTemplate';

import * as actions from './actions';
import {
  makeSelectLoading,
  makeSelectVerification,
  makeSelectSuccess,
} from './selectors';

class Verification extends Component {
  componentWillMount() {
    const {
      getStaticPage,
      verification,
    } = this.props;

    // Only fetch page data if not already loaded
    if (!verification) getStaticPage('Verification');
  }

  render() {
    const {
      loading,
      loadSuccess,
      verification,
    } = this.props;

    return (
      <div>
        {!loading && !loadSuccess && <strong>Something went wrong. Please refresh or try again later</strong>}
        {loading ? <Spinner /> : verification && <VerificationTemplate data={verification} />}
      </div>
    );
  }
}

Verification.propTypes = {
  getStaticPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadSuccess: PropTypes.bool.isRequired,
  verification: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  loadSuccess: makeSelectSuccess(),
  verification: makeSelectVerification(),
});

export default connect(mapStateToProps, actions)(Verification);
