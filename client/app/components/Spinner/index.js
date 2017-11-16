import React from 'react';

import styles from './styles.scss';

const Spinner = () => (
  <section id={styles.spinner} className={`hero is-fullheight ${styles.fullheightHeroSubNav}`}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
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
