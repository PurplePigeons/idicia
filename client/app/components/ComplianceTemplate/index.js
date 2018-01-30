import React from 'react';
import PropTypes from 'prop-types';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

import styles from './styles.scss';

// SharedComponents
import ContactUsCTA from '../ContactUsCTA';
import ContentCard from '../ContentCard';

const ComplianceTemplate = ({ data }) => {

  const mediumCustomContent = `content is-medium ${styles.content}`;

  return (
    <div className={`${styles.complianceHero}`}>
        <ContentCard
          sectionStyle={'mainHero'}
          children={<h1 className={`${styles.mainTitle}`}>{data.slug}</h1>}
        />

        <ContentCard
          sectionStyle={'lightHero'}
          children={
                    <div className="columns">
                      <div className="column is-one-third">
                        <div className={mediumCustomContent}>
                          {renderHtmlWithRouterLinks(data.column1.section1.html)}
                        </div>
                        <div className={mediumCustomContent}>
                          {renderHtmlWithRouterLinks(data.column1.section2.html)}
                        </div>
                        <div className={mediumCustomContent}>
                          {renderHtmlWithRouterLinks(data.column1.section3.html)}
                        </div>
                        <div className={mediumCustomContent}>
                          {renderHtmlWithRouterLinks(data.column1.section4.html)}
                        </div>
                      </div>
                      <div className="column is-two-thirds">
                        <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.column2.html }} />
                      </div>
                    </div>
                    }
        />

        <ContentCard
          sectionStyle={'infoHero'}
          children={<div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section1.html }} />}
        />
        <ContactUsCTA />
    </div>
  );
};

ComplianceTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ComplianceTemplate;
