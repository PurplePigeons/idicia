import React from 'react';
import PropTypes from 'prop-types';
import Reveal from 'react-reveal';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

// Components
import ContactForm from 'components/ContactForm';
import ProfileCard from 'components/ProfileCard';
import ScrollToButton from 'components/ScrollToButton';

// Styles
import styles from './styles.scss';

const AboutUsTemplate = () => (
  <section>
    <section className={`hero is-fullheight is-primary ${styles.aboutHero}`}>
      <div className="hero-body">
        <div className="container is-vcentered">
          <div className="card animated fadeInUp">
            <div className="columns is-vcentered">
              <div className="column is-6">
                <div className="is-video">
                  <iframe src="https://www.youtube.com/embed/iiyQhxFFJtg" frameBorder="0" allowFullScreen />
                </div>
              </div>
              <div className="column is-6">
                <div className="card-content">
                  <div className="content">
                    <h1 className="has-text-centered">
                      Who We Are
                    </h1>
                    <p>
                      IDICIA gives you access to all the best information without the need to maintain it. Our specialty is combining highly accurate, authoritative and nearly ubiquitous telecom billing data with robust credit bureau data in a hybrid approach that uses the best qualities of each to give your business (or that of your customers) the confidence and assurance it needs when interacting with consumers over the internet. IDICIA services provide access to data enrichment and consumer data verification in our easy to implement API and we’re here to answer the phone when you have a question.
                    </p>
                    <hr />
                    <ScrollToButton scrollTo="#contactForm" text="Contact Us" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card animated fadeInUp" style={{ marginTop: '5rem' }}>
            <div className="card-content">
              <div className="content">
                <h1 className="has-text-centered">
                  Who Our Customers Are
                </h1>
                <hr />
                <p>
                  Businesses and organizations that need help verifying identity information, reducing identity and other forms of fraud, or need help meeting many of the complex regulatory compliance requirements involving consumer data and privacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className={`container has-text-centered ${styles.section2}`}>
      <h1 className="title is-1">
        Meet Our Team
      </h1>
      <hr />
      <div className="columns is-multiline">
        <ProfileCard
          name="Garth Froese"
          title="CEO"
          imgSrc="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087314/idicia/garth-froese.jpg"
          description="Very CEO wow guy ..."
        />
        <ProfileCard
          name="Scott Rice"
          title="COO"
          imgSrc="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/scott-rice.jpg"
          description="Very COO wow guy ..."
        />
        <ProfileCard
          name="Tom Liebe"
          title="CTO"
          imgSrc="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/tom-liebe.jpg"
          description="Very CTO wow guy ..."
        />
        <ProfileCard
          name="Dave Mori"
          title="CEO"
          imgSrc="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/dave-mori.jpg"
          description="Very CEO wow guy ..."
        />
        <ProfileCard
          name="Ken Dick"
          title="CFO"
          imgSrc="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/ken-dick.jpg"
          description="Very CFO wow guy ..."
        />
        <ProfileCard
          name="Stacy Halligan"
          title="Carrier Relations"
          imgSrc="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/stacey-halligan.jpg"
          description="Very wow relations lady ..."
        />
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
