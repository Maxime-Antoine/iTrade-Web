import React from 'react';
import TransactionLine from './TransactionLine';

class TransactionPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                { name: 'Google Inc', ticker: 'GOOG', type: 'BUY', date:'2014-04-15', price: 528.17, shares: 1, fee: 1 },
                { name: 'Google Inc', ticker: 'GOOG', type: 'BUY', date:'2014-08-26', price: 578.35, shares: 1, fee: 1 },
                { name: 'Google Inc', ticker: 'GOOG', type: 'BUY', date:'2015-04-23', price: 570.35, shares: 2, fee: 1 },
                { name: 'Gilead Sciences', ticker: 'GILD', type:'BUY', date:'2014-04-15', price: 68.16, shares: 5, fee: 1 },
                { name: 'Gilead Sciences', ticker: 'GILD', type:'SELL', date:'2014-04-23', price: 75.5, shares: 5, fee: 1 },
                { name: 'Celgene', ticker: 'CELG', type:'BUY', date:'2014-04-15', price: 138.41, shares: 2, fee: 1 },
                { name: 'Celgene', ticker: 'CELG', type:'BUY', date:'2014-04-23' , price: 148, shares: 1, fee: 1 },
            ]
        };
    }

    render(){
        return (
            <div>
            <br />
            <br />
            <br />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Ticker</th>
                            <th scope="col">Type</th>
                            <th scope="col">Date</th>
                            <th scope="col">Price</th>
                            <th scope="col">Shares</th>
                            <th scope="col">Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((row, i) =>
                            <TransactionLine key={i}
                                name={row.name}
                                ticker={row.ticker}
                                type={row.type}
                                date={row.date}
                                price={row.price}
                                shares={row.shares}
                                fee={row.fee}
                            />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TransactionPage;
