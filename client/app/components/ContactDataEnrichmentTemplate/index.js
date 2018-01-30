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
    <section className={`hero is-primary is-fullheight ${styles.telifiedHero}`}>
      <div className={`container has-text-centered ${styles.telifiedContentStrip}`}>
        <div>
          <h1 className="title is-1 animated fadeInUp">
            {data.slug}
          </h1>
          <p className="card animated fadeInUp">
            Our service verifies consumer identity by providing direct access to the ultimate source of accurate contact data: the phone company billing database. Telified confirms the name, address and phone number supplied is indeed valid.
          </p>
        </div>
        <div>
          
        </div>
      </div>
      
    </section>
    <ContentCard
      sectionStyle={'infoHero'}
      children={
                  <div className={''}>
                    <h1 className={`is-1 has-text-centered ${styles.header2} animated fadeInUp`}>
                      {data.section2.title}
                    </h1>
                      <div className={`card content has-text-centered is-multiline ${styles.collectionItem}`}>
                        <h1>{data.section2.block1.header}</h1>
                        <p>{data.section2.block1.content}</p>
                      </div>
                      <div className={`card content has-text-centered ${styles.collectionItem}`}>
                        <h1>{data.section2.block2.header}</h1>
                        <p>{data.section2.block2.content}</p>
                      </div>
                      <div className={`card content has-text-centered is-multiline ${styles.collectionItem}`}>
                        <h1>{data.section2.block3.header}</h1>
                        <p>{data.section2.block3.content}</p>
                      </div>
                      <div className={`card content has-text-centered ${styles.collectionItem}`}>
                        <h1>{data.section2.block4.header}</h1>
                        <p>{data.section2.block4.content}</p>
                      </div>
                    </div>
                  }
      />
       <ContactUsCTA />
        
</section>
);

TelifiedTemplate.propTypes = {

};

export default TelifiedTemplate;
