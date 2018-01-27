import React from 'react';
import PropTypes from 'prop-types';

// SharedComponents
import ContactUsCTA from '../ContactUsCTA';
import ContentCard from '../ContentCard';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const TelecomTemplate = ({ data }) => {
  const mediumCustomContent = `content is-medium ${styles.content}`;


  return (
    //TODO multiple calls of function, maybe memoize & cache or loop?
    <div className={`columns is-multiline ${styles.telecomHero}`}>
      <ContentCard  
        sectionStyle = {'mainHero'}
        children = {<h1 className={`${styles.mainTitle}`}>{data.title}</h1>}
      />

      <ContentCard 
        sectionStyle = {'lightHero'}
        children = {<div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block1.html }} />}
      />

      <ContentCard 
        sectionStyle = {'infoHero'}
        children = {
                    <div>
                      <div className={mediumCustomContent}><h1>{data.block2.title}</h1></div>
                        <div className='columns'>
                          <div className='column'>
                          <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block2.column1.html }} />
                        </div>
                          <div className='column'>
                          <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block2.column2.html }} />
                        </div>
                        </div>
                        <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block2.content.html }}/>
                    </div>
                    }
      />

      <ContentCard
        sectionStyle = {'lightHero'}
        children = {<div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block4.html }} />}
      />

      <ContactUsCTA />
    </div>

  );
};

TelecomTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TelecomTemplate;
