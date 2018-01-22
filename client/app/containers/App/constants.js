/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CLOSE_CONTACT_MODAL = 'keystone/App/CLOSE_CONTACT_MODAL';
export const CLOSE_MOBILE_NAV = 'keystone/App/CLOSE_MOBILE_NAV';
export const TOGGLE_CONTACT_MODAL = 'keystone/App/TOGGLE_CONTACT_FORM';
export const TOGGLE_MOBILE_NAV = 'keystone/App/TOGGLE_MOBILE_NAV';
export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const DEFAULT_LOCALE = 'en';
