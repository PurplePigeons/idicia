import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import Slider from 'react-slick';
import Reveal from 'react-reveal';

// Components
import QuickFacts from './QuickFacts';
import ServiceIcons from './ServiceIcons';
import WhatWeDo from './WhatWeDo';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const boldHero = `${bulma.hero} ${bulma['is-bold']}`;
const mainHero = `${bulma.hero} ${bulma['is-fullheight']} ${bulma['is-primary']} ${styles.landingHero}`;
const infoHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-info']}`;
const lightHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-light']}`;
const mediumCustomContent = `${bulma.content} ${bulma['is-medium']} ${styles.content}`;

const sliders = (data) => data.map((slider, idx) => (
  <div className={`${bulma.container} ${styles.sliderContainer}`} key={idx}>
    <div className={`${bulma.content} ${bulma['has-text-centered']}`}>
      <h1>{slider.headline}</h1>
      <h3>{slider.secondaryText}</h3>
      <Link to={slider.link.route}>{slider.link.text}</Link>
    </div>
  </div>
));

const LeftNav = (props) =>
  <button className={styles.leftNav} onClick={props.onClick}>
    <span className={bulma.icon} aria-hidden="true">
      <i className="fa fa-arrow-left fa-4x"></i>
    </span>
  </button>;

const RightNav = (props) =>
  <button className={styles.rightNav} onClick={props.onClick}>
    <span className={bulma.icon} aria-hidden="true">
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
              <Slider {...sliderSettings}>
                {sliders(data.sliders)}
              </Slider>
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
  </section>
);

HomePageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePageTemplate;
