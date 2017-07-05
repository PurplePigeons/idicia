import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectLoading,
  makeSelectSolutions,
} from './selectors';

class Solutions extends Component {
  componentWillMount() {
    // Action dispatch to fetch Solutions page data
  }

  render() {
    return (
      <section>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  solutions: makeSelectSolutions(),
});

export default connect(mapStateToProps)(Solutions);
