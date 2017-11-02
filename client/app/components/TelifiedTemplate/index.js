import React from 'react';
import PropTypes from 'prop-types';
import Reveal from 'react-reveal';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

// Components
import ContactForm from '../ContactForm';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const TelifiedTemplate = () => (
  <section>
    <section className={`${bulma.hero} ${bulma['is-fullheight']} ${bulma['is-primary']} ${styles.telifiedHero}`}>
      <div className={`${bulma.container} ${bulma['has-text-centered']} ${styles.telifiedContentStrip}`}>
        <div>
          <h1 className={`${bulma.title} ${bulma['is-1']} animated fadeInUp`}>
            Telephone Verified
          </h1>
          <p className="animated fadeInUp">
            Our service verifies consumer identity by providing direct access to the ultimate source of accurate contact data: the phone company billing database. Telified confirms the name, address and phone number supplied is indeed valid.
          </p>
        </div>
        <div>
          <h1 className={`${bulma.title} ${bulma['is-1']} ${styles.header2} animated fadeInUp`}>
            What Telified Can Do For You
          </h1>
          <ul className="animated fadeInUp">
            <li>Verify the name, address and phone number supplied in on-line orders is truly valid.</li>
            <li>Verify a telephone number is truly active or has been disconnected.</li>
            <li>Verify that consumer identity is valid and associated to the provided phone number.</li>
            <li>Verify the customer contact information you have on file is still current.</li>
            <li>Provide an alternative to credit verification for those with little or no credit history.</li>
            <li>Remove phone numbers made invalid over time.</li>
            <li>Detect if cell phone numbers have been reassigned.</li>
            <li>Help you stay in compliance with TCPA regulations.</li>
          </ul>
        </div>
      </div>
    </section>
    <div className={`${bulma.container} ${bulma['has-text-centered']} ${styles.section2}`}>
      <h1 className={`${bulma.title} ${bulma['is-1']}`}>The Telified Collection</h1>
      <div className={`${bulma.columns} ${bulma['is-multiline']}`}>
        <div className={`${bulma.column} ${bulma['is-half']} ${styles.collectionItem}`}>
          <div className={bulma.content}>
            <h1>NAME AND ADDRESS VERIFICATION</h1>
            <p>Telified 3D is our flagship version and is available for the purposes of identity verification and risk mitigation.  3D specifically focuses on verification of the 3 primary data attributes that form a consumer's identity: Name, Street Address and Telephone Number.</p>
          </div>
        </div>
        <div className={`${bulma.column} ${bulma['is-half']} ${styles.collectionItem}`}>
          <div className={bulma.content}>
            <h1>ACTIVE/INACTIVE</h1>
            <p>Telified AI answers the critical questions of whether or not a telephone number is active or inactive; whether it is connected and dialable or has been disconnected.</p>
          </div>
        </div>
        <div className={`${bulma.column} ${bulma['is-half']} ${styles.collectionItem}`}>
          <div className={bulma.content}>
            <h1>CONSENT REVERIFICATION</h1>
            <p>Telified CR is a special configuration of Telified designed specifically to provide companies with a mechanism for periodically reverifying a consumer's consent to communicate with a specific phone number. This can help buinesses prevent costly TCPA violations.</p>
            <p><a>For more details, download our Consent Reverification PDF.</a></p>
          </div>
        </div>
        <div className={`${bulma.column} ${bulma['is-half']} ${styles.collectionItem}`}>
          <div className={bulma.content}>
            <h1>INTERCONTINENTAL</h1>
            <p>Telified IC extends our Telified line of telephone verification services into the rest of the world. Telified-IC supports carrier, device type and general location information just like our Line Identification Services do in the US and Canada.</p>
            <p><a>See coverage map here.</a></p>
          </div>
        </div>
      </div>
      <hr />
      <h2 className={`${bulma.title} ${bulma['is-2']}`}>Want to learn more about Telified and our broad coverage option?</h2>
    </div>
    <Reveal effect="animated fadeIn">
      <ContactForm />
    </Reveal>
  </section>
);

TelifiedTemplate.propTypes = {

};

export default TelifiedTemplate;
