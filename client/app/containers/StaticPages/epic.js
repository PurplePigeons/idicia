import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { GET_STATIC_PAGE, GET_HOME_PAGE } from './constants';
import {
  getPageFailed,
  setHomePage,
  setStaticPage,
} from './actions';

const staticPagesEpic = (action$) =>
  action$.ofType(GET_STATIC_PAGE)
    .switchMap((action) =>
      ajax.getJSON(`/api/staticPages/${action.page}`)
        .map(({ page }) => setStaticPage(page.title.toLowerCase(), page))
        // An observable is expected, so we need to wrap the returned function (can also return in an array)
        .catch(() => Observable.of(getPageFailed()))
    );

const homePageEpic = (action$) =>
  action$.ofType(GET_HOME_PAGE)
    .switchMap(() =>
      Observable.forkJoin(
        ajax.getJSON('/api/staticPages/homePage'),
        ajax.getJSON('/api/sliders'),
        // Return an object with destructured homepage data and slider array merged in
        ({ page }, sliders) => ({
          ...page,
          sliders,
        })
      )
      .map((data) => setHomePage(data))
      .catch(() => Observable.of(getPageFailed()))
    );

export {
  homePageEpic,
  staticPagesEpic,
};
