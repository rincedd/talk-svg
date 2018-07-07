import 'normalize.css';
import React, { Component } from 'react';
import { Deck, Heading, Image, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

const images = {
  logo: require('../assets/tng.svg')
};

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['zoom', 'fade']} transitionDuration={500} theme={theme}>
        <Slide>
          <Text>You should be using</Text>
          <Heading size={1} caps textColor="secondary">
            SVG in your web app
          </Heading>
          <Text margin="25px 0" bold textColor="tertiary">
            Gerd Zschaler
          </Text>
          <Image src={images.logo} width="28%" />
        </Slide>
      </Deck>
    );
  }
}
