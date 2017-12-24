import React from 'react';
import PropTypes from 'prop-types';
import Reveal from 'react-reveal';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

// Components
import ContactForm from '../ContactForm';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const AboutUsTemplate = () => (
  <section>
    <section className={`${bulma.hero} ${bulma['is-fullheight']} ${bulma['is-primary']} ${styles.aboutHero}`}>
      <div className={`${bulma.container} ${bulma['has-text-centered']} ${styles.aboutContentStrip}`}>
        <div>
          <h1 className={`${bulma.title} ${bulma['is-1']} animated fadeInUp`}>
            Who We Are
          </h1>
          <p className="animated fadeInUp">
            IDICIA gives you access to all the best information without the need to maintain it. Our specialty is combining highly accurate, authoritative and nearly ubiquitous telecom billing data with robust credit bureau data in a hybrid approach that uses the best qualities of each to give your business (or that of your customers) the confidence and assurance it needs when interacting with consumers over the internet. IDICIA services provide access to data enrichment and consumer data verification in our easy to implement API and we’re here to answer the phone when you have a question.
          </p>
        </div>
        <div>
          <h1 className={`${bulma.title} ${bulma['is-1']} ${styles.header2} animated fadeInUp`}>
            Who Our Customers Are
          </h1>
          <p className="animated fadeInUp">
            Businesses and organizations that need help verifying identity information, reducing identity and other forms of fraud, or need help meeting many of the complex regulatory compliance requirements involving consumer data and privacy
          </p>
        </div>
      </div>
    </section>
    <div className={`${bulma.container} ${bulma['has-text-centered']} ${styles.section2}`}>
      <h1 className={`${bulma.title} ${bulma['is-1']}`}>
        Meet Our Team
      </h1>
      <hr />
      <div className={`${bulma.columns} ${bulma['is-multiline']}`}>
        <div className={`${bulma.column} ${bulma['is-one-third']} ${styles.memberPhoto}`}>
          <img role="presentation" src="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087314/idicia/garth-froese.jpg" />
        </div>
        <div className={`${bulma.column} ${bulma['is-one-third']} ${styles.memberPhoto}`}>
          <img role="presentation" src="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/scott-rice.jpg" />
        </div>
        <div className={`${bulma.column} ${bulma['is-one-third']} ${styles.memberPhoto}`}>
          <img role="presentation" src="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/tom-liebe.jpg" />
        </div>
        <div className={`${bulma.column} ${bulma['is-one-third']} ${styles.memberPhoto}`}>
          <img role="presentation" src="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/dave-mori.jpg" />
        </div>
        <div className={`${bulma.column} ${bulma['is-one-third']} ${styles.memberPhoto}`}>
          <img role="presentation" src="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/ken-dick.jpg" />
        </div>
        <div className={`${bulma.column} ${bulma['is-one-third']} ${styles.memberPhoto}`}>
          <img role="presentation" src="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/stacey-halligan.jpg" />
        </div>
      </div>
      <hr />
      <h2 className={`${bulma.title} ${bulma['is-2']}`}>
        IDICIA: More Than Just A Business
      </h2>
      <div className={styles.videoWrapper}>
        <iframe src="https://www.youtube.com/embed/iiyQhxFFJtg" frameBorder="0" allowFullScreen />
      </div>
    </div>
    <Reveal effect="animated fadeIn">
      <ContactForm />
    </Reveal>
  </section>
);

AboutUsTemplate.propTypes = {

};

export default AboutUsTemplate;
