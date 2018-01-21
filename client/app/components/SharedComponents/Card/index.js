import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './styles.scss';

// TODO - update to take img as a src prop and possibly provide sizing as another prop,
// instead of accepting an <img> object directly

const Card = ({ subtitle, title, img, content, url, cardSize = 'is-4' }) => (
  <div className={`column ${cardSize} `}>
    <div className="card animated fadeInUp">
      <div className="card-content">
        <div className="media">
          <div className={`media-left ${styles.cardAvatar}`}>
            <figure className="image is-48x48 ">
              {img}
            </figure>
          </div>
          <div className="media-content">
            <h1 className="title is-size-4">
              {title}
            </h1>
            <h2 className="subtitle is-size-7">
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

Card.propTypes = {
  cardSize: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
