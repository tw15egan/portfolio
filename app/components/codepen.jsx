import React from 'react';

function CodePen({ user, hash, height, width, tab, theme, active }) {
  let element;
  if (active) {
    const src = `//codepen.io/${user}/embed/${hash}/?height=${height}&theme-id=${theme}&default-tab=${tab}&embed-version=2`;
    element = (
      <iframe
        height={height}
        width={width}
        scrolling="no"
        src={src}
        frameBorder="no"
        allowTransparency="true"
        allowFullScreen="true"
      />
    );
  } else {
    element = (
      <p />
    );
  }

  return element;
}

CodePen.propTypes = {
  user: React.PropTypes.string,
  hash: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  tab: React.PropTypes.string,
  theme: React.PropTypes.string,
};

CodePen.defaultProps = {
  user: 'tjegan',
  hash: 'qNQPgm',
  height: '500px',
  width: '100%',
  tab: 'result',
  theme: '25903',
};

module.exports = CodePen;
