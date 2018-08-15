import React from 'react';
import ReactDOM from 'react-dom';

const searchLightStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10000
};

const radius = 15;
const pathPoints = [[radius, 50], [20, radius], [140, 90 - radius], [160 - radius, 50], [140, radius], [20, 90 - radius]];
const path = `M${pathPoints.map(p => p.join(' ')).join('L')}Z`;

const SearchLight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 160 90"
    style={searchLightStyle}
  >
    <defs>
      <path id="spotlight-path" d={path} />
      <mask id="spotlight-mask">
        <rect x="0" y="0" width="160" height="90" fill="#fff" />
        <circle id="spot" r={radius} fill="#000" style={{ transition: 'r .5s' }}>
          <animateMotion dur="20s" repeatCount="indefinite">
            <mpath xlinkHref="#spotlight-path" />
          </animateMotion>
        </circle>
      </mask>
    </defs>
    <rect mask="url(#spotlight-mask)" x="0" y="0" width="160" height="90" fill="#000" />
  </svg>
);

const SEARCH_LIGHT_ID = 'search-light';

export const showSearchLight = () => {
  if (location.href.indexOf('presenter') > -1 || location.href.indexOf('overview') > -1) {
    return;
  }
  const searchLight = document.createElement('div');
  searchLight.setAttribute('id', SEARCH_LIGHT_ID);
  document.querySelector('body').appendChild(searchLight);
  ReactDOM.render(<SearchLight />, searchLight);
};

export const hideSearchLight = () => {
  const spot = document.querySelector('#spot');

  if (spot) {
    spot.setAttribute('r', '100');
    setTimeout(() => {
      const searchLight = document.querySelector(`#${SEARCH_LIGHT_ID}`);
      searchLight.parentNode.removeChild(searchLight);
    }, 500);
  }
};
