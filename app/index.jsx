import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/hero';
import tj from './img/tj.jpg';

require('./scss/main.scss');

const divStyle = {
  backgroundImage: `url(${tj})`,
};

function App() {
  return (
    <div className="container">
      <div className="overlay">
        <div className="overlay__image" style={divStyle} />
      </div>
      <Hero />
      <div className="portfolio" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
