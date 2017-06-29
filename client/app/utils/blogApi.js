import { ajax } from 'rxjs/observable/dom/ajax';

// Best practice to use rxjs/ajax functions since they return an Observable which is more easily
// consumed by epics

/**
 * Fetch a page of posts determined by the given page number
 *
 * @param {int} page   A valid page number
 *
 * @return {object|null} Returns either the object containing the collection of posts, or throws an error
 */
export const fetchPageOfPosts = (page) =>
  ajax.getJSON(`/api/post/paginated/${page}`);

/**
 * Fetch the data for a single post object by its unique slug value
 *
 * @param {string} slug   A valid post slug
 *
 * @return {object|null} Returns either the object containing the post data, or throws an error
 */
export const fetchPostBySlug = (slug) =>
  ajax.getJSON(`/api/post/slug/${slug}`);
