/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CLOSE_CONTACT_MODAL,
  CLOSE_MOBILE_NAV,
  TOGGLE_CONTACT_MODAL,
  TOGGLE_MOBILE_NAV,
} from './constants';

/**
 * Toggle state of the navigation drawer
 *
 * @return {object} An action object with a type of TOGGLE_MOBILE_NAV
 */
export function toggleMobileNav() {
  return {
    type: TOGGLE_MOBILE_NAV,
  };
}

/**
 * Toggle state of the contact form
 *
 */
export function toggleContactModal() {
  return {
    type: TOGGLE_CONTACT_MODAL,
  };
}

export function closeContactModal() {
  return {
    type: CLOSE_CONTACT_MODAL,
  };
}

/**
 * Directly close the navigation drawer
 *
 * @return {object} An action object with a type of CLOSE_MOBILE_NAV
 */
export function closeMobileNav() {
  return {
    type: CLOSE_MOBILE_NAV,
  };
}
