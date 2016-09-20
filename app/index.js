require('./scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const posterBg = require('./img/2.jpeg');

class App extends React.Component {
  constructor(props) {
    super(props);  
  }
  
  render() {

    return (
      <div className="container">
        <div className="hero">
          <h1>TJ &nbsp; EGAN</h1>
          <p>Front End Developer living in Austin, TX. Front End Developer living in Austin, TX. Front End Developer living in Austin, TX.</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
  