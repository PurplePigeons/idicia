import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import cn from 'classnames';

import styles from './styles.scss';

const ServicesCardContent = ({ subtitle, title, img, url }) => (
  <div>
    <div className="media">
      <div className={cn('media-left', styles.cardAvatar)}>
        <figure className="image is-64x64" style={{ margin: '0px' }}>
          {img}
        </figure>
      </div>
      <div className={cn('media-content', styles.paddingLeft)}>
        <h2 className={cn('title is-size-4', styles.title)}>
          {title}
        </h2>
        <h3 className={cn('subtitle is-size-6', styles.bottomMargin)}>
          {subtitle}<Link className={styles.learnMore} to={url}>Learn More</Link>
        </h3>
      </div>
    </div>
  </div>
);

ServicesCardContent.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // img: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default ServicesCardContent;
