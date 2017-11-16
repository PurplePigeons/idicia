import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const EnrichmentTemplate = ({ data }) => {
  // Generate the divs for the 4 different Enrichment examples
  const enrichmentExamples = data.section2 && Object.keys(data.section2)
    .sort() // Since the keys come out in an indeterminate order... #object-things
    .map((content) => <div key={content} dangerouslySetInnerHTML={{ __html: data.section2[content].html }} />);

  const boldHero = 'hero is-bold';
  const mainHero = `${boldHero} is-small is-primary`;
  const infoHero = `${boldHero} is-medium is-info`;
  const lightHero = `${boldHero} is-medium is-light`;

  const mediumCustomContent = `content is-medium ${styles.content}`;

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
            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section1.html }} />
          </div>
        </div>
      </section>
      <section className={infoHero}>
        <div className="hero-body">
          <div className="container">
            <div className={`content is-medium ${styles.content} ${styles.columnCluster}`}>
              {enrichmentExamples}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

EnrichmentTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EnrichmentTemplate;
