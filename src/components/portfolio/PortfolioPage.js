import React from 'react';
import PortfolioLine from './Portfolio';

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
                            <th scope="col">Day's gain</th>
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
            </div>
        );
    }
}

export default PortfolioPage;
