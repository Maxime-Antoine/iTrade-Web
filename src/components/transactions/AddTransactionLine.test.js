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

    it('call addTransaction when button clicked', () => {
        let called = false;
        const props = { addTransaction: (trx) => { called = true; } };

        const component = shallow(<AddTransactionLine {...props} />);

        component.find('button').simulate('click');
        expect(called).to.equal(true);
    });
});
