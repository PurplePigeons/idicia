import React from 'react';
import PropTypes from 'prop-types';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

import styles from './styles.scss';

const ComplianceTemplate = ({ data }) => {
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
            <div className="columns">
              <div className="column is-one-third">
                <div className={mediumCustomContent}><h1>{data.column1.title}</h1></div>
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
          </div>
        </div>
      </section>
      <section className={infoHero}>
        <div className="hero-body">
          <div className="container">
            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section1.html }} />
          </div>
        </div>
      </section>
    </div>
  );
};

ComplianceTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ComplianceTemplate;
