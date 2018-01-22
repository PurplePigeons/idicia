import { Observable } from 'rxjs';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  closeContactModal,
  closeMobileNav,
} from './actions';
import {
  changeToPage,
  getPageOfPosts,
} from '../Blog/actions';

// Automatically close the nav drawer when the user has selected a new route
const closeContactModalEpic = (action$, store) =>
  action$.ofType(LOCATION_CHANGE)
    .switchMap(() => {
      const contactModalActive = store.getState().getIn(['global', 'contactModalActive']);
      if (contactModalActive) {
        return Observable.of(closeContactModal());
      }
      return Observable.of();
    });

// Automatically close the nav drawer when the user has selected a new route
const closeNavEpic = (action$, store) =>
  action$.ofType(LOCATION_CHANGE)
    .switchMap(() => {
      const mobileNavActive = store.getState().getIn(['global', 'mobileNavActive']);
      if (mobileNavActive) {
        return Observable.of(closeMobileNav());
      }
      return Observable.of();
    });

// Intelligently use state to determine if we need to fetch the requested page,
// or can simply use cached content. Also provides support for if we change pages
// using react-router navigation instead of actions.
const fetchPageEpic = (action$, store) =>
  action$.ofType(LOCATION_CHANGE)
    .switchMap((action) => {
      // If location change is to blog pages, parse out the page and fetch that data
      if (/page\/\d+/.test(action.payload.pathname)) {
        // Adding parseInt to stop accidentally sending a string into store
        const page = parseInt(/page\/(\d+)/g.exec(action.payload.pathname)[1], 10);
        const cachedPosts = store.getState().getIn(['blog', 'posts']);
        // Change page instead of fetching posts if they're already cached
        // Adding a null/undef check since cachedPosts will be null if they navigated
        // to an invalid page on initial navigation and we can't access [page] of null...
        // This also occurs if the blog reducer and state haven't been mounted yet thanks to async
        // reducer loading
        if (cachedPosts && cachedPosts[page]) {
          return Observable.of(changeToPage(page));
        }
        // If the posts aren't already cached, fetch from back-end
        return Observable.of(getPageOfPosts(page));
      }
      return Observable.of();
    });

export {
  closeContactModalEpic,
  closeNavEpic,
  fetchPageEpic,
};
