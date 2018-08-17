import * as PropTypes from 'prop-types';
import React, { Component } from 'react';

const Squiggle = ({ visible }) => (
  <svg
    viewBox="0 0 60 40"
    style={{
      verticalAlign: 'middle',
      width: '1.2em',
      height: '0.8em',
      marginRight: '0.2em'
    }}
  >
    <rect x="10" y="0" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
    <path
      d="M21,2 C13.4580219,4.16027394 1.62349378,18.3117469 3,19 C9.03653312,22.0182666 25.2482171,10.3758914 30,8 C32.9363621,6.53181896 41.321398,1.67860195 39,4 C36.1186011,6.8813989 3.11316157,27.1131616 5,29 C10.3223659,34.3223659 30.6434647,19.7426141 35,18 C41.2281047,15.5087581 46.3445303,13.6554697 46,14 C42.8258073,17.1741927 36.9154967,19.650702 33,22 C30.3136243,23.6118254 17,31.162498 17,34 C17,40.4724865 54,12.4064021 54,17 C54,23.7416728 34,27.2286213 34,37"
      strokeWidth="4"
      fill="none"
      stroke="#03A9FC"
      strokeDasharray="270"
      strokeDashoffset={visible ? 0 : 270}
      style={{ transition: 'stroke-dashoffset 0.3s ease-out' }}
    />
  </svg>
);

const Cross = ({ visible }) => (
  <svg
    viewBox="0 0 60 40"
    style={{
      verticalAlign: 'middle',
      width: '1.2em',
      height: '0.8em',
      marginRight: '0.2em'
    }}
  >
    <rect x="10" y="0" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
    <path
      d="M 10 40 L 50 0"
      strokeWidth="4"
      fill="none"
      stroke="#03A9FC"
      strokeDasharray="60"
      strokeDashoffset={visible ? 0 : 60}
      style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
    />
    <path
      d="M 10 0 L 50 40"
      strokeWidth="4"
      fill="none"
      stroke="#03A9FC"
      strokeDasharray="60"
      strokeDashoffset={visible ? 0 : 60}
      style={{ transition: 'stroke-dashoffset 0.1s ease-out 0.1s' }}
    />
  </svg>
);

const CheckMark = ({ visible }) => (
  <svg
    style={{
      verticalAlign: 'middle',
      width: '1.2em',
      height: '0.8em',
      marginRight: '0.2em'
    }}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="10"
      stroke="#03A9FC"
      strokeDasharray="126.37"
      strokeDashoffset={visible ? 0 : 126.37}
      style={{ transition: 'stroke-dashoffset 0.2s ease-in-out' }}
    />
  </svg>
);

const checkStyleByType = {
  cross: Cross,
  squiggle: Squiggle,
  checkmark: CheckMark
};

export class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: props.checked || false };
  }
  render() {
    const { children } = this.props;
    const Check = checkStyleByType[this.props.type] || Squiggle;
    return (
      <div style={{ display: 'inline-block' }} onClick={() => this.setState({ checked: !this.state.checked })}>
        <input type="checkbox" value={this.state.checked} style={{ display: 'none' }} />
        <label htmlFor="option">
          <Check visible={this.state.checked} />
          {children}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.boolean,
  children: PropTypes.any,
  type: PropTypes.string
};
