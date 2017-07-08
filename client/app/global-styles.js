import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    overflow-y: hidden !important; // Bulma is interfering here and adding an extra scrollbar...
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li {
    font-family: Raleway;
    line-height: 1.5em;
  }
`;
