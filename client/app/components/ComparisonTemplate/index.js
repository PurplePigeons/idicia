import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const ComparisonTemplate = ({ data }) => {
  const boldHero = 'hero is-bold';
  const mainHero = `${boldHero} is-small is-primary`;
  const infoHero = `${boldHero} is-medium is-info`;
  const lightHero = `${boldHero} is-medium is-light`;

  const mediumCustomContent = `content is-medium ${styles.content}`;

  const centeredMobileColumns = 'columns is-mobile is-centered';
  const comparisonColumn = `column is-half-mobile is-one-quarter-tablet is-one-quarter-desktop has-text-centered ${styles.comparisonColumn}`;

  return (
    <div>
      <section className={mainHero}>
        <div className="hero-body">
          <div className="container">
            <h1 className={`title ${styles.mainTitle}`}>
              {data.title}
            </h1>
          </div>
        </div>
      </section>
      <section className={lightHero}>
        <div className="hero-body">
          <div className="container">
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
        <div className="hero-body">
          <div className="container">
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
