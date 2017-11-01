import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Reveal from 'react-reveal';

// Components
import ContactUsCTA from '../ContactUsCTA';
import ContactForm from '../ContactForm';
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
        <div className={`${bulma.container} ${styles.textCenter}`}>
          <h1 className={`${bulma.title} ${bulma['is-1']} ${styles.mainTitle} animated fadeInUp`} ref={(title) => { this.titleText = title; }}>
            Idicia
          </h1>
          <h2 className={`${styles.subTitle} ${bulma.subtitle} ${bulma['is-4']} animated fadeInUp`}>
            Neighborhood Service <br />
            Global Data
          </h2 >
          <h4 className={`${bulma.column} ${styles.titleContent} ${bulma['is-4']} ${bulma['is-offset-4']} animated fadeInUp`}>
            At IDICIA we have intentions that some
            competitors may see as conflicting.... To provide
            you with the fastest & most accurate Data Hygiene
            services and the best customer service in the industry.
          </h4>
          <button
            onClick={() => document.querySelector('#contactForm').scrollIntoView({ behavior: 'smooth' })}
            className={styles.btn}
          > Contact Us </button>
        </div>
      </div>
    </section>
    <section>
      <div className={`${bulma.columns} ${bulma['is-multiline']} ${bulma['is-centered']} ${styles.textCenter}`}>
        <div className={`${bulma.column} ${bulma['is-2']} `}>
        120938 <br />
        Happy Customers
        </div>
        <div className={`${bulma.column} ${bulma['is-2']}`}>
        1209381239000000 <br />
        Records Processed
        </div>
        <div className={`${bulma.column} ${bulma['is-2']}`}>
        12093812390 <br />
        Database Lookups
        </div>
        <div className={`${bulma.column} ${bulma['is-2']} `}>
        83874982374 <br />
        Data Points
        </div>
      </div>
    </section>
    <section>
      <div> What We Do </div>
      <div className={`${bulma.columns} ${bulma['is-multiline']} ${bulma['is-centered']} ${styles.textCenter}`}>
        <div className={`${bulma.column} ${bulma['is-3']} `}>
        Awesome support: <br />
        While the support standard in our industry is an email
        and hoping to hear back, we understand that just isn’t
        good enough sometimes. We’re here to help on an actual
        phone and email(if you prefer).

        </div>
        <div className={`${bulma.column} ${bulma['is-3']}`}>
        Easy Implementation: <br />
        Using the RESTful standard for our API and extensive
        documentation will help you get up and running with
        our data enrichment services fast and with less hassle.
        </div>
        <div className={`${bulma.column} ${bulma['is-3']}`}>
        Database LookupsFast & Accurate Data: <br />
        With data centers strategically positioned across the
        country we ensure fast response times on our data services.
        With the ability to access telecom data literally seconds after
        it is updated, we ensure highly accurate data.
        </div>
        
      </div>
    </section>
    <section>
      What do you need to get started?
    </section>
    <section>
    The Idicia Difference
      <div className={`${bulma.columns} ${bulma['is-centered']} ${styles.textCenter}`}>
        <div className={`${bulma.column} ${bulma['is-half']}`}>
          IDICIA is a whole new kind of data company. We have access to
          billions of consumer data records but we only pull the specific
          record we need at the very last possible second we need it, so
          it is as fresh as possible. Our data services are truly “just
          in time”.
          IDICIA is a real-time data quality solutions hub that accesses the
          best data on the market and some data our competitors only wish they
          had. Many of the records we access provide fresh answers within
          seconds of when the record was updated. One of the main reasons we
          have access to many of our information resources is that we don’t
          require the data sources to ship us big files of bulk data like
          most data service companies. We pull data a single record at a
          time so  we can access information that, for legal or regulatory
          purposes, cannot be used by other companies that require big,
          internal crock-pot like data files. This helps you get answers
          that others can’t provide, giving you a competitive edge.
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
    <Reveal effect="animated fadeIn">
      <ContactForm />
    </Reveal>
  </section>
);

HomePageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePageTemplate;
