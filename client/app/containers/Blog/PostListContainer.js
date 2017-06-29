import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';

import BlogPreviewList from 'components/BlogComponents/BlogPreviewList';
import LoadingIndicator from 'components/LoadingIndicator';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';
import transitions from './transitions.scss';

import * as actions from './actions';

import {
  makeSelectCurrentPage,
  makeSelectPosts,
  makeSelectLoading,
} from './selectors';

export class PostListContainer extends Component {
  componentDidMount() {
    const {
      currentPage,
      getPageOfPosts,
      posts,
      routeParams,
    } = this.props;

    console.log('Mounting PostList');

    // Only fetch if there are no posts, or requested page not already cached
    // Similarly, don't reload if the focusedPost is already loaded
    if (posts === null || posts[currentPage] === undefined) {
      // On mount, fetch posts from the API to populate the redux store
      console.log(`Blog mounted, loading posts for page ${routeParams.pageId || currentPage || 1}`);
      getPageOfPosts(routeParams.pageId || currentPage || 1);
    }
  }

  render() {
    const {
      currentPage,
      isLoading,
      posts,
    } = this.props;

    return (
      <CSSTransitionGroup
        transitionName={transitions}
        transitionAppear
        transitionLeave={false}
        transitionAppearTimeout={250}
        transitionEnterTimeout={250}
      >
        {isLoading ? <LoadingIndicator key="loadingIndicator" /> : posts && <BlogPreviewList key={currentPage} posts={posts[currentPage]} />}
      </CSSTransitionGroup>
    );
  }
}

PostListContainer.propTypes = {
  currentPage: PropTypes.number.isRequired,
  getPageOfPosts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.object,
  routeParams: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentPage: makeSelectCurrentPage(),
  isLoading: makeSelectLoading(),
  loading: makeSelectLoading(),
  posts: makeSelectPosts(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, actions)(PostListContainer);
