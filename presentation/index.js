import 'normalize.css';
import React, { Component } from 'react';
import {
  Appear, CodePane, Deck, Fill, Fit, Heading, Image, Layout, Link, List,
  ListItem,
  Slide, Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import background from '../assets/donnie-rosie-605394-unsplash.jpg';
import '../assets/icomoon.css';
import { Flower } from './flower';
import { LiveEdit } from './live-edit';
import { SampleSvg } from './sample-svg';
import { hideSearchLight, showSearchLight } from './searchlight';
import './style.css';

const images = {
  logo: require('../assets/tng.svg'),
  svgSupport: require('../assets/svg-support.png'),
  imagesPng: require('../assets/images.png'),
  imagesSvg: require('../assets/images.svg')
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
      <Deck transition={['fade']} transitionDuration={500} theme={theme} contentWidth={1200}>
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
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              marginTop: '10rem'
            }}
          >
            <Text bold textColor="tertiary" margin="0.25rem auto 2rem auto">
              Gerd Zschaler
            </Text>
            <Image src={images.logo} width="16%" />
          </div>
        </Slide>
        <Slide>
          <Heading>Scalable Vector Graphics</Heading>
        </Slide>
        <Slide>
          <List>
            <ListItem>always crisp - no scaling, no Retina hassle</ListItem>
            <ListItem>small filesize</ListItem>
            <ListItem>easily inlined - no extra HTTP requests</ListItem>
            <ListItem>scalable - perfect for responsive design</ListItem>
            <ListItem>navigable DOM - can be manipulated by CSS/JS</ListItem>
            <ListItem>navigable DOM - can be made accessible</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2}>SVG is code</Heading>
          <Layout>
            <Fill>
              <CodePane lang="markup" theme="light" source={require('raw-loader!./sample-svg.xml')} textSize={18} />
            </Fill>
            <Fit>
              <SampleSvg />
            </Fit>
          </Layout>
          <Appear>
            <div>
              <LiveEdit
                code={"// ...and it comes with a DOM!\n\ndocument.querySelector('.triangle').style.fill = 'green';"}
              />
            </div>
          </Appear>
        </Slide>
        <Slide>
          <Image width="90%" src={images.svgSupport} />
          <Link href="https://caniuse.com/#feat=svg">https://caniuse.com/#feat=svg</Link>
        </Slide>
        <Slide>
          <Heading size={2}>SVG is tiny</Heading>
          <Layout>
            <Fill>
              <Text>186 KiB</Text>
              <CodePane
                overflow="hidden scroll"
                height="1.5%"
                lang="markup"
                theme="light"
                source={require('raw-loader!./tng-unoptimized-svg.xml')}
              />
            </Fill>
            <Fit>
              <Appear>
                <div style={{ marginLeft: '1rem' }}>
                  <Text>330 B</Text>
                  <CodePane width="8rem" lang="markup" theme="light" source={require('raw-loader!./tng-optimized-svg.xml')} />
                  <Text>...if you do it right</Text>
                </div>
              </Appear>
              <Image src={images.logo} margin="4rem 2rem" />
            </Fit>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={2}>SVG is dynamic</Heading>
          <Layout>
            <Fill>
              <CodePane lang="jsx" theme="light" source={require('raw-loader!./flower.js.txt')} textSize={18}/>
            </Fill>
            <Fill><Flower/></Fill>
          </Layout>
          <Text>Fully supported in React and Vue</Text>
        </Slide>
        <Slide>
          <Heading>use SVG for...</Heading>
        </Slide>
        <Slide>
          <Heading>Icons</Heading>
        </Slide>
        <Slide>
          <Layout style={{ alignItems: 'center' }}>
            <Fill>bitmap 😱</Fill>
            <Fill>
              <Image width={16} height={16} src={images.imagesPng} />
            </Fill>
            <Fill>
              <Image width={48} height={48} src={images.imagesPng} />
            </Fill>
            <Fill>
              <Image width={128} height={128} src={images.imagesPng} />
            </Fill>
            <Fill>
              <Image width={256} height={256} src={images.imagesPng} />
            </Fill>
          </Layout>
          <Appear>
            <div>
              <Layout style={{ alignItems: 'center' }}>
                <Fill>icon font ☺</Fill>
                <Fill>
                  <span className="icon-images" style={{ fontSize: '16px' }} />
                </Fill>
                <Fill>
                  <span className="icon-images" style={{ fontSize: '48px' }} />
                </Fill>
                <Fill>
                  <span className="icon-images" style={{ fontSize: '128px' }} />
                </Fill>
                <Fill>
                  <span className="icon-images" style={{ fontSize: '256px' }} />
                </Fill>
              </Layout>
            </div>
          </Appear>
          <Appear>
            <div>
              <Layout style={{ alignItems: 'center' }}>
                <Fill>SVG 😄</Fill>
                <Fill>
                  <Image width={16} height={16} src={images.imagesSvg} />
                </Fill>
                <Fill>
                  <Image width={48} height={48} src={images.imagesSvg} />
                </Fill>
                <Fill>
                  <Image width={128} height={128} src={images.imagesSvg} />
                </Fill>
                <Fill>
                  <Image width={256} height={256} src={images.imagesSvg} />
                </Fill>
              </Layout>
            </div>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2}>SVG icon options</Heading>
          <CodePane lang="markup" source={require('raw-loader!./svg-icons.html')} theme="light" textSize={18} />
        </Slide>
        <Slide>
          <Heading>Charts</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Charts</Heading>
          <List>
            <ListItem>dynamic</ListItem>
            <ListItem>accessible</ListItem>
            <ListItem>interactive</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>
            This <Link href="https://codepen.io/team/amcharts/pen/VmMagp">pen</Link> by{' '}
            <Link href="https://codepen.io/team/amcharts/">amCharts</Link>
          </Text>
        </Slide>
        <Slide>
          <Heading>Animation</Heading>
        </Slide>
        <Slide>
          <Text>
            This <Link href="https://codepen.io/sdras/full/jPLgQM">pen</Link> by{' '}
            <Link href="https://twitter.com/sarah_edo">Sarah Drasner</Link>
          </Text>
        </Slide>
        <Slide><Heading>Effects</Heading></Slide>
        <Slide>
          <Text>
            This <Link href="https://codepen.io/noeldelgado/full/PZJGLx/">pen</Link> by{' '}
            <Link href="https://codepen.io/noeldelgado/">Noel Delgado</Link>
          </Text>
        </Slide>
        <Slide>
          <Text>
            This <Link href="https://codepen.io/dudleystorey/full/QvvEYQ/">pen</Link> by{' '}
            <Link href="https://codepen.io/dudleystorey/">Dudley Storey</Link>
          </Text>
        </Slide>
        <Slide>
          <Text>
            This <Link href="https://codepen.io/enxaneta/full/oYMxqe/">pen</Link> by{' '}
            <Link href="https://codepen.io/enxaneta/">Gabi</Link>
          </Text>
        </Slide>
        <Slide>
          <List>
            <ListItem>
              <Link href="https://devdocs.io/svg">devdocs.io/svg</Link>
            </ListItem>
            <ListItem>
              <Link href="https://css-tricks.com/using-svg/">"Using SVG" at CSS-Tricks</Link>
            </ListItem>
            <ListItem>
              <Link href="https://css-tricks.com/svg-sprites-use-better-icon-fonts/">SVG sprites for icons</Link>
            </ListItem>
            <ListItem>
              <Link href="https://css-tricks.com/svg-use-with-external-reference-take-2/">
                Caveats with external SVG sprites
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://jakearchibald.github.io/svgomg/">Online SVG optimizer</Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
