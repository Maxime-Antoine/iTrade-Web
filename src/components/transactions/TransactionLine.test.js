import React from 'react';
import expect from 'expect';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TransactionLine from './TransactionLine';

Enzyme.configure({ adapter: new Adapter() });

const compare = (component, expected) => {
    expect(component.find('tr').children().length).toBe(8);
    expect(component.find('tr').childAt(0).text()).toBe(expected.name);
    expect(component.find('tr').childAt(1).text()).toBe(expected.ticker);
    expect(component.find('tr').childAt(2).text()).toBe(expected.type);
    expect(component.find('tr').childAt(3).text()).toBe(expected.date);
    expect(component.find('tr').childAt(4).text()).toBe(expected.price);
    expect(component.find('tr').childAt(5).text()).toBe(expected.shares.toString());
    expect(component.find('tr').childAt(6).text()).toBe(expected.fee);
    expect(component.find('tr').childAt(7).text()).toBe(expected.cash_value);
};

describe('TransactionLine should', () => {
    it('render BUY transaction correctly', () => {
        const props = {
            name: 'Test stock',
            ticker: 'TEST',
            type: 'BUY',
            date: '01/01/2015',
            price: 100,
            shares: 10,
            fee: 1.5
        };
        const expected = Object.assign({}, props, {
            name: 'Test stock',
            ticker: 'TEST',
            type: 'BUY',
            date: '2015-1-1',
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
            date: '01/01/2015',
            price: 100,
            shares: 10,
            fee: 1.5
        };
        const expected = Object.assign({}, props, {
            name: 'Test stock',
            ticker: 'TEST',
            type: 'SELL',
            date: '2015-1-1',
            price: '100.00',
            shares: '10',
            fee: '1.50',
            cash_value: '-1001.50'
        });

        const component = shallow(<TransactionLine {...props} />);

        compare(component, expected);
    });
});
