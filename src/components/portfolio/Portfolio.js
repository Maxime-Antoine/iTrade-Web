import React from 'react';
import PropTypes from 'prop-types';

class PortfolioLine extends React.Component {
    constructor(props) {
        super(props);
        let market_value = props.shares * props.price;
        let gain = market_value - props.cost_basis;
        this.state = {
            price: props.price,
            change: props.change,
            change_pct: props.change / (props.price - props.change) * 100,
            shares: props.shares,
            cost_basis: props.cost_basis,
            market_value: market_value,
            gain: gain,
            day_gain: props.change * props.shares,
            gain_pct: gain / props.cost_basis * 100
        }
    }

    render(){
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>{this.state.price.toFixed(2)}</td>
                <td>{this.state.change.toFixed(2) + `(${this.state.change_pct.toFixed(2)}%)`}</td>
                <td>{this.state.shares}</td>
                <td>{this.state.cost_basis.toFixed(2)}</td>
                <td>{this.state.market_value.toFixed(2)}</td>
                <td>{this.state.gain.toFixed(2)}</td>
                <td>{this.state.day_gain.toFixed(2)}</td>
                <td>{this.state.gain_pct.toFixed(2) + '%'}</td>
            </tr>
        )
    }
}

PortfolioLine.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    change: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired,
    cost_basis: PropTypes.number.isRequired
}

export default PortfolioLine;
