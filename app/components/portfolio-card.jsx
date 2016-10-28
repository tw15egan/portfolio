import React from 'react';
import code from '../img/code.jpeg';
import Icon from './icon';

export default class PortfolioCard extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      active: false || this.props.active,
    };
  }

  handleClick() {
    this.toggleActive();
  }

  toggleActive() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const containerClass = this.state.active ? 'portfolio-card portfolio-card--active' : 'portfolio-card';

    const props = {
      onClick: this.handleClick,
    };

    return (
      <section className={containerClass} {...props}>
        <img className="portfolio-card__img" role="presentation" src={code} />
        <div className="portfolio-card__description">
          <h1>{this.props.title}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis, lectus eget suscipit tincidunt, quam ante volutpat turpis, nec egestas odio lorem eu augue.</p>
        </div>
        <div className="portfolio-card__description">
          <a
            className="portfolio-card__link"
            rel="noopener noreferrer"
            target="_blank"
            href={this.props.github}
          >
            <Icon title="github" />
            <span>Github</span>
          </a>
          <a
            className="portfolio-card__link"
            rel="noopener noreferrer"
            target="_blank"
            href={this.props.website}
          >
            <Icon title="web" />
            <span>Website</span>
          </a>
        </div>

      </section>
    );
  }
}

PortfolioCard.propTypes = {
  active: React.PropTypes.bool,
  title: React.PropTypes.string,
  // hash: React.PropTypes.string,
};

PortfolioCard.defaultProps = {
  active: false,
  // project: '',
  // hash: 'qNQPgm',
};
