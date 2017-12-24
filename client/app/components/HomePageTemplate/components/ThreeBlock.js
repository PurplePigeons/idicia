import React, { PureComponent } from 'react';
// import Reveal from 'react-reveal';

// Styles
import styles from './threeblock.scss';

// components
import H2 from '../../H2';

// Set hover state to the given value. Using functional setState and currying
const hover = (hovered) => (state) => ({
  ...state,
  hover: hovered,
});

export default class ThreeBlock extends PureComponent {
  state = {
    hover: false,
  }

  handleEnter = () => this.setState(hover(true))

  handleLeave = () => this.setState(hover(false))

  render() {
    return (
      <div
        className="column is-3"
        style={{
          border: '1px solid #ddd',
          backgroundImage: `url(${this.props.backgroundImage})`,
          backgroundSize: 'cover',
          height: '200px',
          display: 'flex',
          flexAlign: 'center',
          alignItems: 'center',
        }}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        {!this.state.hover ? (
          <div style={{ flex: 1 }}>
            <div>
              <i
                className={`fa fa-3x ${this.props.icon}`}
                aria-hidden="true"
                style={{ color: '#FFCC00' }}
              />
            </div>
            <div>
              <H2>{this.props.title}</H2>
            </div>
          </div>
        ) : (
          <div className={styles.content}>{this.props.children}</div>
        )}
      </div>
    );
  }
}
