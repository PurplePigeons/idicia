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
const mediumCustomContent = `${bulma.content} ${bulma['is-medium']} ${styles.content}`;

const quickFacts = (data) => data && Object.keys(data)
    .filter((key) => key !== 'title')
    .reverse() // Since the keys come out reversed of the order we want...
    .map((key) => (
      <div className={bulma.columns} key={key}>
        <div className={`${bulma.column} ${bulma['is-one-third-tablet']} ${bulma['has-text-left']} ${styles.factLink}`} >
          {renderHtmlWithRouterLinks(data[key].title.html)}
        </div>
        <div className={`${bulma.column} ${bulma['has-text-left']}`} >
          {renderHtmlWithRouterLinks(data[key].text.html)}
        </div>
      </div>
    ));

const whatWeDoLinks = (data) => data && Object.keys(data)
    .filter((key) => key !== 'text')
    .reverse()
    .map((key) => (
      <div className={`${bulma.column} ${bulma['is-one-third-tablet']} ${bulma['has-text-centered']} ${styles.buttonLink}`} key={key}>
        {renderHtmlWithRouterLinks(data[key].html)}
      </div>
    ));

const iconColumns = (data) => data && Object.keys(data)
    .reverse()
    .map((key) => (
      <div className={`${bulma.column} ${bulma['has-text-centered']} ${styles.buttonLink}`} key={key}>
        <div className={styles.flexCenter}>
          <figure className={`${bulma.image} ${bulma['is-96x96']}`}>
            <img src={data[key].icon.secure_url} alt={`${key}-icon`} />
          </figure>
        </div>
        {renderHtmlWithRouterLinks(data[key].text.html)}
      </div>
    ));

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
          <h1 className={`${bulma.title} ${styles.mainTitle}`}>
            Welcome to Idicia
          </h1>
        </div>
      </div>
    </section>
    <section className={lightHero}>
      <div className={bulma['hero-body']}>
        <div className={bulma.container}>
          <div className={bulma.columns}>
            <div className={bulma.column}>
              <div className={`${mediumCustomContent} ${bulma['has-text-right']}`} dangerouslySetInnerHTML={{ __html: data.welcome.html }} />
            </div>
            <div className={`${bulma.column} ${styles.leftBorder}`}>
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
      <div className={bulma['hero-body']}>
        <div className={bulma.container}>
          <div className={`${mediumCustomContent} ${bulma['has-text-centered']}`} dangerouslySetInnerHTML={{ __html: data.whatWeDo.text.html }} />
          <div className={bulma.columns}>
            {whatWeDoLinks(data.whatWeDo)}
          </div>
        </div>
      </div>
    </section>
    <section className={lightHero}>
      <div className={bulma['hero-body']}>
        <div className={bulma.container}>
          <div className={bulma.columns}>
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
