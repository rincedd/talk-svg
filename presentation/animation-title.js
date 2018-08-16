import React, { Component } from 'react';

export class AnimationTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { dashOffset: -100 };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ dashOffset: 0 }), 50);
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 90" style={{ width: '100%' }}>
        <text
          x="80"
          y="45"
          textAnchor="middle"
          fontSize="12px"
          fontWeight="bold"
          stroke="#03A9FC"
          strokeWidth="0.3"
          strokeDasharray="100 100"
          strokeDashoffset={this.state.dashOffset}
          style={{ transition: 'stroke-dashoffset 3s ease-out' }}
          fill="none"
        >
          Animation
        </text>
      </svg>
    );
  }
}
