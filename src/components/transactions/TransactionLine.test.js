import React from 'react';
import {expect} from 'chai';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TransactionLine from './TransactionLine';

Enzyme.configure({ adapter: new Adapter() });

const compare = (component, expected) => {
    expect(component.find('tr').children()).to.have.length(8);
    expect(component.find('tr').childAt(0).text()).to.equal(expected.name);
    expect(component.find('tr').childAt(1).text()).to.equal(expected.ticker);
    expect(component.find('tr').childAt(2).text()).to.equal(expected.type);
    expect(component.find('tr').childAt(3).text()).to.equal(expected.date);
    expect(component.find('tr').childAt(4).text()).to.equal(expected.price);
    expect(component.find('tr').childAt(5).text()).to.equal(expected.shares.toString());
    expect(component.find('tr').childAt(6).text()).to.equal(expected.fee);
    expect(component.find('tr').childAt(7).text()).to.equal(expected.cash_value);
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
