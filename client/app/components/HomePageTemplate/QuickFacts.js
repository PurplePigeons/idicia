import React from 'react';
import PropTypes from 'prop-types';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const facts = (data) => data && Object.keys(data)
  .reverse() // Since the keys come out reversed of the order we want...
  .map((key) => (
    <div className={bulma.columns} key={key}>
      <div className={`${bulma.column} ${bulma['is-one-third-tablet']} ${bulma['has-text-left']} ${styles.factLink}`} >
        {renderHtmlWithRouterLinks(data[key].title.html)}
      </div>
      <div className={`${bulma.column} ${bulma['has-text-left']}`} >
        {renderHtmlWithRouterLinks(data[key].text.html)}
      </div>
    </div>
  ));

const QuickFacts = ({ title, contentStyle, ...factCategories }) => (
  <div>
    <div className={contentStyle}><h2>{title}</h2></div>
    <div className={`${contentStyle} ${styles.verticalCenter}`}>
      {facts(factCategories)}
    </div>
  </div>
);

QuickFacts.propTypes = {
  contentStyle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default QuickFacts;
