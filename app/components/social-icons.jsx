import React from 'react';
import Icon from './icon';

function SocialIcons() {
  return (
    <div className="hero__icons">
      <a
        className="hero__icons--link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/tw15egan"
      >
        <Icon title="github" />
      </a>
      <a
        className="hero__icons--link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/TJ_egan"
      >
        <Icon title="twitter" />
      </a>
      <a
        className="hero__icons--link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/twegan"
      >
        <Icon title="linkedin" />
      </a>
      <a
        className="hero__icons--link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://play.spotify.com/user/tj_egan"
      >
        <Icon title="spotify" />
      </a>
    </div>
  );
}

module.exports = SocialIcons;
