import React from 'react';
import code from '../img/code.jpeg';

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
        <h1 className="portfolio-card__title">{this.props.title}</h1>
        <div className="portfolio-card__description">
          <h1>{this.props.title}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis, lectus eget suscipit tincidunt, quam ante volutpat turpis, nec egestas odio lorem eu augue. Praesent dapibus lacus neque, sit amet bibendum urna aliquam non. Aenean ipsum diam, ultricies ac felis a, vestibulum vestibulum est. Aenean condimentum ex id finibus porttitor. Sed euismod molestie accumsan. Mauris laoreet nisi elit, id blandit nibh pretium eu. In felis est, elementum vitae mi non, dictum iaculis erat.</p>
          </div>
          <img className="portfolio-card__img" role="presentation" src={code} />
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
