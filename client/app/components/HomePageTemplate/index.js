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
import H1 from '../H1';
import H2 from '../H2';
import H3 from '../H3';
import ThreeBlock from './components/ThreeBlock';
import TimeCounter from './components/TimeCounter';
import GettingStarted from './components/GettingStarted';

// Styles
import bulma from 'styles/bulma.scss';
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
          name: "description",
          content: "IDICIA: Real-Time Identity Verification & Fraud Prevention"
        }
      ]}
    />
    <section className={mainHero}>
      <div className={bulma["hero-body"]}>
        <div className={`${bulma.container} ${styles.textCenter}`}>
          <h1
            className={`${bulma.title} ${bulma[
              "is-1"
            ]} ${styles.mainTitle} animated fadeInUp`}
            ref={title => {
              this.titleText = title;
            }}
          >
            Idicia
          </h1>
          <h2
            className={`${styles.subTitle} ${bulma.subtitle} ${bulma[
              "is-4"
            ]} animated fadeInUp`}
          >
            Neighborhood Service <br />
            Global Data
          </h2>
          <h4
            className={`${bulma.column} ${styles.titleContent} ${bulma[
              "is-4"
            ]} ${bulma["is-offset-4"]} animated fadeInUp`}
          >
            At IDICIA we have intentions that some competitors may see as
            conflicting.... To provide you with the fastest & most accurate Data
            Hygiene services and the best customer service in the industry.
          </h4>
          <button
            onClick={() =>
              document
                .querySelector("#contactForm")
                .scrollIntoView({ behavior: "smooth" })}
            className={styles.btn}
          >
            {" "}
            Contact Us{" "}
          </button>
        </div>
      </div>
    </section>
    <section
      className={bulma.section}
      style={{ padding: "0", backgroundColor: "whitesmoke" }}
    >
      <div className={bulma.container}>
        <div
          className={`${bulma.columns} ${bulma["is-multiline"]} ${bulma[
            "is-centered"
          ]} ${styles.textCenter}`}
        >
          <div
            className={`${bulma.column} ${bulma["is-2"]} `}
            style={{
              border: "2px solid #ddd",
              fontSize: "1.2rem",
              backgroundColor: "#eee"
            }}
          >
            <TimeCounter initialValue={120938} interval={1000} increment={1} />
            <br />
            Happy Customers
          </div>
          <div
            className={`${bulma.column} ${bulma["is-2"]}`}
            style={{
              borderTop: "2px solid #ddd",
              borderBottom: "2px solid #ddd",
              borderRight: "2px solid #ddd",
              fontSize: "1.2rem",
              backgroundColor: "#eee"
            }}
          >
            <TimeCounter
              initialValue={1209381239000000}
              interval={300}
              increment={1}
            />
            <br />
            Records Processed
          </div>
          <div
            className={`${bulma.column} ${bulma["is-2"]}`}
            style={{
              borderTop: "2px solid #ddd",
              borderBottom: "2px solid #ddd",
              fontSize: "1.2rem",
              backgroundColor: "#eee"
            }}
          >
            <TimeCounter
              initialValue={12093812390}
              interval={150}
              increment={5}
            />
            <br />
            Database Lookups
          </div>
          <div
            className={`${bulma.column} ${bulma["is-2"]} `}
            style={{
              border: "2px solid #ddd",
              fontSize: "1.2rem",
              backgroundColor: "#eee"
            }}
          >
            <TimeCounter
              initialValue={83874982374}
              interval={100}
              increment={111}
            />
            <br />
            Data Points
          </div>
        </div>
      </div>
    </section>
    <section
      className={`${bulma.section} ${styles.textCenter}`}
      style={{ background: "none" }}
    >
      <h1 className={bulma.title}> What We Do </h1>
      <div
        className={`${bulma.columns} ${bulma["is-multiline"]} ${bulma[
          "is-centered"
        ]} ${styles.textCenter}`}
      >
        <ThreeBlock
          backgroundImage={require("./Support-20%.png")}
          icon="fa-phone"
          title="Awesome support"
        >
          While the support standard in our industry is an email and hoping to
          hear back, we understand that just isn’t good enough sometimes. We’re
          here to help on an actual phone and email(if you prefer).<br />
          <a style={{ textDecoration: "underline" }}>Learn more</a>
        </ThreeBlock>

        <ThreeBlock
          backgroundImage={require("./Implementation-20%.png")}
          icon="fa-code"
          title="Easy Implementation"
        >
          Using the RESTful standard for our API and extensive documentation
          will help you get up and running with our data enrichment services
          fast and with less hassle.<br />
          <a style={{ textDecoration: "underline" }}>Learn more</a>
        </ThreeBlock>
        <ThreeBlock
          backgroundImage={require("./dataBackground-20%.png")}
          icon="fa-database"
          title="Fast & Accurate Data"
        >
          With data centers strategically positioned across the country we
          ensure fast response times on our data services. With the ability to
          access telecom data literally seconds after it is updated, we ensure
          highly accurate data.<br />
          <a style={{ textDecoration: "underline" }}>Learn more</a>
        </ThreeBlock>
      </div>
    </section>
    <section className={`${bulma.container}`}>
      <div className={styles.textCenter}>
        <h1 className={bulma.title}>What do you need to get started?</h1>
      </div>
      <GettingStarted />
    </section>
    <section
      className={`${bulma.container} ${styles.textCenter}`}
      style={{ marginTop: "40px" }}
    >
      <h1
        className={bulma.title}
        style={{ color: "#FFCC00", fontWeight: "bolder" }}
      >
        THE IDICIA DIFFERENCE
      </h1>
      <div className={`${bulma.columns} ${bulma["is-centered"]}`}>
        <div className={`${bulma.column} ${bulma["is-half"]}`}>
          <p>
            <strong>IDICIA is a whole new kind of data company.</strong>
          </p>
          <p>
            We have access to billions of consumer data records but we only pull
            the specific record we need at the very last possible second we need
            it, so it is as fresh as possible. Our data services are truly “just
            in time”. IDICIA is a real-time data quality solutions hub that
            accesses the best data on the market and some data our competitors
            only wish they had.
          </p>
          <p style={{ marginTop: "20px" }}>
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
    <Reveal effect="animated fadeIn">
      <ContactForm />
    </Reveal>
  </section>
);

HomePageTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default HomePageTemplate;
