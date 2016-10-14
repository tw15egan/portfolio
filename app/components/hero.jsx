import React from 'react';
import SocialIcons from './social-icons';
import tj from '../img/tj-2.jpg';

const divStyle = {
  backgroundImage: `url(${tj})`,
};

function Hero() {
  return (
    <div>
      <div className="hero" style={divStyle}>
        <div className="hero__block hero__block--title">
          <h1 className="hero__title">TJ&nbsp; EGAN</h1>
        </div>
        <SocialIcons />
        <div className="hero__block hero__block--content">
          <p className="hero__content">Front End Developer + Designer based in <a className="hero__content--link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Austin,+TX/@30.3079828,-97.8934872,11z/data=!3m1!4b1!4m5!3m4!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.2671524!4d-97.74306">Austin, TX</a></p>
        </div>
      </div>
    </div>
  );
}

module.exports = Hero;
