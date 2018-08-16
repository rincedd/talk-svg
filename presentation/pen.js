import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Text } from 'spectacle';

export class Pen extends Component {
  componentDidMount() {
    window.__CPEmbed && new window.__CPEmbed();
  }

  render() {
    const { hash, username, user, height } = this.props;
    return (
      <React.Fragment>
        <Text textSize="2rem">
          This <Link href={`https://codepen.io/${username}/pen/${hash}/`}>pen</Link> by {user}
        </Text>
        <div
          style={{
            resize: 'both',
            overflow: 'hidden',
            padding: '5px',
            backgroundColor: 'white'
          }}
        >
          <div
            data-height={height}
            data-theme-id="light"
            data-slug-hash={hash}
            data-default-tab="result"
            data-user={username}
            className="codepen"
          >
            loading...
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Pen.defaultProps = {
  height: 500
};

Pen.propTypes = {
  hash: PropTypes.string,
  height: PropTypes.number,
  user: PropTypes.string,
  username: PropTypes.string
};
