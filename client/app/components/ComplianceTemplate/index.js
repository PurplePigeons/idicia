import React from 'react';
import PropTypes from 'prop-types';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

// Components
import ContactUsCTA from '../ContactUsCTA';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const ComplianceTemplate = ({ data }) => {
  const boldHero = `${bulma.hero} ${bulma['is-bold']}`;
  const mainHero = `${boldHero} ${bulma['is-small']} ${bulma['is-primary']}`;
  const infoHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-info']}`;
  const lightHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-light']}`;

  const mediumCustomContent = `${bulma.content} ${bulma['is-medium']} ${styles.content}`;

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
            <div className={bulma.columns}>
              <div className={`${bulma.column} ${bulma['is-one-third']}`}>
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
              <div className={`${bulma.column} ${bulma['is-two-thirds']}`}>
                <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.column2.html }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={infoHero}>
        <div className={bulma['hero-body']}>
          <div className={bulma.container}>
            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section1.html }} />
          </div>
        </div>
      </section>
      <ContactUsCTA />
    </div>
  );
};

ComplianceTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ComplianceTemplate;
