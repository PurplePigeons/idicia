import React from 'react';
import PropTypes from 'prop-types';

// Components
import ContactUsCTA from '../ContactUsCTA';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const HealthcareTemplate = ({ data }) => {
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
            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section1.html }} />
          </div>
        </div>
      </section>
      <section className={infoHero}>
        <div className={bulma['hero-body']}>
          <div className={bulma.container}>
            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.content.html }} />
            <figure className={styles.flexImage}>
              <img src={data.section2.image.secure_url} />
            </figure>
            <div className={bulma.columns}>
              <div className={bulma.column}>
                <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.stub1.html }} />
              </div>
              <div className={bulma.column}>
                <div className={`${mediumCustomContent} ${styles.centeredList}`} dangerouslySetInnerHTML={{ __html: data.section2.stub2.html }} />
              </div>
              <div className={bulma.column}>
                <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.stub3.html }} />
              </div>
            </div>
            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.example.html }} />
          </div>
        </div>
      </section>
      <ContactUsCTA />
    </div>
  );
};

HealthcareTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HealthcareTemplate;
