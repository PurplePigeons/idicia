/*
 * Static Page Actions
 */

import {
  GET_HOME_PAGE,
  GET_PAGE_FAILED,
  SET_HOME_PAGE,
  GET_STATIC_PAGE,
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
 * Fetch data for the home page
 *
 * @return {object}    An action object with a type of GET_HOME_PAGE
 */
function getHomePage() {
  return {
    type: GET_HOME_PAGE,
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
 * Updates the homepage dataset
 *
 * @param  {object} data Data object to be set
 *
 * @return {object}    An action object with a type of SET_HOME_PAGE and a payload of the full page data
 */
function setHomePage(data) {
  return {
    type: SET_HOME_PAGE,
    data,
  };
}

/**
 * Updates the static page dataset
 *
 * @param  {string} pageName Page object to be set
 *
 * @return {object}    An action object with a type of SET_STATIC_PAGE_DATA and a payload of the page data
 */
function setStaticPage(pageName, data) {
  return {
    type: SET_STATIC_PAGE_DATA,
    pageName,
    data,
  };
}

export {
  getHomePage,
  getStaticPage,
  getPageFailed,
  setHomePage,
  setStaticPage,
};
