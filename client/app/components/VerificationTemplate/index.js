import React from 'react';
import PropTypes from 'prop-types';
// import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';

// SharedComponents
import ContactUsCTA from '../ContactUsCTA';
import ContentCard from '../ContentCard';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const VerificationTemplate = ({ data }) => {
  const mediumCustomContent = `card ${bulma.content} ${bulma['is-medium']} ${styles.content}`;
  return (
    <div className={`columns is-multiline ${styles.verificationHero}`}>
    <ContentCard 
        sectionStyle = {'mainHero'}
        children = {<div className={`${styles.mainTitle}`} dangerouslySetInnerHTML={{ __html: data.slug }} />}
      />

      <ContentCard 
        sectionStyle = {'lightHero'}
        children = {<div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section1.html }} />}
      />

      <ContentCard 
        sectionStyle = {'infoHero'}
        children = {
                    <div>
                      {/* <div className={mediumCustomContent}><h1>{data.section2.title}</h1></div> */}
                        <div className='columns'>
                          <div className='column'>
                          <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.element4.html }} />
                          <br/>
                          <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.element2.html }} />
                          <br/>
                          <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.element3.html }} />
                          <br/>
                        </div>
                          <div className='column'>
                          <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.element1.html }} />
                          <br/>
                          <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.element5.html }} />
                          <br/>
                          <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.section2.element6.html }} />
                          <br/>
                        </div>
                        </div>
                        <div className={`${styles.content}`}>
                          <a href="/telified">Find Out More</a>
                        </div>
                    </div>
                    
                    }
      />

      {/* <ContentCard
        sectionStyle = {'lightHero'}
        children = {<div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block4.html }} />}
      /> */}

      {/* */}
    </div>
  );
};

// VerificationTemplate.propTypes = {
//   data: PropTypes.object.isRequired,
// };

export default VerificationTemplate;
