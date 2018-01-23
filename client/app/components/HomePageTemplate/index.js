import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Reveal from 'react-reveal';

// SharedComponents
import ScrollToButton from 'components/ScrollToButton';
import ContactUsCTA from '../ContactUsCTA';
import Carousel from './Carousel';
import QuickFacts from './QuickFacts';
import ServiceIcons from './ServiceIcons';
import WhatWeDo from './WhatWeDo';
import ThreeBlock from './components/ThreeBlock';
import TimeCounter from './components/TimeCounter';
import GettingStarted from './components/GettingStarted';

// Styles
import styles from './styles.scss';

const boldHero = 'hero is-bold';
const mainHero = `hero is-fullheight is-primary ${styles.landingHero}`;
const infoHero = `${boldHero} is-medium is-info`;
const lightHero = `${boldHero} is-medium is-light`;

const mediumCustomContent = `content is-medium ${styles.content}`;

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
      <div className="hero-body columns is-multiline">
        <div className={`container ${styles.textCenter} column is-10 is-offset-by-1  is-centered `}>
          <h1
            className={`title is-1 ${styles.mainTitle} animated fadeInUp  `}
            ref={(title) => {
              this.titleText = title;
            }}
          >
            Idicia
          </h1>
          <h2 className={`${styles.subTitle} subtitle animated fadeInUp `}>
             Global Data,
            <span style={{fontFamily: "Josefin Sans" }}> Neighborhood Service </span>
          </h2>
          <h4 className={`column ${styles.titleContent} animated fadeInUp `}>
            High quality data cleansing
            delivered with personalized customer service
          </h4>
          {/* <ScrollToButton fadeIn scrollTo="#contactForm" text="Contact Us" /> */}
        </div>
      </div>
    </section>
    <section
      className="section"
      style={{ padding: '0', backgroundColor: 'whitesmoke' }}
    >
    <div className="container">
      <nav className="level">
        <div className="level-item has-text-centered" style={{paddingTop: "3rem"}}>
          <div>
            <p className="heading">Happy Customers</p>
            <div className="title">
              <TimeCounter initialValue={385} interval={2500} increment={1} />
            </div>
          </div>
        </div>
        <div className="level-item has-text-centered verticalCenter" style={{paddingTop: "3rem"}}>
          <div>
            <p className="heading">Records Processed</p>
            <div className="title">
              <TimeCounter initialValue={209} interval={1500} increment={1} />
              <span> M</span>
            </div>
          </div>
        </div>
        <div className="level-item has-text-centered verticalCenter" style={{paddingTop: "3rem"}}>
          <div>
            <p className="heading">Database Lookups</p>
            <div className="title">
              <TimeCounter initialValue={145} interval={500} increment={1} />
              <span> M</span>
            </div>
          </div>
        </div>
        <div className="level-item has-text-centered verticalCenter" style={{paddingTop: "3rem"}}>
          <div>
            <p className="heading">Data Points</p>
            <div className="title">
              <TimeCounter initialValue={873} interval={250} increment={1} />
              <span> M</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </section>
    <section
      className={`section ${styles.textCenter}`}
      style={{background: 'none'}}
    >
      <h1 className="title"> What We Do </h1>
      <div className={`columns is-multiline is-centered ${styles.textCenter}`}>
        <ThreeBlock
            backgroundImage="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087372/idicia/dataBackground-20.png"
            icon="fa-database"
            title="Fast & Accurate Data"
          >
            With data centers strategically positioned across the country we
            ensure fast response times on our data services. With the ability to
            access telecom data literally seconds after it is updated, we ensure
            highly accurate data.<br />
            <a style={{ textDecoration: 'underline' }}>Learn more</a>
          </ThreeBlock>

          <ThreeBlock
            backgroundImage="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087375/idicia/Implementation-20.png"
            icon="fa-code"
            title="Easy Implementation"
          >
            Using the RESTful standard for our API and extensive documentation
            will help you get up and running with our data enrichment services
            fast and with less hassle.<br />
            <a style={{ textDecoration: 'underline' }}>Learn more</a>
          </ThreeBlock>

          <ThreeBlock
            backgroundImage="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087377/idicia/Support-20.png"
            icon="fa-phone"
            title="Awesome support"
          >
            While the support standard in our industry is an email and hoping to
            hear back, we understand that just isn’t good enough sometimes. We’re
            here to help on an actual phone and email(if you prefer).<br />
            <a style={{ textDecoration: 'underline' }}>Learn more</a>
          </ThreeBlock>
      </div>
    </section>
    <section className="container">
      <div className={styles.textCenter}>
        <h1 className="title">What do you need to get started?</h1>
      </div>
      <Reveal effect="animated fadeInUp">
        <GettingStarted />
      </Reveal>
    </section>
    <section
      className={`container ${styles.textCenter} `}
      style={{margin: '40px auto'}}
    >
      <div className="card is-centered ">
        <div className="card-content">
          <h1
            className="title"
            style={{ color: '#FFCC00', fontWeight: 'bolder' }}
          >
            THE IDICIA DIFFERENCE
          </h1>
          <p>
            <strong>IDICIA is a whole new kind of data company.</strong>
          </p>
          <br/>
          <p >
            We have access to billions of consumer data records but we only pull
            the specific record we need at the very last possible second we need
            it, so it is as fresh as possible. Our data services are truly “just
            in time”. IDICIA is a real-time data quality solutions hub that
            accesses the best data on the market and some data our competitors
            only wish they had.
          </p>
          <p >
            Many of the records we access provide fresh answers within seconds
            of when the record was updated. One of the main reasons we have
            access to many of our information resources is that we don’t require
            the data sources to ship us big files of bulk data like most data
            service companies. We pull data a single record at a time so we can
            access information that, for legal or regulatory purposes, cannot be
            used by other companies that require big, internal crock-pot like
            data files. This helps you get answers that others can’t provide,
            giving you a competitive edge.
          </p>
        </div>
      </div>

    </section>
  </section>
);

HomePageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePageTemplate;
