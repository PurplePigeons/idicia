/*
 * AppReducer
 */

import { fromJS } from 'immutable';

import {
  CLOSE_CONTACT_MODAL,
  CLOSE_MOBILE_NAV,
  TOGGLE_CONTACT_MODAL,
  TOGGLE_MOBILE_NAV,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  contactModalActive: false,
  mobileNavActive: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CLOSE_CONTACT_MODAL:
      return state
        .set('contactModalActive', false);
    case CLOSE_MOBILE_NAV:
      return state
        .set('mobileNavActive', false);
    case TOGGLE_CONTACT_MODAL:
      return state
        .set('contactModalActive', !state.get('contactModalActive'));
    case TOGGLE_MOBILE_NAV:
      return state
        .set('mobileNavActive', !state.get('mobileNavActive'));
    default:
      return state;
  }
}

export default appReducer;
