import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Petal = ({ angle = 0 }) => (
  <path
    transform={`rotate(${angle} .402 4.184)`}
    fill={`hsl(${angle}, 100%, 50%)`}
    stroke="gray"
    strokeWidth="0.5"
    d="M.402 4.184s16.789-8.43 26.485-.969c9.697 7.462 2.585 16.651-5.124 14.864C14.054 16.29 16.998 7.534.402 4.184z"
  />
);

Petal.propTypes = {
  angle: PropTypes.number
};

export class Flower extends Component {
  constructor(props) {
    super(props);
    this.state = { numPetals: 3 };
  }

  render() {
    const { numPetals } = this.state;
    const angles = Array(numPetals)
      .fill(0)
      .map((_, i) => (i * 360) / numPetals);
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -40 100 80">
          {angles.map((a) => <Petal key={a} angle={a} />)}
        </svg>
        <button onClick={() => this.setState({ numPetals: this.state.numPetals + 1 })}> + </button>
        <button onClick={() => this.setState({ numPetals: Math.max(0, this.state.numPetals - 1) })}> - </button>
      </div>
    );
  }
}
