import React from 'react';
import cn from 'classnames';
import BlogPreviewCard from './BlogPreviewCard';
import CheckOut from './CheckOut';
import data from './data.json';
import LearningCenterCard from './LearningCenterCard';

// Styles
import styles from './styles.scss';

const ResourcesTemplate = () => {
  // Leave the presentation of the card content to the card component, and sizing to the parent
  const learningCenterSubTitle = 'Quick and easy access for everything you need to know.';
  const learningCenterContent = `Our learning center is filled with valuable resources, compiled into one location,
    for you to view and download, whether you are looking to become a new customer, research our products, or learn about 
    related industry information, we've provided you with informative documents, infographics and tutorial videos`;

  const blogPreviews = data.blogLatest.map(({ id, title, snippet, slug, img }) =>
    <div className="column is-4" key={id}>
      <BlogPreviewCard {...{ title, snippet, slug, img }} />
    </div>
  );

  /* Once developer page is complete add this to the checkOut object
    {
      "id": "2",
      "imgSrc": "images/developer.jpg",
      "title": "Check out our developer page",
      "url": "developer"
    }
  */
  const moreLinks = data.checkOut.map(({ id, imgSrc, title, url }) =>
    <div className="column" key={id}>
      <CheckOut {...{ imgSrc, title, url }} />
    </div>
  );

  const learningCenterCardContent = data.learningCenter.map(({ id, title, links }) =>
    <LearningCenterCard key={id} {...{ title, links }} />
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
                    Our blog topics typically center around fraud prevention, digital Identity consumer privacy, ethics,
                    compliance, the future of information systems, the information of business, and the business of information.
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
                    <h3>Learning Center</h3>
                    <h5>{learningCenterSubTitle}</h5>
                    <hr />
                    <p className="is-offset-by-1">
                      {learningCenterContent}
                    </p>
                  </div>
                  <div className="columns is-multiline is-centered">
                    {learningCenterCardContent}
                  </div>
                  <div>
                    Are we missing something? let us know! {/* TODO Contact us*/}
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
