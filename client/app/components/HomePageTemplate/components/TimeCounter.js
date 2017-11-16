import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TimeCounter extends Component {
  static propTypes = {
    initialValue: PropTypes.number.isRequired,
    increment: PropTypes.number.isRequired,
    interval: PropTypes.number.isRequired // in milliseconds
  };

  state = {
    count: 0,
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(({ count }) => ({
        count: count + this.props.increment
      }));
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <span>{this.props.initialValue + this.state.count}</span>;
  }
}
