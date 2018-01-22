import React from 'react';
import PropTypes from 'prop-types';

// SharedComponents
import ContactUsCTA from '../ContactUsCTA';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const TelecomTemplate = ({ data }) => {
  const mediumCustomContent = `content ${bulma['is-medium']} ${styles.content}`;

  //TODO this can be made more general and into a wrapper component
  const contentCard = (sectionStyle, children) => {

    //TODO these are probably pretty universal styles, abstract at some point and create central location for classes
    const boldHero = `${bulma.hero} ${bulma['is-bold']}`;

    const sectionStyleEnum = {
      mainHero : `${boldHero} is-small is-primary`,
      lightHero : `${boldHero} ${bulma['is-medium']} ${bulma['is-light']}`,
      infoHero : `${boldHero} ${bulma['is-medium']} ${bulma['is-info']}`,
    };

    return (
        <section className= {`${sectionStyleEnum[sectionStyle]} column is-10 is-offset-1`}>
          <div className="card animated fadeInUp">
            <div className="card-content">
              <div className={bulma['hero-body']}>
                <div className='container'>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  };

  return (

    //TODO multiple calls of function, maybe memoize & cache or loop?
    <div className="columns is-multiline">
      {contentCard('mainHero', <h1 className={`title ${styles.mainTitle}`}>
        {data.title}
      </h1>)}
      {contentCard('lightHero',
        <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block1.html }} />
      )}
      {contentCard('infoHero',
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
      )}
      {contentCard('lightHero',
        <div className={mediumCustomContent} dangerouslySetInnerHTML={{ __html: data.block4.html }} />
      )}
      <ContactUsCTA />
    </div>

  );
};

TelecomTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TelecomTemplate;
