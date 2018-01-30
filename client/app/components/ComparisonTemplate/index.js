import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

// SharedComponents
import ContactUsCTA from '../ContactUsCTA';
import ContentCard from '../ContentCard';

const ComparisonTemplate = ({ data }) => {

  const mediumCustomContent = `content is-medium ${styles.content}`;

  const centeredMobileColumns = 'columns is-mobile is-centered';
  const comparisonColumn = `column is-half-mobile is-one-quarter-tablet is-one-quarter-desktop has-text-centered ${styles.comparisonColumn}`;

  return (
    <div className={` ${styles.comparisonHero}`}>
      <ContentCard
        sectionStyle={'mainHero'}
        children={<h1 className={`${styles.mainTitle}`}>{data.slug}</h1>}
      />
      
      <ContentCard
      sectionStyle={'lightHero'}
      children={
                  <div className="container">
                    <div className={mediumCustomContent}>
                      <h1>{data.section1.title}</h1>
                    </div>
                    <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section1.line1.html }} />
                    <div className={centeredMobileColumns}>
                    <br/>
                      <div className={comparisonColumn} dangerouslySetInnerHTML={{ __html: data.section1.comparison1.html }} />
                      <br/>
                      <div className={comparisonColumn} dangerouslySetInnerHTML={{ __html: data.section1.comparison2.html }} />
                    </div>
                    <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section1.contentBody.html }} />
                  </div>
              }
      />
      
      <ContentCard
        sectionStyle={'infoHero'}
        children={
                    <div className="container">
                      <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.html }} />
                    </div>

                  }
      />
      <ContactUsCTA />
    </div>
  );
};

ComparisonTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ComparisonTemplate;
