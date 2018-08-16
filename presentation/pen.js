import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Text } from 'spectacle';

export class Pen extends Component {
  componentDidMount() {
    window.__CPEmbed && new window.__CPEmbed();
  }

  render() {
    let { hash, username, user } = this.props;
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
            data-height="500"
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

Pen.propTypes = {
  hash: PropTypes.string,
  user: PropTypes.string,
  username: PropTypes.string
};
