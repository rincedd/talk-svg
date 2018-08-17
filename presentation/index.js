import 'normalize.css';
import React, { Component } from 'react';
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Slide,
  Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import background from '../assets/donnie-rosie-605394-unsplash.jpg';
import '../assets/icomoon.css';
import { AnimationTitle } from './animation-title';
import { Checkbox } from './checkbox';
import { EffectsTitle } from './effects-title';
import { Flower } from './flower';
import { ImagesSvg } from './images-svg';
import { LiveEdit } from './live-edit';
import { Pen } from './pen';
import { SampleSvg } from './sample-svg';
import { hideSearchLight, showSearchLight } from './searchlight';
import './style.css';

const images = {
  logo: require('../assets/tng.svg'),
  svgSupport: require('../assets/svg-support.png'),
  imagesPng: require('../assets/images.png'),
  d3Web: require('../assets/d3.png')
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
      <Deck transition={['fade']} transitionDuration={500} theme={theme} contentWidth={1600} contentHeight={1200}>
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
              marginTop: '1ex'
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
          <List style={{ listStyle: 'none' }}>
            <ListItem>
              <Checkbox checked>crisp at any size - no artifacts, no Retina hassle</Checkbox>
            </ListItem>
            <Appear>
              <ListItem>
                <Checkbox checked>text - small filesize</Checkbox>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Checkbox checked>easily inlined - no extra HTTP requests</Checkbox>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Checkbox checked>scalable - perfect for responsive design</Checkbox>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Checkbox checked>navigable DOM - can be manipulated by CSS/JS</Checkbox>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Checkbox checked>markup - can be made accessible</Checkbox>
              </ListItem>
            </Appear>
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
                code={"// ...and it comes with a DOM!\n\ndocument.querySelector('.triangle').style.fill = '#03A9FC';"}
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
          <div>
            <div style={{ display: 'inline-block', width: '48%', verticalAlign: 'top' }}>
              <Text textAlign="left">186 KiB</Text>
              <CodePane
                overflow="hidden scroll"
                height="40vh"
                lang="markup"
                theme="light"
                source={require('raw-loader!./tng-unoptimized-svg.xml')}
              />
            </div>
            <div style={{ display: 'inline-block', width: '48%', verticalAlign: 'top', marginLeft: '1%' }}>
              <Appear>
                <div>
                  <Text textAlign="left">330 B</Text>
                  <CodePane lang="markup" theme="light" source={require('raw-loader!./tng-optimized-svg.xml')} />
                  <Text>...if you do it right</Text>
                </div>
              </Appear>
              <Image src={images.logo} margin="4rem 2rem" />
            </div>
          </div>
        </Slide>
        <Slide>
          <Heading size={2}>Optimize!</Heading>
          <List>
            <ListItem>
              get rid of useless markup (<code>metadata</code>, <code>descr</code>, ...)
            </ListItem>
            <ListItem>
              use SVG optimizers like <Link href="https://github.com/svg/svgo">SVGO</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2}>SVG is dynamic</Heading>
          <Layout style={{ marginTop: '1rem' }}>
            <Fill>
              <CodePane lang="jsx" theme="light" source={require('raw-loader!./flower.js.txt')} textSize={18} />
            </Fill>
            <Fit>
              <Flower />
              <Text margin="0 0 0 1rem" textAlign="left">
                Fully supported in React and Vue
              </Text>
            </Fit>
          </Layout>
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
              <Image width={32} height={32} src={images.imagesPng} />
            </Fill>
            <Fill>
              <Image width={48} height={48} src={images.imagesPng} />
            </Fill>
            <Fill>
              <Image width={128} height={128} src={images.imagesPng} />
            </Fill>
            <Fill>
              <Image width={196} height={196} src={images.imagesPng} />
            </Fill>
          </Layout>
          <Appear>
            <div>
              <Layout style={{ alignItems: 'center', color: '#03A9FC' }}>
                <Fill>icon font ☺</Fill>
                <Fill>
                  <span className="icon-images" style={{ fontSize: '32px' }} />
                </Fill>
                <Fill>
                  <span className="icon-images" style={{ fontSize: '48px' }} />
                </Fill>
                <Fill>
                  <span className="icon-images" style={{ fontSize: '128px' }} />
                </Fill>
                <Fill>
                  <span className="icon-images" style={{ fontSize: '196px' }} />
                </Fill>
              </Layout>
            </div>
          </Appear>
          <Appear>
            <div>
              <Layout style={{ alignItems: 'center', color: '#03A9FC' }}>
                <Fill>SVG 😄</Fill>
                <Fill>
                  <ImagesSvg size={32} />
                </Fill>
                <Fill>
                  <ImagesSvg size={48} />
                </Fill>
                <Fill>
                  <ImagesSvg size={128} />
                </Fill>
                <Fill>
                  <ImagesSvg size={196} />
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
          <Heading>Custom UI</Heading>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <List style={{ listStyle: 'none' }}>
                <ListItem>
                  <Checkbox>more powerful</Checkbox>
                </ListItem>
                <ListItem>
                  <Checkbox type="cross">and expressive</Checkbox>
                </ListItem>
                <ListItem>
                  <Checkbox type="checkmark" checked>than CSS-only graphics</Checkbox>
                </ListItem>
              </List>
            </Fill>
            <Fill>
              <CodePane lang="markup" theme="light" textSize={18} source={require('raw-loader!./svg-checkbox.html')} />
            </Fill>
          </Layout>
          <Text textSize={20} margin="4rem 0 0 0">
            <Link href="https://theblog.adobe.com/css-vs-svg-styling-checkboxes-and-radio-buttons/">
              by Sara Soueidan
            </Link>
          </Text>
        </Slide>
        <Slide>
          <Heading>Interactive charts</Heading>
        </Slide>
        <Slide>
          <Pen user="JANA" username="adeveloperdiary" hash="oxxRyN" />
        </Slide>
        <Slide>
          <Pen user="amCharts" username="team/amcharts" hash="VmMagp" />
          <Text>enriched with WAI-ARIA attributes for a11y</Text>
        </Slide>
        <Slide>
          <iframe
            src="https://www.gapminder.org/tools/?embedded=true#$chart-type=bubbles"
            style={{ width: '100%', height: '600px', border: '0' }}
            allowFullScreen
          />
          <Text textSize="16px">
            <Link href="//www.gapminder.org">www.gapminder.org</Link>
          </Text>
        </Slide>
        <Slide>
          <Link href="https://bl.ocks.org/mbostock/1256572">
            <Image src={images.d3Web} />
          </Link>
        </Slide>
        <Slide>
          <AnimationTitle />
        </Slide>
        <Slide>
          <Pen user="Sarah Drasner" username="sdras" hash="jPLgQM" />
        </Slide>
        <Slide>
          <Pen user="Sarah Drasner" username="sdras" hash="waXKPw" height={700} />
        </Slide>
        <Slide>
          <Pen user="Chris Gannon" username="chrisgannon" hash="LEQmwP" />
        </Slide>
        <Slide>
          <Pen user="Nikhil Krishnan" username="nikhil8krishnan" hash="rVoXJa" />
        </Slide>
        <Slide>
          <Pen user="Mikael Ainalem" username="ainalem" hash="aLKxjm" />
          <Text textSize="2rem">light-weight image preloaders</Text>
        </Slide>
        <Slide>
          <Pen user="Sarah Drasner" username="sdras" hash="qEdova" height={700}/>
          <Text textSize="2rem">
            animating <code>stroke-dasharray</code>
          </Text>
        </Slide>
        <Slide>
          <EffectsTitle />
        </Slide>
        <Slide>
          <Pen user="Noel Delgado" username="noeldelgado" hash="PZJGLx" />
          <Text textSize="2rem">
            <code>clip-path</code>
          </Text>
        </Slide>
        <Slide>
          <Pen user="Dudley Storey" username="dudleystorey" hash="QvvEYQ" />
          <Text textSize="2rem">
            <code>mask</code>
          </Text>
        </Slide>
        <Slide>
          <Pen user="Lucas Bebber" username="lbebber" hash="LELBEo" />
          <Text textSize="2rem">
            <code>filter</code> can be applied to HTML elements!
          </Text>
        </Slide>
        <Slide>
          <Pen user="Gabi" username="enxaneta" hash="oYMxqe" />
        </Slide>
        <Slide transition={['slide']}>
          <Heading size={2}>use SVG now!</Heading>
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
              <Link href="https://github.com/svg/svgo">SVGO</Link>
            </ListItem>
            <ListItem>
              <Link href="https://jakearchibald.github.io/svgomg/">SVGO's Missing GUI</Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
