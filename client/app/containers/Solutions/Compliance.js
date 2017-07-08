import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from 'components/Spinner';
import ComplianceTemplate from 'components/ComplianceTemplate';

import * as actions from './actions';
import {
  makeSelectLoading,
  makeSelectCompliance,
  makeSelectSuccess,
} from './selectors';

class Compliance extends Component {
  componentWillMount() {
    const {
      getStaticPage,
      compliance,
    } = this.props;

    // Only fetch page data if not already loaded
    if (!compliance) getStaticPage('Compliance');
  }

  render() {
    const {
      loading,
      loadSuccess,
      compliance,
    } = this.props;

    return (
      <div>
        {!loading && !loadSuccess && <strong>Something went wrong. Please refresh or try again later</strong>}
        {loading ? <Spinner /> : compliance && <ComplianceTemplate data={compliance} />}
      </div>
    );
  }
}

Compliance.propTypes = {
  getStaticPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadSuccess: PropTypes.bool.isRequired,
  compliance: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  loadSuccess: makeSelectSuccess(),
  compliance: makeSelectCompliance(),
});

export default connect(mapStateToProps, actions)(Compliance);
