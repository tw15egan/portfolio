import React from 'react';

export default class Card extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      img: '' || this.props.img,
      project: '' || this.props.project,
      url: '' || this.props.url,
    };
  }
  render() {
    return (
      <div className="card">
        <p>{this.state.url}</p>
        <p>{this.state.project}</p>
        <p>{this.state.img}</p>
      </div>
    );
  }
}

Card.propTypes = {
  img: React.PropTypes.string,
  project: React.PropTypes.string,
  url: React.PropTypes.string,
};

Card.defaultProps = {
  img: '',
  project: '',
  url: '',
};
