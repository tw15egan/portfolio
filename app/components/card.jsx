import React from 'react';

export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      img: '' || this.props.img,
      project: '' || this.props.project,
      url: '' || this.props.url,
      active: true,
    };
  }

  handleClick(evt) {
    evt.preventDefault();
    this.toggleActive(evt);
  }

  toggleActive(evt) {
    evt.preventDefault();
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const containerClass = this.state.active ? 'card__container card__container--active' : 'card__container';
    return (
      <div className="card">
        <a href="/" onClick={this.handleClick} className="card__handle">
          {this.state.project}
        </a>
        <div className={containerClass}>
          <p>{this.state.url}</p>
          <p>{this.state.project}</p>
          <p>{this.state.img}</p>
        </div>
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
