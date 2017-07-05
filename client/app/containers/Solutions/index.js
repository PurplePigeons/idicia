import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from './actions';
import {
  makeSelectLoading,
  makeSelectSolutions,
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
      solutions,
    } = this.props;

    return (
      <section>
      </section>
    );
  }
}

Solutions.propTypes = {
  getStaticPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  solutions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  solutions: makeSelectSolutions(),
});

export default connect(mapStateToProps, actions)(Solutions);
