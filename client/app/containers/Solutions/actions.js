/*
 * Static Page Actions
 */

import {
  GET_STATIC_PAGE,
  GET_PAGE_FAILED,
  SET_STATIC_PAGE_DATA,
} from './constants';

/**
 * Fetch data for a given static page
 *
 * @param  {page} page Page name to fetch
 *
 * @return {object}    An action object with a type of GET_STATIC_PAGE and payload with a page name
 */
function getStaticPage(page) {
  return {
    type: GET_STATIC_PAGE,
    page,
  };
}

/**
 * Fallback method for if the API failed to respond with a page
 *
 * @return {object}    An action object with a type of GET_PAGE_FAILED
 */
function getPageFailed() {
  return {
    type: GET_PAGE_FAILED,
  };
}

/**
 * Updates the static page dataset
 *
 * @param  {page} page Page object to be set
 *
 * @return {object}    An action object with a type of SET_STATIC_PAGE_DATA and a payload of the page data
 */
function setStaticPage(page) {
  return {
    type: SET_STATIC_PAGE_DATA,
    page,
  };
}

export {
  getStaticPage,
  getPageFailed,
  setStaticPage,
};
