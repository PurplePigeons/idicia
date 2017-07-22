import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Reveal from 'react-reveal';

// Components
import ContactUsCTA from '../ContactUsCTA';
import Carousel from './Carousel';
import QuickFacts from './QuickFacts';
import ServiceIcons from './ServiceIcons';
import WhatWeDo from './WhatWeDo';

// Styles
import bulma from 'styles/bulma.scss'; // eslint-disable-line import/first
import styles from './styles.scss';

const boldHero = `${bulma.hero} ${bulma['is-bold']}`;
const mainHero = `${bulma.hero} ${bulma['is-fullheight']} ${bulma['is-primary']} ${styles.landingHero}`;
const infoHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-info']}`;
const lightHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-light']}`;
const mediumCustomContent = `${bulma.content} ${bulma['is-medium']} ${styles.content}`;

const HomePageTemplate = ({ data }) => (
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
          <h1 className={`${bulma.title} ${styles.mainTitle} animated fadeInUp`} ref={(title) => { this.titleText = title; }}>
            Welcome to Idicia
          </h1>
        </div>
      </div>
    </section>
    {
      data.sliders &&
      <section className={`${boldHero} ${bulma['is-large']} ${bulma['is-info']}`}>
        <div className={bulma['hero-body']}>
          <div className={bulma.container}>
            <Reveal effect="animated fadeIn">
              <Carousel slides={data.sliders} />
            </Reveal>
          </div>
        </div>
      </section>
    }
    <section className={lightHero}>
      <div className={bulma['hero-body']}>
        <div className={bulma.container}>
          <div className={bulma.columns}>
            <Reveal effect="animated fadeIn" className={bulma.column}>
              <div className={`${mediumCustomContent} ${bulma['has-text-right']}`} dangerouslySetInnerHTML={{ __html: data.welcome.html }} />
            </Reveal>
            <Reveal effect="animated fadeIn" className={`${bulma.column} ${styles.leftBorder}`}>
              <QuickFacts {...data.quickFacts} contentStyle={mediumCustomContent} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
    <section className={infoHero}>
      <div className={bulma['hero-body']}>
        <Reveal effect="animated fadeInLeft">
          <WhatWeDo {...data.whatWeDo} contentStyle={mediumCustomContent} />
        </Reveal>
      </div>
    </section>
    <section className={lightHero}>
      <div className={bulma['hero-body']}>
        <Reveal effect="animated fadeInRight">
          <ServiceIcons {...data.columns} />
        </Reveal>
      </div>
    </section>
    <ContactUsCTA />
  </section>
);

HomePageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePageTemplate;
