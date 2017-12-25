import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.scss';

const ScrollToButton = ({ fadeIn, scrollTo, text }) => {
  const navigateTo = () => document
    .querySelector(scrollTo)
    .scrollIntoView({ behavior: 'smooth' });

  const btn = cn(styles.btn, { 'animated fadeInUp': fadeIn });

  return (
    <button className={btn} onClick={navigateTo} type="button">
      {text}
    </button>
  );
};

ScrollToButton.propTypes = {
  fadeIn: PropTypes.bool,
  scrollTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


export default ScrollToButton;
