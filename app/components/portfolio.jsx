import React from 'react';
import PortfolioCard from './portfolio-card';

function Portfolio() {
  return (
    <div className="portfolio">
      <PortfolioCard
        title="Rapid Tow Bar"
        github="https://github.com/tw15egan/rapid-tow-bar"
        website="https://tw15egan.github.io/rapid-tow-bar/"
      />
      <PortfolioCard
        title="Egan Appraisals, Inc."
        github="https://github.com/tw15egan/egan-realty"
        website="http://eganappr.com/"
      />
      <PortfolioCard
        title="IBM Cloud Help"
        github="https://github.com/IBM-Blue-Box-Help/help-documentation"
        website="http://ibm-blue-box-help.github.io/help-documentation/"
      />
      <PortfolioCard
        title="Spotify Now Playing"
        website="http://tj-listens-to.mybluemix.net/"
      />
    </div>
  );
}

module.exports = Portfolio;
