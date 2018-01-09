import React from 'react';
import './add-transaction-line.css';

class AddTransactionLine extends React.Component {
    render(){
        return(
            <form className="form-inline" id="add-transaction-inline-form">
                <div className="form-group mb-2" id="ticker-input-group">
                    <label htmlFor="ticker-input">Ticker</label>
                    <input id="ticker-input" type="text" className="form-control" />
                </div>
                <div className="form-group mb-2" id="type-input-group">
                    <label htmlFor="type-input">Type</label>
                    <input id="type-input" list="trx-type" className="form-control" />
                    <datalist id="trx-type">
                        <option value="Buy" />
                        <option value="Sell" />
                    </datalist>
                </div>
                <div className="form-group mb-2" id="date-input-group">
                    <label htmlFor="date-input">Date</label>
                    <input id="date-input" type="date" className="form-control" />
                </div>
                <div className="form-group mb-2" id="price-input-group">
                    <label htmlFor="price-input">Price</label>
                    <input id="price-input" type="number" className="form-control" />
                </div>
                <div className="form-group mb-2" id="shares-input-group">
                    <label htmlFor="shares-input">Shares</label>
                    <input id="shares-input" type="number" className="form-control" />
                </div>
                <div className="form-group mb-2" id="fee-input-group">
                    <label htmlFor="fee-input">Fee</label>
                    <input id="fee-input" type="number" className="form-control" />
                </div>
                <button type="button" className="btn btn-primary">Add</button>
            </form>
        );
    }
}

export default AddTransactionLine;
