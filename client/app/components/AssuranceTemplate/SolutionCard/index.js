import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const SolutionCard = ({subtitle, title, img, content, url}) => (
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
            <p className="card-title is-size-4">
              {title}
            </p>
            <p className="card-subtitle is-size-7">{subtitle}</p>
          </div>
        <div>
      </div>
        </div>
        <div className="content">
          {content}
        </div>
        <div className={styles.learnMore}>
          <a href = {url}>Learn More</a>
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
};

export default SolutionCard;
