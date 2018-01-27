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
          <h1 className={`title is-1 animated fadeInUp`}>
            {data.section1}
          </h1>
          <div className="card">
          <ul className="card-content animated fadeInUp">
            <li className="content">{data.section2.element1}</li>
            <li className="content">{data.section2.element2}</li>
            <li className="content">{data.section2.element3}</li>
            <li className="content">{data.section2.element4}</li>
            <li className="content">{data.section2.element5}</li>
            <li className="content">{data.section2.element6}</li>
            <li className="content">{data.section2.element7}</li>
          </ul>
        </div>
        <br/>
        <div className="card">
        <p className="content">{data.section2.element8}</p>
        </div>
        </div>
      </div>
      
    </section>
    <ContentCard
      sectionStyle={'infoHero'}
      children={
                <div className={''}>
                  <div className={`content has-text-centered is-multiline ${styles.collectionItem}`}>
                        <h1>{data.section3.title}</h1>
                        <p>{data.section3.content}</p>
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
