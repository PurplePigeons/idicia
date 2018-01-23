import React from 'react';
// import PropTypes from 'prop-types';
import Reveal from 'react-reveal';
// import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

// SharedComponents
import ContactForm from 'components/ContactForm';
import ProfileCard from 'components/ProfileCard';
import ScrollToButton from 'components/ScrollToButton';

// Styles
import styles from './styles.scss';

const AboutUsTemplate = () => (
  <section>
    <section className={`hero is-fullheight is-primary ${styles.aboutHero}`}>
      <div className="hero-body">
        <div className="container">
          <div className="card animated fadeInUp">
            <div className="columns is-vcentered">
              <div className="column is-6">
                <div className="is-video">
                  <iframe src="https://www.youtube.com/embed/iiyQhxFFJtg?modestbranding=1&controls=0&showinfo=0" frameBorder="0" allowFullScreen />
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
          description="Garth builds bridges.Bridges between opportunities, people, and businesses. 
          He hikes, fishes, and cycles when possible."
          liUrl="https://www.linkedin.com/pub/garth-froese/b/863/324"
        />
        <ProfileCard
          name="Scott Rice"
          title="COO"
          imgSrc="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/scott-rice.jpg"
          description="Scott is our data nerd. Formerly a principal data scientist for one of the big 3 
          credit bureaus. Scott writes and remodels his house."
          liUrl="https://www.linkedin.com/pub/scott-rice/3/424/67"
        />
        <ProfileCard
          name="Tom Liebe"
          title="CTO"
          imgSrc="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/tom-liebe.jpg"
          description="As our head of tech, he manages development and maintenance of our services. 
          Tom enjoys reading, music and family time."
          liUrl="https://ca.linkedin.com/pub/tom-liebe/8/a59/83"
        />
        <ProfileCard
          name="Dave Mori"
          title="VP-BD"
          imgSrc="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/dave-mori.jpg"
          description="BBQ aficionado, judo practicioner, and father of 3 under 8. Dave is a great 
          listener and can help you find your business solution."
          liUrl="https://ca.linkedin.com/in/davemori"
        />
        <ProfileCard
          name="Ken Dick"
          title="CFO"
          imgSrc="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/ken-dick.jpg"
          description="Ken is our numbers guy and ensures everyone gets paid when he isn't driving his convertible or motorcycle on roadtrips."
          liUrl="https://ca.linkedin.com/pub/ken-dick/69/830/410"
        />
        <ProfileCard
          name="Stacy Halligan"
          title="Carrier Rel."
          imgSrc="http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087315/idicia/stacey-halligan.jpg"
          description={`While Stacey is from Texas, don’t let the "y'all" fool you. Stacey is responsible for accessing our great telecommunications data.`}
          liUrl="https://www.linkedin.com/pub/stacey-halligan/94/83b/a6b"
        />
      </div>
    </div>
    <Reveal effect="animated fadeIn">
      <ContactForm />
    </Reveal>
  </section>
);

// AboutUsTemplate.propTypes = {

// };

export default AboutUsTemplate;
