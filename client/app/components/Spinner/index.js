import React from 'react';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const Spinner = () => (
  <section id={styles.spinner} className={`${bulma.hero} ${bulma['is-fullheight']} ${styles.fullheightHeroSubNav}`}>
    <div className={bulma['hero-body']}>
      <div className={bulma.container}>
        <h1 className={bulma.title}>
          <div className={styles.spinner}>
            <div className={styles.bounce1}></div>
            <div className={styles.bounce2}></div>
            <div className={styles.bounce3}></div>
          </div>
        </h1>
      </div>
    </div>
  </section>
);

export default Spinner;
