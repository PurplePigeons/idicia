import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
import bulma from 'styles/bulma.scss';

import ContactUsCTA from '../ContactUsCTA';
import ContentCard from '../ContentCard';

const EnrichmentTemplate = ({ data }) => {
  // Generate the divs for the 4 different Enrichment examples
  const enrichmentExamples = data.section2 && Object.keys(data.section2)
    .sort() // Since the keys come out in an indeterminate order... #object-things
    .map((content) => <div key={content} dangerouslySetInnerHTML={{ __html: data.section2[content].html }} />);

  const mediumCustomContent = `content is-medium ${styles.content}`;

  return (
    <div className={`${styles.enrichmentHero}`}>
      <ContentCard
          sectionStyle={'mainHero'}
          children={
                    <div className="container">
                      <h1 className={`${styles.mainTitle}`}>
                        {data.title}
                      </h1>
                    </div>
                    }
      />
      <ContentCard
          sectionStyle={'lightHero'}
          children={
                    <div className="container">
                      <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section1.html }} />
                    </div>
                    }
      />

      <ContentCard
          sectionStyle={'infoHero'}
          children={

                      <div className="container">
                        <div className={`content is-medium ${styles.content} ${styles.columnCluster}`}>
                          {enrichmentExamples}
                        </div>
                      </div>

                    }
      />

      <ContactUsCTA />

    </div>
  );
};

EnrichmentTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EnrichmentTemplate;
