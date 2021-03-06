import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from 'components/Spinner';
import TelecomTemplate from 'components/TelecomTemplate';

import * as actions from '../StaticPages/actions';
import {
  makeSelectLoading,
  makeSelectTelecom,
  makeSelectSuccess,
} from '../StaticPages/selectors';

class Telecom extends Component {
  componentWillMount() {
    const {
      getStaticPage,
      telecom,
    } = this.props;

    // Only fetch page data if not already loaded
    if (!telecom) getStaticPage('Telecom');
  }

  render() {
    const {
      loading,
      loadSuccess,
      telecom,
    } = this.props;

    return (
      <div>
        {!loading && !loadSuccess && <strong>Something went wrong. Please refresh or try again later</strong>}
        {loading ? <Spinner /> : telecom && <TelecomTemplate data={telecom} />}
      </div>
    );
  }
}

Telecom.propTypes = {
  getStaticPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadSuccess: PropTypes.bool.isRequired,
  telecom: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  loadSuccess: makeSelectSuccess(),
  telecom: makeSelectTelecom(),
});

export default connect(mapStateToProps, actions)(Telecom);
