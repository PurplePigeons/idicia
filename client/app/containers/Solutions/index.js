import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from 'components/Spinner';
import SolutionsTemplate from 'components/SolutionsTemplateOld';

import * as actions from '../StaticPages/actions';
import {
  makeSelectLoading,
  makeSelectSolutions,
  makeSelectSuccess,
} from '../StaticPages/selectors';

class Solutions extends Component {
  componentWillMount() {
    const {
      getStaticPage,
      solutions,
    } = this.props;

    // Only fetch page data if not already loaded
    if (!solutions) getStaticPage('Solutions');
  }

  render() {
    const {
      loading,
      loadSuccess,
      solutions,
    } = this.props;

    return (
      <div>
        {!loading && !loadSuccess && <strong>Something went wrong. Please refresh or try again later</strong>}
        {loading ? <Spinner /> : solutions && <SolutionsTemplate data={solutions} />}
      </div>
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
