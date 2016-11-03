import React from 'react';
import PortfolioCard from './portfolio-card';
import towbar from '../img/towbar.png';
import egan from '../img/egan.png';
import bluebox from '../img/bluebox.png';
// import nowplaying from '../img/bluebox.png';

function Portfolio() {
  return (
    <div className="portfolio__container">
      <h1 className="portfolio__title">Projects</h1>
      <div className="portfolio">
        <PortfolioCard
          title="Rapid Tow Bar"
          img={towbar}
          github="https://github.com/tw15egan/rapid-tow-bar"
          website="https://tw15egan.github.io/rapid-tow-bar/"
        />
        <PortfolioCard
          title="Egan Appraisals, Inc."
          img={egan}
          github="https://github.com/tw15egan/egan-realty"
          website="http://eganappr.com/"
        />
        <PortfolioCard
          title="IBM Cloud Help"
          img={bluebox}
          github="https://github.com/IBM-Blue-Box-Help/help-documentation"
          website="http://ibm-blue-box-help.github.io/help-documentation/"
        />
        <PortfolioCard
          title="Spotify Now Playing"
          // img={nowplaying}
          website="http://tj-listens-to.mybluemix.net/"
        />
      </div>
    </div>
  );
}

module.exports = Portfolio;
