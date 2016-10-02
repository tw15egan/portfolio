import React from 'react';
import Card from './card';

function Portfolio() {
  return (
    <div className="portfolio">
      <Card url="www.google.com" img="../img/tj.jpg" project="Rapid Tow Bar" />
      <Card url="www.google.com" img="../img/tj.jpg" project="Rapid Tow Bar" />
      <Card url="www.google.com" img="../img/tj.jpg" project="Rapid Tow Bar" />
    </div>
  );
}

module.exports = Portfolio;

