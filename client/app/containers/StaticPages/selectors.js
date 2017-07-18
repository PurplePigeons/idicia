/*
 * Static Page selectors
 */

import { createSelector } from 'reselect';

const selectStaticPages = (state) => state.get('staticPages');

const makeSelectLoading = () => createSelector(
  selectStaticPages,
  (staticPages) => staticPages.get('isLoading')
);

const makeSelectSuccess = () => createSelector(
  selectStaticPages,
  (staticPages) => staticPages.get('loadSuccess')
);

const makeSelectHomePage = () => createSelector(
  selectStaticPages,
  (staticPages) => staticPages.get('home')
);

const makeSelectSolutions = () => createSelector(
  selectStaticPages,
  (staticPages) => staticPages.get('solutions')
);

const makeSelectVerification = () => createSelector(
  selectStaticPages,
  (staticPages) => staticPages.get('verification')
);

const makeSelectEnrichment = () => createSelector(
  selectStaticPages,
  (staticPages) => staticPages.get('enrichment')
);

const makeSelectComparison = () => createSelector(
  selectStaticPages,
  (staticPages) => staticPages.get('comparison')
);

const makeSelectTelecom = () => createSelector(
  selectStaticPages,
  (staticPages) => staticPages.get('telecom')
);

const makeSelectHealthcare = () => createSelector(
  selectStaticPages,
  (staticPages) => staticPages.get('healthcare')
);

const makeSelectCompliance = () => createSelector(
  selectStaticPages,
  (staticPages) => staticPages.get('compliance')
);

export {
  selectStaticPages,
  makeSelectLoading,
  makeSelectSuccess,
  makeSelectHomePage,
  makeSelectSolutions,
  makeSelectVerification,
  makeSelectEnrichment,
  makeSelectComparison,
  makeSelectTelecom,
  makeSelectHealthcare,
  makeSelectCompliance,
};
