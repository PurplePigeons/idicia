import { Observable } from 'rxjs';
import {
  GET_PAGINATED_POSTS,
  GET_POST_BY_SLUG,
  GET_POSTS_FAILED,
} from './constants';
import {
  invalidPageRequest,
  noPagesFound,
  setPost,
  setPaginatedPosts,
} from './actions';

const getPageOfPostsEpic = (action$, store, { blogApi }) =>
  action$.ofType(GET_PAGINATED_POSTS)
    .switchMap((action) =>
      blogApi.fetchPageOfPosts(action.page)
        .map(({ posts, posts: { totalPages, currentPage } }) => { // Destructure posts from the response object
          if (totalPages === 0) {
            return noPagesFound();
          } else if (currentPage < 0 || currentPage > totalPages) {
            return invalidPageRequest(posts);
          }
          return setPaginatedPosts(posts);
        })
        .catch((error) => Observable.of({
          type: GET_POSTS_FAILED,
          payload: error,
          error: true,
        }))
    );

const getBlogPostBySlugEpic = (action$, store, { blogApi }) =>
  action$.ofType(GET_POST_BY_SLUG)
    .switchMap((action) =>
      blogApi.fetchPostBySlug(action.slug)
        .map((json) => setPost(json))
        .catch((error) => Observable.of({
          type: GET_POSTS_FAILED,
          payload: error,
          error: true,
        }))
    );

export {
  getPageOfPostsEpic,
  getBlogPostBySlugEpic,
};
