import React from 'react';
import PropTypes from 'prop-types';
import Reveal from 'react-reveal';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';
import ContactUsCTA from '../ContactUsCTA';
import ContentCard from '../ContentCard';
import data from './data.json';

// Styles
import styles from './styles.scss';
import bulma from 'styles/bulma.scss';

const TelifiedTemplate = () => (
  <section>
    <section className={`hero is-fullheight is-primary ${styles.telifiedHero}`}>
      <div className={`container has-text-centered ${styles.telifiedContentStrip}`}>
        <div>
          <h1 className="title is-1 animated fadeInUp">
            {data.slug}
          </h1>
          <p className="card card-content animated fadeInUp">
            {data.section1}
          </p>
          <br/>
          <p className="card card-content animated fadeInUp">
            {data.section2}
          </p>
          <br/>
          <p className="card card-content animated fadeInUp">
            {data.section3}
          </p>
          <br/>
        </div>
        {/* <div>
          <h1 className={`title is-1 ${styles.header2} animated fadeInUp`}>
            What Telified Can Do For You
          </h1>
        </div> */}
      </div>
      
    </section>
    {/* <ContentCard
      sectionStyle={'infoHero'}
      children={
                <div className={''}>
                  <div className={`content has-text-centered is-multiline ${styles.collectionItem}`}>
                        <h1>NAME AND ADDRESS VERIFICATION</h1>
                        <p>Telified 3D is our flagship version and is available for the purposes of identity verification and risk mitigation.  3D specifically focuses on verification of the 3 primary data attributes that form a consumer's identity: Name, Street Address and Telephone Number.</p>
                  </div>
                  <div className={`content has-text-centered ${styles.collectionItem}`}>
                      <h1>ACTIVE/INACTIVE</h1>
                      <p>Telified AI answers the critical questions of whether or not a telephone number is active or inactive; whether it is connected and dialable or has been disconnected.</p>
                  </div>
                  <div className={`content has-text-centered is-multiline ${styles.collectionItem}`}>
                    <h1>CONSENT REVERIFICATION</h1>
                    <p>Telified CR is a special configuration of Telified designed specifically to provide companies with a mechanism for periodically reverifying a consumer's consent to communicate with a specific phone number. This can help buinesses prevent costly TCPA violations.</p>
                    <p><a>For more details, download our Consent Reverification PDF.</a></p>
                  </div>
                  <div className={`content has-text-centered ${styles.collectionItem}`}>
                    <h1>INTERCONTINENTAL</h1>
                    <p>Telified IC extends our Telified line of telephone verification services into the rest of the world. Telified-IC supports carrier, device type and general location information just like our Line Identification Services do in the US and Canada.</p>
                    <p><a>See coverage map here.</a></p>
                    </div>
                    <h2 className="is-2 has-text-centered">Want to learn more about Telified and our broad coverage option?</h2>
                  </div>
                  }
      /> */}
       <ContactUsCTA />
        
</section>
);

TelifiedTemplate.propTypes = {

};

export default TelifiedTemplate;
