import React, { PropTypes } from 'react';
import classNames from 'classnames';

// Styles
import bulma from 'styles/bulma.scss';

// Given a range of pages, render the numeric buttons for accessing respective pages
const RangeButtons = ({ currPage, numPages, getPosts }) => {
  const midPoint = Math.floor(numPages / 2);

  let pageRange;
  if (numPages <= 6) {
    // Build up an array of the page indicies from 1...numPages for our li's
    pageRange = Array(numPages).fill(0).map((e, i) => i + 1);
  } else if (numPages > 6 && currPage <= 3) {
    // Directly show 1-3 at this low range and show midpoint/end for sense of scale
    pageRange = [1, 2, 3, '...', midPoint, '...', numPages];
  } else if (numPages > 6 && currPage >= (numPages - 2)) {
    // Likewise, show last three at this range and beginning/midpoint for sense of scale
    pageRange = [1, '...', midPoint, '...', numPages - 2, numPages - 1, numPages];
  } else {
    // In all other cases, we want the current page to be focused and centered
    pageRange = [1, '...', currPage - 1, currPage, currPage + 1, '...', numPages];
  }

  const buttons = pageRange.map((val, idx) => {
    // Conditionally add the is-current class from bulma if the current page,
    // and apply proper styling to ellipses vs link elements
    const buttonStyle = classNames({
      [bulma['pagination-link']]: val !== '...',
      [bulma['pagination-ellipsis']]: val === '...',
      [bulma['is-current']]: currPage === val,
    });

    return (
      <li key={idx}>
        {val !== '...' ?
          <button className={buttonStyle} onClick={() => getPosts(val)}>{val}</button> :
          <button className={buttonStyle}>{val}</button>}
      </li>
    );
  });

  return (
    <ul className={bulma['pagination-list']}>
      {buttons}
    </ul>
  );
};

RangeButtons.propTypes = {
  currPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  getPosts: PropTypes.func.isRequired,
};

export default RangeButtons;
