import React from 'react';
// import PropTypes from 'prop-types';
import cn from 'classnames';
import BlogPreviewCard from './BlogPreviewCard';
import data from './data.json';

// Styles
import styles from './styles.scss';

const ResourcesTemplate = () => {
  // Leave the presentation of the card content to the card component, and sizing to the parent
  const blogPreviews = data.blogLatest.map(({ id, title, snippet, slug, img }) =>
    <div className="column is-4" key={id}>
      <BlogPreviewCard {...{ title, snippet, slug, img }} />
    </div>
  );

  return (
    <section>
      <section className={cn('hero is-fullheight', styles.resourcesHero)}>
        <div className="hero-body">
          <div className="container">
            <div className="card animated fadeInUp">
              <div className="card-content">
                <div className="content has-text-centered">
                  <h2 style={{ marginBottom: '0' }}>
                    Resources
                  </h2>
                  <hr />
                  <h1 className="title is-2" style={{ marginTop: '0' }}>
                    We Are Passionate About Identity
                  </h1>
                  <p>
                    Our blog topics typically center around fraud prevention, digital Identity consumer privacy, ethics, compliance, the future of information systems, the information of business, and the business of information.
                  </p>
                </div>
              </div>
            </div>
            <div className="card animated fadeInUp" style={{ marginTop: '3rem' }}>
              <div className="card-content">
                <div className="content has-text-centered">
                  <h3>
                    Latest Blog Posts
                  </h3>
                  <hr />
                  <p>
                    We think it’s important not only to meet our customer’s near-term data quality needs, but to source of educational information and direction. Below you can find infographics, white papers, and blog posts explaining Data Verification, Enrichment, Comparison, Quality, and Fraud Prevention uses and benefits.
                  </p>
                </div>
                <div className="columns is-multiline">
                  { blogPreviews }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="hero-body">
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
      </div> */}
    </section>
  );
};

// ResourcesTemplate.propTypes = {

// };

export default ResourcesTemplate;
