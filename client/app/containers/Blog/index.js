import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';

// Components
import Paginator from 'components/Paginator';

// Styling
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

// Action Creators and selectors
import {
  makeSelectCurrentPage,
  makeSelectFocusedPost,
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
    }) => {
  const errStyle = classNames(
    bulma.content,
    bulma['has-text-centered'],
    styles.errMessage
  );

  return (
    <section className={bulma.container}>
      {!params.postSlug && loadSuccess && <Paginator currPage={currentPage} numPages={maxPages} />}
      {children}
      {!loading && !loadSuccess && maxPages > 0 &&
        <div className={errStyle}>
          <h2>Invalid page requested or connection failed, <Link to={'blog/page/1'}>click here</Link> to start at the first page or use the navigation options below!</h2>
        </div>
      }
      {!loading && !loadSuccess && !maxPages &&
        <div className={errStyle}>
          <h2>This blog is currently empty, please check again later for more updates.</h2>
        </div>
      }
      {(!params.postSlug || !loadSuccess) && !loading && maxPages > 0 && <Paginator currPage={currentPage} numPages={maxPages} />}
    </section>
  );
};

Blog.propTypes = {
  children: PropTypes.node,
  currentPage: PropTypes.number,
  loading: PropTypes.bool,
  loadSuccess: PropTypes.bool,
  maxPages: PropTypes.number,
  params: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentPage: makeSelectCurrentPage(),
  focusedPost: makeSelectFocusedPost(),
  maxPages: makeSelectMaxPages(),
  loading: makeSelectLoading(),
  loadSuccess: makeSelectLoadSuccess(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps)(Blog);
