import React from 'react';
import PropTypes from 'prop-types';

class TransactionLine extends React.Component {
    render(){
        const date = new Date(Date.parse(this.props.date));
        const abs_cash_value = this.props.price * this.props.shares + this.props.fee;
        const cash_value = this.props.type === 'BUY' ? abs_cash_value : - abs_cash_value;

        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>{this.props.type}</td>
                <td>{`${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${(date.getMonth()+1) < 10 ? '0' : ''}${date.getMonth() + 1}/${date.getFullYear()}`}</td>
                <td>{this.props.price.toFixed(2)}</td>
                <td>{this.props.shares}</td>
                <td>{this.props.fee.toFixed(2)}</td>
                <td>{cash_value.toFixed(2)}</td>
            </tr>
        );
    }
}

TransactionLine.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired,
    fee: PropTypes.number.isRequired
};

export default TransactionLine;
