import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/hero';

require('./scss/main.scss');

function App() {
  return (
    <div className="container">
      <Hero />
      <div className="portfolio" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
