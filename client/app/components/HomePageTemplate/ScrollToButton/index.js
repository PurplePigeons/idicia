import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function ScrollToButton({ scrollToSelection, buttonText }) {
  const navigateTo = () => document.querySelector(scrollToSelection).scrollIntoView({ behavior: 'smooth' });

  return (
    <button className={styles.btn} onClick={() => navigateTo} type="button"> {buttonText} </button>
  );
}

ScrollToButton.propTypes = {
  scrollToSelection: PropTypes.string,
  buttonText: PropTypes.string,
};

export default ScrollToButton;
