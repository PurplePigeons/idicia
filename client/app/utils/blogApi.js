import { ajax } from 'rxjs/observable/dom/ajax';

// Best practice to use rxjs/ajax functions since they return an Observable which is more easily
// consumed by epics

export const fetchPageOfPosts = (page) =>
  ajax.getJSON(`/api/post/paginated/${page}`);

export const fetchPostBySlug = (slug) =>
  ajax.getJSON(`/api/post/slug/${slug}`);
