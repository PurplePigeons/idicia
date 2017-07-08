/*
 * Solutions selectors
 */

import { createSelector } from 'reselect';

const selectSolutions = (state) => state.get('solutions');

const makeSelectLoading = () => createSelector(
  selectSolutions,
  (solutionsState) => solutionsState.get('isLoading')
);

const makeSelectSuccess = () => createSelector(
  selectSolutions,
  (solutionsState) => solutionsState.get('loadSuccess')
);

const makeSelectSolutions = () => createSelector(
  selectSolutions,
  (solutionsState) => solutionsState.get('solutions')
);

const makeSelectVerification = () => createSelector(
  selectSolutions,
  (solutionsState) => solutionsState.get('verification')
);

const makeSelectEnrichment = () => createSelector(
  selectSolutions,
  (solutionsState) => solutionsState.get('enrichment')
);

const makeSelectComparison = () => createSelector(
  selectSolutions,
  (solutionsState) => solutionsState.get('comparison')
);

const makeSelectTelecom = () => createSelector(
  selectSolutions,
  (solutionsState) => solutionsState.get('telecom')
);

const makeSelectHealthcare = () => createSelector(
  selectSolutions,
  (solutionsState) => solutionsState.get('healthcare')
);

const makeSelectCompliance = () => createSelector(
  selectSolutions,
  (solutionsState) => solutionsState.get('compliance')
);

export {
  selectSolutions,
  makeSelectLoading,
  makeSelectSuccess,
  makeSelectSolutions,
  makeSelectVerification,
  makeSelectEnrichment,
  makeSelectComparison,
  makeSelectTelecom,
  makeSelectHealthcare,
  makeSelectCompliance,
};
