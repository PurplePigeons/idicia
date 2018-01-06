import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.scss';

class ProfileCard extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liUrl: PropTypes.string.isRequired,
  }

  state = {
    active: false,
  }

  handleClick = () => this.setState((state) => ({
    ...state,
    active: !state.active,
  }));

  render() {
    const {
      name,
      title,
      imgSrc,
      description,
      liUrl,
      // ...social link urls?
    } = this.props;

    const { active } = this.state;

    const card = cn(styles['material-card'], { [styles['mc-active']]: this.state.active });
    const actionIcon = cn('fa', { 'fa-bars': !active, 'fa-arrow-left': active });

    return (
      <div className="column is-4">
        <article className={card}>
          <h2>
            <span>
              {name}
            </span>
            <strong style={{ color: '#FFF' }}>
              {title}
            </strong>
          </h2>
          <div className={styles['mc-content']}>
            <div className={styles['img-container']}>
              <img
                className={styles['img-responsive']}
                src={imgSrc}
                style={{ width: '100%' }}
              />
            </div>
            <div className={styles['mc-description']}>
              {description}
            </div>
          </div>
          <a className={styles['mc-btn-action']} onClick={this.handleClick}>
            <span className="icon">
              <i className={actionIcon} style={{color: "#ffcc00"}} />
            </span>
          </a>
          <div className={styles['mc-footer']}>
            {/* <a className="fa fa-fw fa-facebook"></a> */}
            {/* <a className="fa fa-fw fa-twitter"></a> */}
            <a className="fa fa-fw fa-linkedin" href={liUrl}></a>
            {/* <a className="fa fa-fw fa-google-plus"></a> */}
          </div>
        </article>
      </div>
    );
  }
}

export default ProfileCard;
