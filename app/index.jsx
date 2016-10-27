import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/hero';
import Portfolio from './components/portfolio';
import Blog from './components/blog';

require('./scss/main.scss');

function App() {
  return (
    <div className="container">
      <Hero />
      <Portfolio />
      <Blog />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
