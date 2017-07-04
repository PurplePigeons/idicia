import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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
  loading: ,
  solutions: ,
});

export default connect(mapStateToProps)(Solutions);
