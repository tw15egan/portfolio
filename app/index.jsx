import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/hero';
import Portfolio from './components/portfolio';

require('./scss/main.scss');

function App() {
  return (
    <div className="container">
      <Hero />
      <Portfolio />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
