require('./scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import InlineSVG from 'svg-inline-react';

const tj = require('./img/tj.jpg');
const github = require('./img/github.svg');
const googleplus = require('./img/googleplus.svg');
const linkedin = require('./img/linkedin.svg');
const spotify = require('./img/spotify.svg');
const twitter = require('./img/twitter.svg');


class App extends React.Component {
  constructor(props) {
    super(props);  
  }
  
  render() {
    const divStyle = {
      backgroundImage: `url(${tj})`
    }

    return (
      <div className="container">
        <div className="overlay">
          <div className="overlay__image" style={divStyle}></div>
        </div>

        <div className="hero">
          <div className="hero__block hero__block--title">
            <h1>TJ EGAN</h1>
          </div>
          <div className="hero__block hero__block--intro">
            <p>Front End Developer + Designer based in <a target="_blank" href="https://www.google.com/maps/place/Austin,+TX/@30.3079828,-97.8934872,11z/data=!3m1!4b1!4m5!3m4!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.2671524!4d-97.74306">Austin, TX</a></p>
          </div>
          <div className="hero__icons">
            <a target="_blank" href="https://github.com/tw15egan"><img alt="github link" src={github} /></a>
            <a target="_blank" href="https://twitter.com/TJ_egan"><img alt="twitter link" src={twitter} /></a>
            <a target="_blank" href="https://www.linkedin.com/in/twegan"><img alt="linkedin link" src={linkedin} /></a>
            <a target="_blank" href="https://play.spotify.com/user/tj_egan"><img alt="spotify link" src={spotify} /></a>
          </div>
        </div>
        <div className="portfolio">

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
  