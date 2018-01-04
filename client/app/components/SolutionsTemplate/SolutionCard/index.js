import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './styles.scss';

const SolutionCard = ({ subtitle, title, img, content, url }) => (
  <div className="column is-4">
    <div className="card animated fadeInUp">
      <div className="card-content">
        <div className="media">
          <div className={`media-left ${styles.cardAvatar}`}>
            <figure className="image is-48x48 ">
              {img}
            </figure>
          </div>
          <div className="media-content">
            <h1 className="title is-size-4 has-text-dark">
              {title}
            </h1>
            <h2 className="subtitle is-size-7 has-text-dark">
              {subtitle}
            </h2>
          </div>
        </div>
        <div className="content">
          <p>{content}</p>
        </div>
        <div className={styles.learnMore}>
          <Link to={url}>Learn More</Link>
        </div>
      </div>
    </div>
  </div>
);

SolutionCard.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SolutionCard;
