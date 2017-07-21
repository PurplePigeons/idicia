import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Slider from 'react-slick';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

// React-slick accepts components for prev/next arrows, and passes them the
// onClick handler for moving the carousel. Capture it from props
const LeftNav = ({ onClick }) =>
  <button className={styles.leftNav} onClick={onClick}>
    <span className={bulma.icon} aria-hidden="true">
      <i className="fa fa-arrow-left fa-4x"></i>
    </span>
  </button>;

const RightNav = ({ onClick }) =>
  <button className={styles.rightNav} onClick={onClick}>
    <span className={bulma.icon} aria-hidden="true">
      <i className="fa fa-arrow-right fa-4x"></i>
    </span>
  </button>;

// Adjust settings for the carousel. Using custom arrow components, centering, padding, controlling
// transition types, etc...
const sliderSettings = {
  prevArrow: <LeftNav />,
  nextArrow: <RightNav />,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '100px',
};

// Procedurally create slides based on the given array
const generateSlides = (slideStack) => slideStack.map((slide, idx) => (
  <div className={`${bulma.container} ${styles.sliderContainer}`} key={idx}>
    <div className={`${bulma.content} ${bulma['has-text-centered']}`}>
      <h1>{slide.headline}</h1>
      <h3>{slide.secondaryText}</h3>
      <Link to={slide.link.route}>{slide.link.text}</Link>
    </div>
  </div>
));

const Carousel = ({ slides }) => (
  <Slider {...sliderSettings}>
    {generateSlides(slides)}
  </Slider>
);

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
};

LeftNav.propTypes = {
  onClick: PropTypes.func.isRequired,
};

RightNav.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Carousel;
