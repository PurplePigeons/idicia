import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';

import LoadingIndicator from 'components/LoadingIndicator';
import Paginator from 'components/Paginator';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';
import transitions from './transitions.scss';

import {
  getPostBySlug,
  getPageOfPosts,
} from './actions';
import {
  makeSelectCurrentPage,
  makeSelectFocusedPost,
  makeSelectPosts,
  makeSelectLoading,
  makeSelectLoadSuccess,
  makeSelectMaxPages,
} from './selectors';

const Blog = ({
      children,
      currentPage,
      loading,
      loadSuccess,
      maxPages,
      params,
      posts,
    }) => {
  const errStyle = classNames(
    bulma.content,
    bulma['has-text-centered'],
    styles.errMessage
  );

  return (
    <section id="content" className={bulma.container}>
      {!params.postSlug && loadSuccess
        ? <Paginator
          currPage={currentPage}
          numPages={maxPages}
        />
        : null
      }
      {children}
      {!loading && !loadSuccess &&
        <div className={errStyle}>
          <h2>Invalid page requested or connection failed, <Link to={'blog/page/1'}>click here</Link> to start at the first page or use the navigation options below!</h2>
        </div>
      }
      {!params.postSlug
        ? <Paginator
          currPage={currentPage}
          numPages={maxPages}
        />
        : null
      }
    </section>
  );
};

Blog.propTypes = {
  currentPage: PropTypes.number,
  focusedPost: PropTypes.object,
  loading: PropTypes.bool,
  loadSuccess: PropTypes.bool,
  maxPages: PropTypes.number,
  onGetPost: PropTypes.func,
  onGetPosts: PropTypes.func,
  posts: PropTypes.object,
  routeParams: PropTypes.object,
};

// Need to export so we can test and have full test coverage in Jest
export const mapDispatchToProps = (dispatch) => ({
  onGetPost: (slug) => dispatch(getPostBySlug(slug)),
  onGetPosts: (page) => dispatch(getPageOfPosts(page)),
});

const mapStateToProps = createStructuredSelector({
  currentPage: makeSelectCurrentPage(),
  focusedPost: makeSelectFocusedPost(),
  maxPages: makeSelectMaxPages(),
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  loadSuccess: makeSelectLoadSuccess(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
