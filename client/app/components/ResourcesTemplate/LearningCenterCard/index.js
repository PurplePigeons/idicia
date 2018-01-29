import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const LearningCenterCard = ({ title, links, caption }) => (
  <div className="column is-6">
    <details>
      <summary>
        <ul>
          <li className="titleName">{ title }</li>
        </ul>
      </summary>
      <div className="content" style={{ padding: '16px 24px' }}>
        {links.map((link, i) => <p key={link}><a target="_blank" href={link}>{ caption[i] }</a></p>)}
      </div>
    </details>
  </div>

);

LearningCenterCard.propTypes = {
  links: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LearningCenterCard;
