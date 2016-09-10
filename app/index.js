require('./scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const posterBg = require('./img/4.jpeg');

class App extends React.Component {
  constructor(props) {
    super(props);  
  }
  
  render() {
    const divStyle = {
      backgroundImage: `url(${posterBg})`
    }
    return (
      <div className="container" style={divStyle}>
        <h1>TJ EGAN</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
  