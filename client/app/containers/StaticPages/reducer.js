/*
 * Solutions Reducer
 */
import { fromJS } from 'immutable';

import {
  GET_STATIC_PAGE,
  GET_PAGE_FAILED,
  SET_HOME_PAGE,
  SET_STATIC_PAGE_DATA,
} from './constants';

// The initial state of our static pages
const initialState = fromJS({
  isLoading: true,
  loadSuccess: false,
  home: null,
  solutions: null,
  verification: null,
  enrichment: null,
  comparison: null,
  telecom: null,
  healthcare: null,
  compliance: null,
});

function staticPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STATIC_PAGE:
      console.log(`Fetching page ${action.page}`);
      return state
        .set('isLoading', true)
        .set('loadSuccess', false);
    case GET_PAGE_FAILED:
      console.log('Failed to get page data');
      return state
        .set('isLoading', false)
        .set('loadSuccess', false);
    case SET_HOME_PAGE:
      console.log('Updating home page data (page + sliders)');
      return state
        .set('home', action.data)
        .set('isLoading', false)
        .set('loadSuccess', true);
    case SET_STATIC_PAGE_DATA:
      console.log(`Updating data for page: ${action.pageName}`);
      return state
        .set(action.pageName, action.data)
        .set('isLoading', false)
        .set('loadSuccess', true);
    default:
      return state;
  }
}

export default staticPageReducer;
