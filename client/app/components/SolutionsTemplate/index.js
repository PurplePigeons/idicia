import React from 'react';
import PropTypes from 'prop-types';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const SolutionsTemplate = ({ data }) => {
  // Generate the divs for the 6 distinct solutions
  const solutionExamples = data.block3.column1 && Object.keys(data.block3.column1)
    .filter((key) => key !== 'title')
    .sort() // Since the keys come out in an indeterminate order... #object-things
    .map((content) => (
      <div key={content}>
        {renderHtmlWithRouterLinks(data.block3.column1[content].html)}
      </div>
    ));

  const boldHero = `${bulma.hero} ${bulma['is-bold']}`;
  const infoHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-info']}`;
  const lightHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-light']}`;

  const mediumCustomContent = `${bulma.content} ${bulma['is-medium']} ${styles.content}`;

  return (
    <div>
      <section className={infoHero}>
        <div className={bulma['hero-body']}>
          <div className={bulma.container}>
            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block1.html }} />
          </div>
        </div>
      </section>
      <section className={lightHero}>
        <div className={bulma['hero-body']}>
          <div className={bulma.container}>
            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block2.html }} />
          </div>
        </div>
      </section>
      <section className={infoHero}>
        <div className={bulma['hero-body']}>
          <div className={bulma.container}>
            <div className={bulma.columns}>
              <div className={bulma.column}>
                <div className={mediumCustomContent}><h1>{data.block3.column1.title}</h1></div>
                <div className={`${bulma.content} ${bulma['is-medium']} ${styles.content} ${styles.columnCluster}`}>
                  {solutionExamples}
                </div>
              </div>
              <div className={`${bulma.column} ${bulma['is-one-third']}`}>
                <div className={`${mediumCustomContent} ${styles.verticalCenter}`}>
                  {renderHtmlWithRouterLinks(data.block3.column2.html)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={lightHero}>
        <div className={bulma['hero-body']}>
          <div className={bulma.container}>
            <div className={mediumCustomContent}><h1>{data.block4.title}</h1></div>
            <div className={bulma.columns}>
              <div className={bulma.column}>
                <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block4.column1.html }} />
              </div>
              <div className={bulma.column}>
                <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block4.column2.html }} />
              </div>
              <div className={bulma.column}>
                <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block4.column3.html }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

SolutionsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SolutionsTemplate;
