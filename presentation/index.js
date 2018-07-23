import 'normalize.css';
import React, { Component } from 'react';
import {
  CodePane, Deck, Fill, Heading, Image, Layout, Link, List, ListItem, Slide, Text,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import background from '../assets/donnie-rosie-605394-unsplash.jpg';
import { hideSearchLight, showSearchLight } from './searchlight';

const images = {
  logo: require('../assets/tng.svg'),
  svgSupport: require('../assets/svg-support.png')
};

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
  },
  {
    primary: {
      name: 'Open Sans',
      googleFont: true,
      styles: ['400', '700']
    },
    secondary: {
      name: 'Luckiest Guy',
      googleFont: true,
      styles: ['400']
    }
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        contentWidth={1600}
        contentHeight={900}
      >
        <Slide transition={[() => ({})]} bgImage={background} onActive={() => showSearchLight()}>
          <Text textSize="6rem" textColor="rgba(255, 255, 255, 0.85)" textFont="secondary">
            You should be using
          </Text>
          <Text textSize="14rem" textColor="rgba(255, 255, 255, 0.85)" textFont="secondary">
            S V G
          </Text>
          <Text textSize="6rem" textColor="rgba(255, 255, 255, 0.85)" textFont="secondary">
            in your web app
          </Text>
        </Slide>
        <Slide onActive={() => hideSearchLight()}>
          <Text textSize="6rem" textFont="secondary">
            You should be using
          </Text>
          <Text textSize="14rem" textFont="secondary">
            S V G
          </Text>
          <Text textSize="6rem" textFont="secondary">
            in your web app
          </Text>
          <div style={{ position: 'absolute', left: 0, right: 0, marginTop: '10rem' }}>
            <Text bold textColor="tertiary" margin="0.25rem auto 2rem auto">
              Gerd Zschaler
            </Text>
            <Image src={images.logo} width="16%" />
          </div>
        </Slide>
        <Slide>
          <Heading size={2}>Scalable Vector Graphics</Heading>
          <List>
            <ListItem>always crisp - no scaling artifacts</ListItem>
            <ListItem>small filesize (if done properly)</ListItem>
            <ListItem>easily inlined - no extra HTTP requests</ListItem>
            <ListItem>scalable - perfect for responsive design</ListItem>
            <ListItem>navigable DOM - can be manipulated by CSS/JS</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2}>well supported!</Heading>
          <Image width="80%" src={images.svgSupport} />
          <Link href="https://caniuse.com/#feat=svg">https://caniuse.com/#feat=svg</Link>
        </Slide>
        <Slide>
          <Heading size={2}>SVG is code</Heading>
          <Layout>
            <Fill>
              <CodePane lang="markup" theme="light" source={require('raw-loader!./sample-svg.xml')} textSize={18} />
            </Fill>
            <Fill>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <g fill="darksalmon" stroke="gray">
                  <rect x="10" y="10" width="20" height="20" />
                  <circle cx="50" cy="20" r="10" />
                  <polygon points="70 30, 90 30, 80 10" />
                  <path d="M 100 20 C 105 50 115 -10 120 20" />
                </g>
              </svg>
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
