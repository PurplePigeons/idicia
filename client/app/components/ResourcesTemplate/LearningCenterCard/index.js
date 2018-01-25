import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const LearningCenterCard = ({ title, links, caption }) => (
  <div className="column is-6">
    <details>
      <summary>
        <ul>
          <li className="titleName">{title}</li>
        </ul>
      </summary>
      <div className="content" style={{ padding: '16px 24px' }}>
        {links.map((el, i) => <p><a key={el} target="_blank" href={el}>{caption[i]}</a></p>)}
      </div>
    </details>
  </div>

);

LearningCenterCard.propTypes = {
  links: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};

export default LearningCenterCard;
