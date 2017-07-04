import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import BlogPost from 'components/BlogComponents/BlogPost';
import Spinner from 'components/Spinner';

// Styling
import transitions from './transitions.scss';

// Action Creators and selectors
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
      <CSSTransitionGroup
        transitionName={transitions}
        transitionAppear
        transitionLeave={false}
        transitionAppearTimeout={250}
        transitionEnterTimeout={250}
      >
        {isLoading ? <Spinner key="spinner" /> : focusedPost && <BlogPost key={focusedPost.post.slug} postData={focusedPost} />}
      </CSSTransitionGroup>
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
