import PropTypes from 'prop-types';
import React from 'react';

export const SampleSvg = ({ fill = 'darksalmon', stroke = 'gray' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90">
    <g fill={fill} stroke={stroke}>
      <rect x="10" y="10" width="20" height="20" />
      <circle cx="50" cy="20" r="10" />
      <polygon className="triangle" points="70 30, 90 30, 80 10" />
      <path d="M 100 20 C 105 50 115 -10 120 20" />
    </g>
    <g fill="none" stroke={stroke} transform="translate(0, 45)">
      <line x1="10" y1="10" x2="30" y2="30" />
      <ellipse cx="50" cy="20" rx="10" ry="5" />
      <polyline points="70 30, 90 30, 80 10" />
      <text className="text" x="100" y="30" fontSize="30">
        A
      </text>
    </g>
  </svg>
);

SampleSvg.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
};
