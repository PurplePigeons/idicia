import React from 'react';
import PropTypes from 'prop-types';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const links = (data) => data && Object.keys(data)
  .reverse()
  .map((key) => (
    <div className={`${bulma.column} ${bulma['is-one-third-tablet']} ${bulma['has-text-centered']} ${styles.buttonLink}`} key={key}>
      {renderHtmlWithRouterLinks(data[key].html)}
    </div>
  ));

const WhatWeDo = ({ contentStyle, text: { html: bodyText }, ...services }) => (
  <div className={bulma.container}>
    <div className={`${contentStyle} ${bulma['has-text-centered']}`} dangerouslySetInnerHTML={{ __html: bodyText }} />
    <div className={bulma.columns}>
      {links(services)}
    </div>
  </div>
);

WhatWeDo.propTypes = {
  contentStyle: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
};

export default WhatWeDo;
