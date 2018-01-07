import React from 'react';
// import PropTypes from 'prop-types';
import cn from 'classnames';
import Card from 'components/SharedComponents/Card';
import ServicesCardContent from './ServicesCardContent';
import json from './data.json';

// Styles
import styles from './styles.scss';

const ServicesTemplate = () => {
  const filledCardsTop = json.data.topCardContent.map(({ title, content, url, img, id }) =>
    <Card
      key={id}
      cardSize="is-6"
      {...{ title,  content, url, img }}
    />
  );

  const filledCardServices = json.data.serviceCardContent.map(({ id, title, subtitle, url }) =>
    <ServicesCardContent
      key={id}
      {...{ title, subtitle, url }}
    />
  );

  const content = ` The Telified™ Collection of consumer identity verification services was 
    the first and only commercially available platform to use telephone-company 
    billing information for the purpose of ID Verification and Fraud Prevention 
    outside of the Telecommunications Industry.  Telified uses direct access to 
    authoritative reference sources to deliver results instantly over the internet.
    Each service within the collection verifies one or more consumer 
    identity attributes using the internal restricted-use-only databases of 
    landline, VoIP and wireless telephone service providers.`;

  return (
    <section>
      <section className={cn('hero is-fullheight is-primary', styles.aboutHero)}>
        <div className="hero-body">
          <div className="container">
            <div className="cardsContainer">
              <div className="container">
                <div className="card animated fadeInUp">
                  <div className="card-content">
                    <div className="content has-text-centered">
                      <h2 style={{ marginBottom: '0' }}>
                        Our Featured Service:
                      </h2>
                      <h1 className="title is-2 has-text-dark" style={{ marginTop: '0' }}>
                        The Telified Collection
                      </h1>
                      <h3 style={{ marginTop: '0' }}>
                        Four unique services, each with its own legal access and allowable uses.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-multiline is-centered is-variable is-4" style={{ marginTop: '3em' }}>
                {filledCardsTop}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-body">
        <div className="container">
          <div className="card animated fadeInUp">
            <div className="card-content">
              <div className="content columns">
                <div className="column is-11 is-centered">
                  <h1> Services </h1>
                  {filledCardServices}
                  <p> We also build custom solutions. Let's talk! </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card animated fadeInUp" style={{ marginTop: '5em' }}>
            <div className="card-content">
              <div className="content has-text-centered">
                <h1>
                  TELIFIED: Telephone Verified
                </h1>
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ServicesTemplate.propTypes = {

// };

export default ServicesTemplate;
