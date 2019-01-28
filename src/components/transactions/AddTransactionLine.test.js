import React from 'react';
import {shallow} from 'enzyme';
import AddTransactionLine from './AddTransactionLine';

describe('AddTransactionLine should', () => {
    it('render', () => {
        const props = { addTransaction: function(){} };

        const component = shallow(<AddTransactionLine {...props} />);

        expect(component.find('form').children()).toHaveLength(7);
        expect(component.find('input').length).toEqual(component.find('label').length);
        expect(component.find('button').text()).toEqual('Add');
    });

    it('call addTransaction when btn clicked and valid data', () => {
        let called = false;
        const props = { addTransaction: () => { called = true; } };

        const component = shallow(<AddTransactionLine {...props} />);
        component.setState({ ticker: 'APPL', trx_type: 'Buy', date: '2018-01-14', price: 160.05, shares: 10, fee: 1});
        component.find('button').simulate('click');

        expect(called).toEqual(true);
    });

    it('do nothing when btn clicked and invalid data', () => {
        let called = false;
        const props = { addTransaction: () => { called = true; } };

        const component = shallow(<AddTransactionLine {...props} />);

        component.find('button').simulate('click');
        expect(called).toEqual(false);
    });

    it('update ticker when user input value', () => {
        const props = { addTransaction: () => {} };
        const component = shallow(<AddTransactionLine {...props} />);

        const input = component.find('#ticker-input');
        expect(input.text()).toEqual('');
        input.simulate('change', { target: { ticker: 'test'} });
        expect(component.state().ticker).toEqual('test');
    });

    it('update type when user input value', () => {
        const props = { addTransaction: () => {} };
        const component = shallow(<AddTransactionLine {...props} />);

        const input = component.find('#type-input');
        expect(input.text()).toEqual('');
        input.simulate('change', { target: { trx_type: 'Buy'} });
        expect(component.state().trx_type).toEqual('Buy');
    });

    it('update date when user input value', () => {
        const props = { addTransaction: () => {} };
        const component = shallow(<AddTransactionLine {...props} />);

        const input = component.find('#date-input');
        expect(input.text()).toEqual('');
        input.simulate('change', { target: { date: '2018-01-17'} });
        expect(component.state().date).toEqual('2018-01-17');
    });

    it('update shares when user input value', () => {
        const props = { addTransaction: () => {} };
        const component = shallow(<AddTransactionLine {...props} />);

        const input = component.find('#shares-input');
        expect(input.text()).toEqual('');
        input.simulate('change', { target: { shares: '17'} });
        expect(component.state().shares).toEqual('17');
    });

    it('update price when user input value', () => {
        const props = { addTransaction: () => {} };
        const component = shallow(<AddTransactionLine {...props} />);

        const input = component.find('#price-input');
        expect(input.text()).toEqual('');
        input.simulate('change', { target: { price: '242'} });
        expect(component.state().price).toEqual('242');
    });

    it('update fee when user input value', () => {
        const props = { addTransaction: () => {} };
        const component = shallow(<AddTransactionLine {...props} />);

        const input = component.find('#fee-input');
        expect(input.text()).toEqual('');
        input.simulate('change', { target: { fee: '1'} });
        expect(component.state().fee).toEqual('1');
    });
});
