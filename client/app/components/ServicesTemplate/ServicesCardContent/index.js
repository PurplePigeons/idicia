import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import cn from 'classnames';

import styles from './styles.scss';

const ServicesCardContent = ({ subtitle, title, img }) => (
  <div>
    <div className="media">
      <div className={cn('media-left', styles.cardAvatar)}>
        <figure className="image is-64x64 " style={{margin: '0px'}}>
          {img}
        </figure>
      </div>
      <div className={cn('media-content', styles.paddingLeft)}>
        <h2 className={cn('title is-size-4 has-text-dark', styles.title)}>
          {title}
        </h2>
        <h3 className={cn('subtitle is-size-6 has-text-dark', styles.bottomMargin)}>
          {subtitle}
        </h3>
      </div>
    </div>
  </div>
);

ServicesCardContent.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  //img: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

export default ServicesCardContent;
