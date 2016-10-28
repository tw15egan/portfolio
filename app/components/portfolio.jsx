import React from 'react';
import PortfolioCard from './portfolio-card';

function Portfolio() {
  return (
    <div className="portfolio">
      <PortfolioCard title="Rapid Tow Bar" />
      <PortfolioCard title="Egan Appr" />
      <PortfolioCard title="IBM Blue Box Help" />
    </div>
  );
}

module.exports = Portfolio;
