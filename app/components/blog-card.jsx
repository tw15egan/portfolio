import React from 'react';
import CodePen from './codepen';

export default class BlogCard extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      active: false || this.props.active,
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
    const handleClass = !this.state.active ? 'card__handle card__handle--active' : 'card__handle';

    const {
      hash,
      project,
      ...other,
    } = this.props;


    const props = {
      active: this.state.active,
    };

    return (
      <div className="card">
        <a href="/" onClick={this.handleClick} className={handleClass}>
          {project}
        </a>
        <div className={containerClass}>
          <CodePen active={this.state.active} {...other} {...props} hash={hash} />
        </div>
      </div>
    );
  }
}

BlogCard.propTypes = {
  active: React.PropTypes.bool,
  project: React.PropTypes.string,
  hash: React.PropTypes.string,
};

BlogCard.defaultProps = {
  active: false,
  project: '',
  hash: 'qNQPgm',
};
