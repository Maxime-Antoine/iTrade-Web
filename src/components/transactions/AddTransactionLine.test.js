import React from 'react';
import {expect} from 'chai';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddTransactionLine from './AddTransactionLine';

Enzyme.configure({ adapter: new Adapter() });

describe('AddTransactionLine should', () => {
    it('render', () => {
        const props = { addTransaction: function(){} };

        const component = shallow(<AddTransactionLine {...props} />);

        expect(component.find('form').children()).to.have.length(7);
        expect(component.find('input').length).to.equal(component.find('label').length);
        expect(component.find('button').text()).to.equal('Add');
    });

    it('call addTransaction when btn clicked and valid data', () => {
        let called = false;
        const props = { addTransaction: () => { called = true; } };

        const component = shallow(<AddTransactionLine {...props} />);
        component.setState({ ticker: 'APPL', trx_type: 'Buy', date: '2018-01-14', price: 160.05, shares: 10, fee: 1});
        component.find('button').simulate('click');

        expect(called).to.equal(true);
    });

    it('do nothing when btn clicked and invalid data', () => {
        let called = false;
        const props = { addTransaction: () => { called = true; } };

        const component = shallow(<AddTransactionLine {...props} />);

        component.find('button').simulate('click');
        expect(called).to.equal(false);
    });

    it('update ticker when user input value', () => {
        const props = { addTransaction: () => {} };
        const component = shallow(<AddTransactionLine {...props} />);

        const input = component.find('#ticker-input');
        expect(input.text()).to.equal('');
        input.simulate('change', { target: { ticker: 'test'} });
        expect(component.state().ticker).to.equal('test');
    });

    it('update type when user input value', () => {
        const props = { addTransaction: () => {} };
        const component = shallow(<AddTransactionLine {...props} />);

        const input = component.find('#type-input');
        expect(input.text()).to.equal('');
        input.simulate('change', { target: { trx_type: 'Buy'} });
        expect(component.state().trx_type).to.equal('Buy');
    });

    it('update date when user input value', () => {
        const props = { addTransaction: () => {} };
        const component = shallow(<AddTransactionLine {...props} />);

        const input = component.find('#date-input');
        expect(input.text()).to.equal('');
        input.simulate('change', { target: { date: '2018-01-17'} });
        expect(component.state().date).to.equal('2018-01-17');
    });

    it('update shares when user input value', () => {
        const props = { addTransaction: () => {} };
        const component = shallow(<AddTransactionLine {...props} />);

        const input = component.find('#shares-input');
        expect(input.text()).to.equal('');
        input.simulate('change', { target: { shares: '17'} });
        expect(component.state().shares).to.equal('17');
    });

    it('update price when user input value', () => {
        const props = { addTransaction: () => {} };
        const component = shallow(<AddTransactionLine {...props} />);

        const input = component.find('#price-input');
        expect(input.text()).to.equal('');
        input.simulate('change', { target: { price: '242'} });
        expect(component.state().price).to.equal('242');
    });

    it('update fee when user input value', () => {
        const props = { addTransaction: () => {} };
        const component = shallow(<AddTransactionLine {...props} />);

        const input = component.find('#fee-input');
        expect(input.text()).to.equal('');
        input.simulate('change', { target: { fee: '1'} });
        expect(component.state().fee).to.equal('1');
    });
});
