/*
 * AppReducer
 */

import { fromJS } from 'immutable';

import {
  CLOSE_MOBILE_NAV,
  TOGGLE_MOBILE_NAV,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  mobileNavActive: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CLOSE_MOBILE_NAV:
      return state
        .set('mobileNavActive', false);
    case TOGGLE_MOBILE_NAV:
      return state
        .set('mobileNavActive', !state.get('mobileNavActive'));
    default:
      return state;
  }
}

export default appReducer;
