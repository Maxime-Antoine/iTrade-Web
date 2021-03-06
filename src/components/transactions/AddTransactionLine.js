import React from 'react';
import PropTypes from 'prop-types';
import './add-transaction-line.css';

class AddTransactionLine extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ticker: '',
            type: '',
            date: '',
            price: '',
            shares: '',
            fee: ''
        };

        this.onAddTransaction = this.onAddTransaction.bind(this);
        this.onTickerChange = this.onTickerChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onSharesChange = this.onSharesChange.bind(this);
        this.onFeeChange = this.onFeeChange.bind(this);
    }

    onAddTransaction(){
        const trx = {
            ticker: this.state.ticker,
            trx_type: this.state.trx_type,
            date: this.state.date,
            price: this.state.price,
            shares: this.state.shares,
            fee: this.state.fee
        };
        if (this.transactionIsValid())  this.props.addTransaction(trx);
    }

    transactionIsValid(){
        if (!this.state.ticker) return false;
        if (!this.state.trx_type) return false;
        if (!this.state.date) return false;
        if (this.state.price == '' || this.state.price < 0) return false;
        if (!this.state.shares) return false;
        if (this.state.fee == '' || this.state.fee < 0) return false;

        return true;
    }

    onTickerChange(event){
        this.setState({ ticker: event.target.ticker });
    }

    onTypeChange(event){
        this.setState({ trx_type: event.target.trx_type });
    }

    onDateChange(event){
        this.setState({ date: event.target.date });
    }

    onPriceChange(event){
        this.setState({ price: event.target.price });
    }

    onSharesChange(event){
        this.setState({ shares: event.target.shares });
    }

    onFeeChange(event){
        this.setState({ fee: event.target.fee });
    }

    render(){
        return(
            <form className="form-inline" id="add-transaction-inline-form">
                <div className="form-group mb-2" id="ticker-input-group">
                    <label htmlFor="ticker-input">Ticker</label>
                    <input id="ticker-input" type="text" className="form-control" value={this.state.ticker} onChange={this.onTickerChange} />
                </div>
                <div className="form-group mb-2" id="type-input-group">
                    <label htmlFor="type-input">Type</label>
                    <input id="type-input" list="trx-type" className="form-control" value={this.state.trx_type} onChange={this.onTypeChange} />
                    <datalist id="trx-type">
                        <option value="Buy" />
                        <option value="Sell" />
                    </datalist>
                </div>
                <div className="form-group mb-2" id="date-input-group">
                    <label htmlFor="date-input">Date</label>
                    <input id="date-input" type="date" className="form-control" value={this.state.date} onChange={this.onDateChange} />
                </div>
                <div className="form-group mb-2" id="price-input-group">
                    <label htmlFor="price-input">Price</label>
                    <input id="price-input" type="number" className="form-control" value={this.state.price} onChange={this.onPriceChange} />
                </div>
                <div className="form-group mb-2" id="shares-input-group">
                    <label htmlFor="shares-input">Shares</label>
                    <input id="shares-input" type="number" className="form-control" value={this.state.shares} onChange={this.onSharesChange} />
                </div>
                <div className="form-group mb-2" id="fee-input-group">
                    <label htmlFor="fee-input">Fee</label>
                    <input id="fee-input" type="number" className="form-control" value={this.state.fee} onChange={this.onFeeChange} />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.onAddTransaction}>Add</button>
            </form>
        );
    }
}

AddTransactionLine.propTypes = {
    addTransaction: PropTypes.func.isRequired
};

export default AddTransactionLine;
