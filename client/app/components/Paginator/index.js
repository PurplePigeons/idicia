import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';

// Styles
import styles from './styles.scss';

// SharedComponents
import RangeButtons from './RangeButtons';

const Paginator = ({ currPage, numPages }) => {
  const paginatorStyle = classNames(
    'pagination',
    'is-right',
    'is-small',
    styles.paginator,
  );

  // Visually disable the prev/next buttons when at end ranges
  const prevStyle = classNames(
    'pagination-previous',
  );

  const nextStyle = classNames(
    'pagination-next',
  );

  return (
    <nav className={paginatorStyle}>
      {currPage > 1
        ? <Link to={`/blog/page/${currPage - 1}`} className={prevStyle}>Previous</Link>
        : <Link to={`/blog/page/${currPage}`} className={prevStyle} disabled onClick={(e) => e.preventDefault()}>Previous</Link>
      }
      {currPage < numPages
        ? <Link to={`/blog/page/${currPage + 1}`} className={nextStyle}>Next</Link>
        : <Link to={`/blog/page/${currPage}`} className={nextStyle} disabled onClick={(e) => e.preventDefault()}>Next</Link>
      }
      <RangeButtons currPage={currPage} numPages={numPages} />
    </nav>
  );
};

Paginator.propTypes = {
  currPage: PropTypes.number,
  numPages: PropTypes.number,
};

export default Paginator;
