import React, { Component } from "react";
import Reveal from "react-reveal";

// Styles
import bulma from "styles/bulma.scss";
import styles from "./threeblock.scss";

// components
import H2 from "../../H2";

export default class ThreeBlock extends Component {
  constructor() {
    super();
    this.state = {
      hover: false
    };
  }
  render() {
    return (
      <div
        className={`${bulma.column} ${bulma["is-3"]}`}
        style={{
          border: "1px solid #ddd",
          backgroundImage: `url(${this.props.backgroundImage})`,
          backgroundSize: "cover",
          height: "200px",
          display: "flex",
          flexAlign: "center",
          alignItems: "center"
        }}
        onMouseEnter={() =>
          this.setState(() => ({
            hover: true
          }))}
        onMouseLeave={() =>
          this.setState(() => ({
            hover: false
          }))}
      >
        {!this.state.hover ? (
          <div style={{ flex: 1 }}>
            <div>
              <i
                className={`fa ${this.props.icon} fa-3x`}
                aria-hidden="true"
                style={{ color: "#FFCC00" }}
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
