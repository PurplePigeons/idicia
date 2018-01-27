import React from 'react';
import PropTypes from 'prop-types';

// SharedComponents
import ContactUsCTA from '../ContactUsCTA';
import ContentCard from '../ContentCard';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const HealthcareTemplate = ({ data }) => {


  const mediumCustomContent = `${bulma.content} ${bulma['is-medium']} ${styles.content}`;

  return (
    <div className={`${styles.healthcareHero}`}>
        <ContentCard
          sectionStyle={'mainHero'}
          children={<h1 className={`${styles.mainTitle}`}>{data.slug}</h1>}
        />

        <ContentCard
          sectionStyle={'lightHero'}
        children={
                    <div className={bulma.container}>
                      <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section1.html }} />
                    </div>
                  }
      />

        <ContentCard
          sectionStyle={'infoHero'}
          children={
                      <div className={bulma.container}>
                        <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.content.html }} />
                        <figure className={styles.flexImage}>
                          <img src={data.section2.image.secure_url} />
                        </figure>
                        <div className={bulma.columns}>
                          <div className={bulma.column}>
                            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.stub1.html }} />
                          </div>
                          <br/>
                          <div className={bulma.column}>
                            <div className={`${mediumCustomContent} ${styles.centeredList}`} dangerouslySetInnerHTML={{ __html: data.section2.stub2.html }} />
                          </div>
                          <br/>
                          <div className={bulma.column}>
                            <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.stub3.html }} />
                          </div>
                        </div>
                        <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.example.html }} />
                      </div>
                    }
        />

      <ContactUsCTA />
    </div>
  );
};

HealthcareTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HealthcareTemplate;
