import React from 'react';
import PropTypes from 'prop-types';

// Styles
import bulma from 'styles/bulma.scss';

const ContentCard = (props) => {

    //TODO these are probably pretty universal styles, abstract at some point and create central location for classes

    const sectionStyleEnum = {
      mainHero : `is-small is-primary`,
      lightHero : `is-medium is-light`,
      infoHero : `is-medium is-info`,
    };

    return (
        <section className= {`hero is-bold ${sectionStyleEnum[props.sectionStyle]} column is-10 is-offset-1`}>
          <div className="card animated fadeInUp">
            <div className="card-content">
              <div className='container'>
                {props.children}
              </div>
            </div>
          </div>
        </section>
    )
  };

  export default ContentCard;