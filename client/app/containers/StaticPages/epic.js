import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { GET_STATIC_PAGE } from './constants';
import {
  getPageFailed,
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

export {
  staticPagesEpic,
};
