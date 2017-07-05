import { ajax } from 'rxjs/observable/dom/ajax';
import { GET_STATIC_PAGE } from './constants';
import {
  getPageFailed,
  setStaticPage,
} from './actions';

const solutionsPagesEpic = (action$) =>
  action$.ofType(GET_STATIC_PAGE)
    .switchMap((action) =>
      ajax.getJSON(`/api/staticPages/${action.page}`)
        .map(({ page }) => setStaticPage(page.title.toLowerCase(), page))
        .catch(() => getPageFailed())
    );

export {
  solutionsPagesEpic,
};
