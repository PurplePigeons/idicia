import { combineEpics } from 'redux-observable';
import {
  closeContactModalEpic,
  closeNavEpic,
  fetchPageEpic,
} from 'containers/App/epic';
import {
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
} from 'containers/Blog/epic';
import { homePageEpic, staticPagesEpic } from 'containers/StaticPages/epic';
import * as blogApi from 'utils/blogApi';

const rootEpic = (...args) => combineEpics(
  closeContactModalEpic,
  closeNavEpic,
  fetchPageEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
  homePageEpic,
  staticPagesEpic,
)(...args, { blogApi });

export default rootEpic;
