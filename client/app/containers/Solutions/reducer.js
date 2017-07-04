/*
 * Solutions Reducer
 */
import { fromJS } from 'immutable';

import {
  GET_STATIC_PAGE,
  GET_PAGE_FAILED,
  SET_STATIC_PAGE_DATA,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  isLoading: false,
  loadSuccess: false,
  solutions: null,
  verification: null,
  enrichment: null,
  comparison: null,
  telecom: null,
  healthcare: null,
  compliance: null,
});

function solutionsReducer(state = initialState, action) {
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

export default solutionsReducer;
