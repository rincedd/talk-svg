import React from 'react';
import { Heading } from 'spectacle';

export const EffectsTitle = () => (
  <React.Fragment>
    <Heading style={{ filter: 'url(#turb)' }}>Effects</Heading>
    <svg xmlns="http://www.w3.org/2000/svg" width={0} height={0}>
      <defs>
        <filter id="turb">
          <feTurbulence
            id="turbwave"
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="2"
            result="turbulence_3"
            data-filterId="3"
          />
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            in="SourceGraphic"
            in2="turbulence_3"
            scale="30"
          />
        </filter>
      </defs>
    </svg>
  </React.Fragment>
);
