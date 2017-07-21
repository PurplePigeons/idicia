import React from 'react';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const iconColumn = (data) => data && Object.keys(data)
  .reverse()
  .map((key) => (
    <div className={`${bulma.column} ${bulma['has-text-centered']} ${styles.buttonLink}`} key={key}>
      <div className={styles.flexCenter}>
        <figure className={`${bulma.image} ${bulma['is-96x96']}`}>
          <img src={data[key].icon.secure_url} alt={`${key}-icon`} />
        </figure>
      </div>
      {renderHtmlWithRouterLinks(data[key].text.html)}
    </div>
  ));

const ServiceIcons = ({ ...columns }) => (
  <div className={bulma.container}>
    <div className={bulma.columns}>
      {iconColumn(columns)}
    </div>
  </div>
);

export default ServiceIcons;
