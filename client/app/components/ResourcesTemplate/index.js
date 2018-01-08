import React from 'react';
import cn from 'classnames';
import BlogPreviewCard from './BlogPreviewCard';
import CheckOut from './CheckOut';
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

  const moreLinks = data.checkOut.map(({ id, imgSrc, title, url }) =>
    <div className="column" key={id}>
      <CheckOut {...{ imgSrc, title, url }} />
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
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className={styles.cardContainer}>
              <div className="card animated fadeInUp">
                <div className="card-content">
                  <div className="columns">
                    { moreLinks }
                  </div>
                </div>
              </div>
              <div className="card animated fadeInUp">
                <div className="card-content">
                  <div className="content has-text-centered">
                    <h1>Learning Center</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesTemplate;
