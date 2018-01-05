import React from 'react';
// import PropTypes from 'prop-types';
import cn from 'classnames';
// import { renderHtmlWithRouterLinks } from 'utils/staticHtmlUtils';
import SolutionCard from './SolutionCard';
import data from './data.json';

// Styles
import styles from './styles.scss';

const SolutionsTemplate = () => {
  const filledCards = data.cardContent.map(({ title, subtitle, content, url, img, id }) =>
    <SolutionCard
      key={id}
      img={<img role="presentation" src={require(`./images/${img}.svg`)} style={{ fill: '#000066' }} />}
      {...{ title, subtitle, content, url }}
    />
  );

  const content = [
    `Doing business over the internet is both a blessing and a curse. The blessing is having access to a
   much larger pool of customers - the curse is that some of those "customers" will try to defraud you.`,
    `Some may not do so purposely but may just not give you the information you need to maintain your
   relationship or even correctly process their orders. It happens. Fortunately a majority of your
   customers will be great and a benefit to your business. Our solutions are designed to help you
   enhance your "good customer" data and protect yourself from the bad customers.`,
    `Most of our solutions are restricted to be used only for select purposes like preventing fraud,
   verifying a consumer's identity or providing information specifically when requested to do so and
   with a consumer's consent. This isn't maerketing data that anyone can access. But if you are doing
   something that is considered an exemption under TCPA or GLBA, we can help.`,
  ];

  return (
    <section>
      <section className={cn('hero is-fullheight is-primary', styles.aboutHero)}>
        <div className="hero-body">
          <div className="container">
            <div className="cardsContainer">
              <div className="columns is-multiline">
                {filledCards}
              </div>
            </div>
            <div className="card animated fadeInUp" style={{ marginTop: '5rem' }}>
              <div className="card-content">
                <div className="content">
                  <h1 className="has-text-centered">
                    Don't see a perfect fit for your business needs?
                  </h1>
                  <p className="has-text-centered">
                    We can work with you to get a custom solution in place thats perfect for you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-body">
        <div className="container">
          <div className="card animated fadeInUp">
            <div className="card-content">
              <div className="content">
                <h1 className="has-text-centered">
                  IDICIA: A bridge to customer assurance
                </h1>
                {content.map((el, i) => <p key={i}> {el} </p>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// SolutionsTemplate.propTypes = {

// };

export default SolutionsTemplate;
