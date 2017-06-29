import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';

import BlogPost from 'components/BlogComponents/BlogPost';
import LoadingIndicator from 'components/LoadingIndicator';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';
import transitions from './transitions.scss';

import * as actions from './actions';
import {
  makeSelectFocusedPost,
  makeSelectLoading,
} from './selectors';

export class PostContainer extends Component {
  componentDidMount() {
    const {
      routeParams,
      getPostBySlug,
    } = this.props;

    console.log('Mounting PostContainer');

    console.log(`Retrieve blog post: ${routeParams.postSlug}`);
    getPostBySlug(routeParams.postSlug);
  }

  render() {
    const {
      focusedPost,
      isLoading,
    } = this.props;

    return (
      isLoading ? <LoadingIndicator key="loadingIndicator" /> : focusedPost && <BlogPost postData={focusedPost} />
    );
  }
}

PostContainer.propTypes = {
  focusedPost: PropTypes.object,
  getPostBySlug: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  routeParams: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  focusedPost: makeSelectFocusedPost(),
  isLoading: makeSelectLoading(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, actions)(PostContainer);
