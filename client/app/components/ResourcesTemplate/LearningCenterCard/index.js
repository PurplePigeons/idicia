import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const LearningCenterCard = ({title, links}) => (
  <div className="column is-6">
    <details>
      <summary>
        <ul>
          <li className="titleName">{title}</li>
        </ul>
      </summary>
      <div className="content" style={{ padding: "16px 24px" }}>
        {Object.values(...links).map(el => <p>{el}</p>)}
      </div>
    </details>
  </div>

);

LearningCenterCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LearningCenterCard;
