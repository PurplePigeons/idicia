import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import cn from 'classnames';

import styles from './styles.scss';

const CheckOut = ({ imgSrc, title, url }) => (
  <Link to={url} className={styles.learnMore}>
    <div className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={imgSrc} alt="placeholder" className={styles.roundedImg} />
        </figure>
      </div>
      <div className={cn('media-content', styles.mediaCentered)}>
        <h5 className="title is-5">
          { title }
        </h5>
      </div>
    </div>
  </Link>
);

CheckOut.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CheckOut;
