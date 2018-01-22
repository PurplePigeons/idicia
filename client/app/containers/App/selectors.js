/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectContactModalActive = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('contactModalActive')
);

const makeSelectMobileNavActive = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('mobileNavActive')
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectContactModalActive,
  makeSelectMobileNavActive,
  makeSelectLocationState,
};
