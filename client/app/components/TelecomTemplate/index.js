import React from 'react';
import PropTypes from 'prop-types';

// SharedComponents
import ContactUsCTA from '../ContactUsCTA';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const TelecomTemplate = ({ data }) => {
  const boldHero = `${bulma.hero} ${bulma['is-bold']}`;
  const mainHero = `${boldHero} ${bulma['is-small']} ${bulma['is-primary']}`;
  const infoHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-info']}`;
  const lightHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-light']}`;

  const mediumCustomContent = `${bulma.content} ${bulma['is-medium']} ${styles.content}`;

  return (
    <div className="columns is-multiline">
      <section className= {`${mainHero} column is-10 is-offset-1`}>
        <div className="card animated fadeInUp">
          <div className="card-content">
            <div className={bulma['hero-body']}>
              <div className={bulma.container}>
                <h1 className={`${bulma.title} ${styles.mainTitle}`}>
                  {data.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${lightHero} column is-10 is-offset-1`}>
        <div className="card animated fadeInUp">
          <div className="card-content">
            <div className={bulma['hero-body']}>
              <div className={bulma.container}>
                <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block1.html }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${infoHero} column is-10 is-offset-1`}>
        <div className="card animated fadeInUp">
          <div className="card-content">
            <div className={bulma['hero-body']}>
              <div className={bulma.container}>
                <div className={mediumCustomContent}><h1>{data.block2.title}</h1></div>
                <div className={bulma.columns}>
                  <div className={bulma.column}>
                    <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block2.column1.html }} />
                  </div>
                  <div className={bulma.column}>
                    <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block2.column2.html }} />
                  </div>
                </div>
                <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block2.content.html }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${lightHero} column is-10 is-offset-1`}>
        <div className="card animated fadeInUp">
          <div className="card-content">
            <div className={bulma['hero-body']}>
              <div className={bulma.container}>
                <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block4.html }} />
              </div>
            </div>
          </div>
        </div>
      </section >
      <ContactUsCTA />
    </div>

  );
};

TelecomTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TelecomTemplate;
