import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/hero';
import Blog from './components/blog';

require('./scss/main.scss');

function App() {
  return (
    <div className="container">
      <Hero />
      <Blog />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
