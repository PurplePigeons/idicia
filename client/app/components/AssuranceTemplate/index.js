import React from 'react';
import PropTypes from 'prop-types';
import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';
import SolutionCard from './SolutionCard'
import data from './data.json';
// Components

// Styles
import styles from './styles.scss';

const AssuranceTemplate = () => {

   const filledCards = (location) => data.cardContent[location].map(({title, subtitle, content, url, imgSrc},i) =>
     <SolutionCard {...{title, subtitle, content, url, imgSrc}}/>
   );

  const content = [`Doing business over the internet is both a blessing and a curse. The blessing is having access to a
   much larger pool of customers - the curse is that some of those "customers" will try to defraud you.`,
     `Some may not do so purposely but may just not give you the information you need to maintain your
   relationship or even correctly process their orders. It happens. Fortunately a majority of your
   customers will be great and a benefit to your business. Our solutions are designed to help you
   enhance your "good customer" data and protect yourself from the bad customers.`,
    `Most of our solutions are restricted to be used only for select purposes like preventing fraud,
   verifying a consumer's identity or providing information specifically when requested to do so and
   with a consumer's consent. This isn't maerketing data that anyone can access. But if you are doing
   something that is considered an exemption under TCPA or GLBA, we can help.`];

  return (
    <section>
      <section className={`hero is-fullheight is-primary ${styles.aboutHero}`}>
        <div className="hero-body">
          <div className="container is-vcentered">
              <div className="cardsContainer">
                <div className="columns">
                {filledCards('top')}
                </div>
                <div className="columns">
                {filledCards('bottom')}
                </div>
              </div>
                <div className="card animated fadeInUp" style={{ marginTop: '5rem' }}>
                  <div className="card-content">
                    <div className="content">
                      <p>
                        Don't see a perfect fit for your business needs?
                        We can work with you to get a custom solution in place thats perfect for you!
                      </p>
                    </div>
                  </div>
                </div>
            <div className="card animated fadeInUp" style={{ marginTop: '5rem' }}>
              <div className="card-content">
                <div className="content">
                  <h1 className="has-text-centered">
                    IDICIA: A bridge to customer assurance
                  </h1>
                  {content.map((el)=> <p> {el} </p>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
};


AssuranceTemplate.propTypes = {

};

export default AssuranceTemplate;
