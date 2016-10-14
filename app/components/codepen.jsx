import React from 'react';

function CodePen({ user, hash, height, width, tab, theme }) {
  const src = `//codepen.io/${user}/embed/preview/${hash}/?height=${height}&theme-id=${theme}&default-tab=${tab}&embed-version=2`;

  return (
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
  height: '350px',
  width: '100%',
  tab: 'result',
  theme: 'light',
};

module.exports = CodePen;
