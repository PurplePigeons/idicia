import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from 'components/Spinner';
import HealthcareTemplate from 'components/HealthcareTemplate';

import * as actions from '../StaticPages/actions';
import {
  makeSelectLoading,
  makeSelectHealthcare,
  makeSelectSuccess,
} from '../StaticPages/selectors';

class Healthcare extends Component {
  componentWillMount() {
    const {
      getStaticPage,
      healthcare,
    } = this.props;

    // Only fetch page data if not already loaded
    if (!healthcare) getStaticPage('Healthcare');
  }

  render() {
    const {
      loading,
      loadSuccess,
      healthcare,
    } = this.props;

    return (
      <div>
        {!loading && !loadSuccess && <strong>Something went wrong. Please refresh or try again later</strong>}
        {loading ? <Spinner /> : healthcare && <HealthcareTemplate data={healthcare} />}
      </div>
    );
  }
}

Healthcare.propTypes = {
  getStaticPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadSuccess: PropTypes.bool.isRequired,
  healthcare: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  loadSuccess: makeSelectSuccess(),
  healthcare: makeSelectHealthcare(),
});

export default connect(mapStateToProps, actions)(Healthcare);
