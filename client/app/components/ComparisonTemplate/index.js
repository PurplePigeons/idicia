import React from 'react';
import PropTypes from 'prop-types';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const ComparisonTemplate = ({ data }) => {
  const boldHero = `${bulma.hero} ${bulma['is-bold']}`;
  const mainHero = `${boldHero} ${bulma['is-small']} ${bulma['is-primary']}`;
  const infoHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-info']}`;
  const lightHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-light']}`;

  const mediumCustomContent = `${bulma.content} ${bulma['is-medium']} ${styles.content}`;

  const centeredMobileColumns = `${bulma.columns} ${bulma['is-mobile']} ${bulma['is-centered']}`;
  const comparisonColumn = `${bulma.column} ${bulma['is-half-mobile']} ${bulma['is-one-quarter-tablet']} ${bulma['is-one-quarter-desktop']} ${bulma['has-text-centered']} ${styles.comparisonColumn}`;

  return (
    <div>
      <section className={mainHero}>
        <div className={bulma['hero-body']}>
          <div className={bulma.container}>
            <h1 className={`${bulma.title} ${styles.mainTitle}`}>
              {data.title}
            </h1>
          </div>
        </div>
      </section>
      <section className={lightHero}>
        <div className={bulma['hero-body']}>
          <div className={bulma.container}>
            <div className={mediumCustomContent}>
              <h1>{data.section1.title}</h1>
            </div>
            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section1.line1.html }} />
            <div className={centeredMobileColumns}>
              <div className={comparisonColumn} dangerouslySetInnerHTML={{ __html: data.section1.comparison1.html }} />
              <div className={comparisonColumn} dangerouslySetInnerHTML={{ __html: data.section1.comparison2.html }} />
            </div>
            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section1.contentBody.html }} />
          </div>
        </div>
      </section>
      <section className={infoHero}>
        <div className={bulma['hero-body']}>
          <div className={bulma.container}>
            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.html }} />
          </div>
        </div>
      </section>
    </div>
  );
};

ComparisonTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ComparisonTemplate;
