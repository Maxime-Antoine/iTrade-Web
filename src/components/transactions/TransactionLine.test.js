import React from 'react';
import {shallow} from 'enzyme';
import TransactionLine from './TransactionLine';

const compare = (component, expected) => {
    expect(component.find('tr').children()).toHaveLength(8);
    expect(component.find('tr').childAt(0).text()).toEqual(expected.name);
    expect(component.find('tr').childAt(1).text()).toEqual(expected.ticker);
    expect(component.find('tr').childAt(2).text()).toEqual(expected.type);
    expect(component.find('tr').childAt(3).text()).toEqual(expected.date);
    expect(component.find('tr').childAt(4).text()).toEqual(expected.price);
    expect(component.find('tr').childAt(5).text()).toEqual(expected.shares.toString());
    expect(component.find('tr').childAt(6).text()).toEqual(expected.fee);
    expect(component.find('tr').childAt(7).text()).toEqual(expected.cash_value);
};

describe('TransactionLine should', () => {
    it('render BUY transaction correctly', () => {
        const props = {
            name: 'Test stock',
            ticker: 'TEST',
            type: 'BUY',
            date: '2015-01-18',
            price: 100,
            shares: 10,
            fee: 1.5
        };
        const expected = Object.assign({}, props, {
            name: 'Test stock',
            ticker: 'TEST',
            type: 'BUY',
            date: '18/01/2015',
            price: '100.00',
            shares: '10',
            fee: '1.50',
            cash_value: '1001.50'
        });

        const component = shallow(<TransactionLine {...props} />);

        compare(component, expected);
    });
    it('render SELL transaction correctly', () => {
        const props = {
            name: 'Test stock',
            ticker: 'TEST',
            type: 'SELL',
            date: '2015-01-18',
            price: 100,
            shares: 10,
            fee: 1.5
        };
        const expected = Object.assign({}, props, {
            name: 'Test stock',
            ticker: 'TEST',
            type: 'SELL',
            date: '18/01/2015',
            price: '100.00',
            shares: '10',
            fee: '1.50',
            cash_value: '-1001.50'
        });

        const component = shallow(<TransactionLine {...props} />);

        compare(component, expected);
    });
});
