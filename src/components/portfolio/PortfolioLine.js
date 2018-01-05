import React from 'react';
import PropTypes from 'prop-types';

class PortfolioLine extends React.Component {
    render(){
        const market_value = this.props.shares * this.props.price;
        const gain = market_value - this.props.cost_basis;
        const change_pct = this.props.change / (this.props.price - this.props.change) * 100;
        const day_gain = this.props.change * this.props.shares;
        const gain_pct = gain / this.props.cost_basis * 100;

        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>{this.props.price.toFixed(2)}</td>
                <td>{this.props.change.toFixed(2) + `(${change_pct.toFixed(2)}%)`}</td>
                <td>{this.props.shares}</td>
                <td>{this.props.cost_basis.toFixed(2)}</td>
                <td>{market_value.toFixed(2)}</td>
                <td>{gain.toFixed(2)}</td>
                <td>{day_gain.toFixed(2)}</td>
                <td>{gain_pct.toFixed(2) + '%'}</td>
            </tr>
        );
    }
}

PortfolioLine.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    change: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired,
    cost_basis: PropTypes.number.isRequired
};

export default PortfolioLine;
