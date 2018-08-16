import React, { Component } from 'react';
import { Heading } from 'spectacle';

export class EffectsTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { baseFrequency: 0.5 };
  }

  componentDidMount() {
    let increment = 0.05;

    const runAnimation = () => {
      if (this.state.baseFrequency > 0.6 || this.state.baseFrequency < 0.4) {
        increment = -increment;
      }
      this.setState({ baseFrequency: this.state.baseFrequency + increment });
      this.timer = requestAnimationFrame(runAnimation);
    };

    this.timer = requestAnimationFrame(runAnimation);
  }

  componentWillUnmount() {
    if (this.timer) {
      cancelAnimationFrame(this.timer);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Heading style={{ filter: 'url(#turb)' }}>Effects</Heading>
        <svg xmlns="http://www.w3.org/2000/svg" width={0} height={0}>
          <defs>
            <filter id="turb">
              <feTurbulence
                id="turbwave"
                type="fractalNoise"
                baseFrequency={this.state.baseFrequency}
                numOctaves="2"
                result="turbulence_3"
              />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                in="SourceGraphic"
                in2="turbulence_3"
                scale={this.state.baseFrequency * 30}
              />
            </filter>
          </defs>
        </svg>
      </React.Fragment>
    );
  }
}
