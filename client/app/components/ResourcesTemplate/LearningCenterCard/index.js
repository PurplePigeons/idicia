import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const LearningCenterCard = ({ title, links }) => (
  <div className="column is-6">
    <details>
      <summary>
        <ul>
          <li className="titleName">{title}</li>
        </ul>
      </summary>
      <div className="content" style={{ padding: '16px 24px' }}>
        {links.map((el) => <p key={el}>{el}</p>)}
      </div>
    </details>
  </div>

);

LearningCenterCard.propTypes = {
  links: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default LearningCenterCard;
