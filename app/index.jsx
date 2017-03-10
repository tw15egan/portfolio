import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/hero';
import Portfolio from './components/portfolio';
import Blog from './components/blog';

require('./scss/main.scss');

export default class App extends React.Component {
  componentDidMount() {
    const elem = this.refs.app;
    elem.style.opacity = 0;

    window.requestAnimationFrame(() => {
      elem.style.transition = 'opacity 500ms';
      elem.style.opacity = 1;
    });
  }

  render() {
    return (
      <div ref="app" className="container">
        <Hero />
        {/*<Portfolio />*/}
        <Blog />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
