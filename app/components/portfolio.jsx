import React from 'react';
import PortfolioCard from './portfolio-card';

function Portfolio() {
  return (
    <div className="portfolio">
      <PortfolioCard title="Rapid Tow Bar" />
      <PortfolioCard title="Egan Appr" />
      <PortfolioCard title="IBM Blue Box Help" />
      <PortfolioCard title="Now Playing" />
    </div>
  );
}

module.exports = Portfolio;
