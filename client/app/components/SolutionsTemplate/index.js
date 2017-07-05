import React from 'react';
import PropTypes from 'prop-types';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const SolutionsTemplate = ({ data }) => (
  <div>
    <section className={`${bulma.hero} ${bulma['is-small']} ${bulma['is-bold']} ${bulma['is-primary']}`}>
      <div className={bulma['hero-body']}>
        <div className={bulma.container}>
          <h1 className={`${bulma.title} ${styles.mainTitle}`}>
            {data.title}
          </h1>
        </div>
      </div>
    </section>
    <section className={`${bulma.hero} ${bulma['is-medium']} ${bulma['is-bold']} ${bulma['is-info']}`}>
      <div className={bulma['hero-body']}>
        <div className={bulma.container}>
          <div className={`${bulma.content} ${bulma['is-medium']} ${styles.content}`} dangerouslySetInnerHTML={{ __html: data.block1.html }} />
        </div>
      </div>
    </section>
    <section className={`${bulma.hero} ${bulma['is-medium']} ${bulma['is-bold']} ${bulma['is-light']}`}>
      <div className={bulma['hero-body']}>
        <div className={bulma.container}>
          <div className={`${bulma.content} ${bulma['is-medium']} ${styles.content}`} dangerouslySetInnerHTML={{ __html: data.block2.html }} />
        </div>
      </div>
    </section>
    <section className={`${bulma.hero} ${bulma['is-medium']} ${bulma['is-bold']} ${bulma['is-info']}`}>
      <div className={bulma['hero-body']}>
        <div className={bulma.container}>
          <div className={bulma.columns}>
            <div className={bulma.column}>
              <div className={`${bulma.content} ${bulma['is-medium']} ${styles.content}`}><h1>{data.block3.column1.title}</h1></div>
              <div className={`${bulma.content} ${bulma['is-medium']} ${styles.content}`} dangerouslySetInnerHTML={{ __html: data.block3.column1.content.html }} />
            </div>
            <div className={bulma.column}>
              <div className={`${bulma.content} ${bulma['is-medium']} ${styles.content}`} dangerouslySetInnerHTML={{ __html: data.block3.column2.html }} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={`${bulma.hero} ${bulma['is-medium']} ${bulma['is-bold']} ${bulma['is-light']}`}>
      <div className={bulma['hero-body']}>
        <div className={bulma.container}>
          <div className={`${bulma.content} ${bulma['is-medium']} ${styles.content}`}><h1>{data.block4.title}</h1></div>
          <div className={bulma.columns}>
            <div className={bulma.column}>
              <div className={`${bulma.content} ${bulma['is-medium']} ${styles.content}`} dangerouslySetInnerHTML={{ __html: data.block4.column1.html }} />
            </div>
            <div className={bulma.column}>
              <div className={`${bulma.content} ${bulma['is-medium']} ${styles.content}`} dangerouslySetInnerHTML={{ __html: data.block4.column2.html }} />
            </div>
            <div className={bulma.column}>
              <div className={`${bulma.content} ${bulma['is-medium']} ${styles.content}`} dangerouslySetInnerHTML={{ __html: data.block4.column3.html }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

SolutionsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SolutionsTemplate;
