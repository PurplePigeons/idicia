import React from 'react';
import { Link } from 'react-router';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const infoHero = `${bulma.hero} ${bulma['is-bold']} ${bulma['is-medium']} ${bulma['is-info']}`;
const titleOptions = [
  'Let Us Brainstorm a Solution With You',
  'Interested? Contact us for more information',
  'Get In Touch With Us',
  'Leverage Our Expertise',
  'Contact Us For A Quote',
];
const taglineOptions = [
  'We would love to hear from you. Contact us today to get a quick quote or for more details about our services.',
  "We are authorities on consumer information and technology experts who care about the challenges you face in an ever-changing, digital world. Contact us today to get a quick quote or to get more details about our services. We're here to help.",
  "Send us a request for a quick quote; we'll get you tied into the IDICIA community and provide you with the most advanced information services on the market.",
];
const contactUsRoute = 'contact-us';
const buttonText = 'Contact Us';

const ContactUsCTA = () => {
  const titleSelector = Math.floor(Math.random() * titleOptions.length);
  const taglineSelector = Math.floor(Math.random() * taglineOptions.length);

  return (
    <section className={infoHero}>
      <div className={bulma['hero-body']}>
        <div className={bulma.container}>
          <h2 className={`${bulma.title} ${styles.contactUsTitle}`}>{titleOptions[titleSelector]}</h2>
          <h3 className={styles.contactUsText}>{taglineOptions[taglineSelector]}</h3>
          <Link to={`/${contactUsRoute}`} className={styles.contactUsButton}>{buttonText}</Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUsCTA;
