import React from 'react';
import PortfolioLine from './PortfolioLine';
import AddTransactionLine from '../transactions/AddTransactionLine';

class PortfolioPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                { name: 'Alphabet Inc', ticker: 'GOOG', price: 1070.64, change: 6.1, shares: 4, cost_basis: 2857 },
                { name: 'Gilead Inc', ticker: 'GILD', price: 74.18, change: 0.04, shares: 50, cost_basis: 4684.98 },
                { name: 'Celgene', ticker: 'CELG', price: 108.32, change: 2.15, shares: 25, cost_basis: 2841.25 },
                { name: 'Facebook', ticker: 'FB', price: 183.25, change: 1.83, shares: 30, cost_basis: 3256.10 }
            ]
        };

        this.interval = setInterval(this.onReceiveNewData, 1000, this);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    onReceiveNewData(that){
        const new_data = [
            { name: 'Alphabet Inc', ticker: 'GOOG', price: 1070.64 * (1 + Math.random() / 10), change: 6.1, shares: 4, cost_basis: 2857 },
            { name: 'Gilead Inc', ticker: 'GILD', price: 74.18 * (1 + Math.random() / 10), change: 0.04, shares: 50, cost_basis: 4684.98 },
            { name: 'Celgene', ticker: 'CELG', price: 108.32 * (1 + Math.random() / 10), change: 2.15, shares: 25, cost_basis: 2841.25 },
            { name: 'Facebook', ticker: 'FB', price: 183.25 * (1 + Math.random() / 10), change: 1.83, shares: 30, cost_basis: 3256.10 }
        ];

        that.setState({ data: new_data });
    }

    addTransaction(trx){  // eslint-disable-line no-unused-vars
        //TODO
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
                            <th scope="col">Price</th>
                            <th scope="col">Change</th>
                            <th scope="col">Shares</th>
                            <th scope="col">Cost Basis</th>
                            <th scope="col">Market Value</th>
                            <th scope="col">Gain</th>
                            <th scope="col">Day&apos;s gain</th>
                            <th scope="col">Gain %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((row, i) =>
                            <PortfolioLine key={i}
                                name={row.name}
                                ticker={row.ticker}
                                price={row.price}
                                change={row.change}
                                shares={row.shares}
                                cost_basis={row.cost_basis}
                            />
                        )}
                    </tbody>
                </table>
                <AddTransactionLine addTransaction={this.addTransaction}/>
            </div>
        );
    }
}

export default PortfolioPage;
