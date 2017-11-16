import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Slider from 'react-slick';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

// Components

// Styles
import styles from './styles.scss';

const boldHero = 'hero is-bold';
const mainHero = `${boldHero} is-fullheight is-primary`;
const infoHero = `${boldHero} is-medium is-info`;
const lightHero = `${boldHero} is-medium is-light`;

const mediumCustomContent = `content is-medium ${styles.content}`;

const quickFacts = (data) => data && Object.keys(data)
    .filter((key) => key !== 'title')
    .reverse() // Since the keys come out reversed of the order we want...
    .map((key) => (
      <div className="columns" key={key}>
        <div className={`column is-one-third-tablet has-text-left ${styles.factLink}`} >
          {renderHtmlWithRouterLinks(data[key].title.html)}
        </div>
        <div className="column has-text-left">
          {renderHtmlWithRouterLinks(data[key].text.html)}
        </div>
      </div>
    ));

const whatWeDoLinks = (data) => data && Object.keys(data)
    .filter((key) => key !== 'text')
    .reverse()
    .map((key) => (
      <div className={`column is-one-third-tablet has-text-centered ${styles.buttonLink}`} key={key}>
        {renderHtmlWithRouterLinks(data[key].html)}
      </div>
    ));

const iconColumns = (data) => data && Object.keys(data)
    .reverse()
    .map((key) => (
      <div className={`column has-text-centered ${styles.buttonLink}`} key={key}>
        <div className={styles.flexCenter}>
          <figure className="image is-96x96">
            <img src={data[key].icon.secure_url} alt={`${key}-icon`} />
          </figure>
        </div>
        {renderHtmlWithRouterLinks(data[key].text.html)}
      </div>
    ));

const LeftNav = (props) =>
  <button className={styles.leftNav} onClick={props.onClick}>
    <span className="icon" aria-hidden="true">
      <i className="fa fa-arrow-left fa-4x"></i>
    </span>
  </button>;

const RightNav = (props) =>
  <button className={styles.rightNav} onClick={props.onClick}>
    <span className="icon" aria-hidden="true">
      <i className="fa fa-arrow-right fa-4x"></i>
    </span>
  </button>;

const sliderSettings = {
  prevArrow: <LeftNav />,
  nextArrow: <RightNav />,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '100px',
};

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
      <div className="hero-body">
        <div className="container">
          <h1 className={`title ${styles.mainTitle}`}>
            Welcome to Idicia
          </h1>
        </div>
      </div>
    </section>
    <section className={`${boldHero} is-large is-info`}>
      <div className="hero-body">
        <div className="container">
          <Slider {...sliderSettings}>
            <div className={`container ${styles.sliderContainer}`}>
              <div className="content has-text-centered">
                <h1>Real-time Encrypted Transactions for Identity Verification, Fraud Prevention, and Regulatory Compliance</h1>
                <h3>Every month we process millions of transactions across billions of miles... Each in a fraction of a second</h3>
                <p><a>Learn More</a></p>
              </div>
            </div>
            <div className={`container ${styles.sliderContainer}`}>
              <div className="content has-text-centered">
                <h1>Verify Consumer Account Applications Against Telecom Billing and Credit Bureau Files</h1>
                <h3>Our KYC (Know Your Customer) compliant mechanisms help you verify applicants our competition can't find</h3>
                <p><a>Learn More</a></p>
              </div>
            </div>
            <div className={`container ${styles.sliderContainer}`}>
              <div className="content has-text-centered">
                <h1>Drill Deeper into Consumer Provided Data and Reduce your Fraud Exposure</h1>
                <h3>Cross-verify multiple data points to ensure your new account data is accurate</h3>
                <p><a>Learn More</a></p>
              </div>
            </div>
            <div className={`container ${styles.sliderContainer}`}>
              <div className="content has-text-centered">
                <h1>Real-time, Authoritative, Direct Access to Data in the Cloud</h1>
                <h3>Fast, easy to use API access via SOAP or REST provides you simple access to Information as a Service (IaaS)</h3>
                <p><a>Learn More</a></p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
    <section className={lightHero}>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className={`${mediumCustomContent} has-text-right`} dangerouslySetInnerHTML={{ __html: data.welcome.html }} />
            </div>
            <div className={`column ${styles.leftBorder}`}>
              <div className={mediumCustomContent}><h2>{data.quickFacts.title}</h2></div>
              <div className={`${mediumCustomContent} ${styles.verticalCenter}`}>
                {quickFacts(data.quickFacts)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={infoHero}>
      <div className="hero-body">
        <div className="container">
          <div className={`${mediumCustomContent} has-text-centered`} dangerouslySetInnerHTML={{ __html: data.whatWeDo.text.html }} />
          <div className="columns">
            {whatWeDoLinks(data.whatWeDo)}
          </div>
        </div>
      </div>
    </section>
    <section className={lightHero}>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            {iconColumns(data.columns)}
          </div>
        </div>
      </div>
    </section>
  </section>
);

HomePageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePageTemplate;
