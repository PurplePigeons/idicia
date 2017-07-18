import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

// Components

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const boldHero = `${bulma.hero} ${bulma['is-bold']}`;
const mainHero = `${boldHero} ${bulma['is-fullheight']} ${bulma['is-primary']}`;
const infoHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-info']}`;
const lightHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-light']}`;

const HomePageTemplate = () => (
  <section>
    <Helmet
      title="Home"
      meta={[
        {
          name: 'description',
          content: 'IDICIA: Real-Time Identity Verification & Fraud Prevention',
        },
      ]}
    />
    <section className={mainHero}>
      <div className={bulma['hero-body']}>
        <div className={bulma.container}>
          <h1 className={`${bulma.title} ${styles.mainTitle}`}>
            Welcome to Idicia
          </h1>
        </div>
      </div>
    </section>
  </section>
);

HomePageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePageTemplate;
