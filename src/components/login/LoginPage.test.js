import React from 'react';
import {expect} from 'chai';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from './LoginPage';

Enzyme.configure({ adapter: new Adapter() });

describe('LoginPage', () => {
    it('should render login form', () => {
        const component = shallow(<LoginPage />);

        expect(component.find('form')).to.have.length(1);
        expect(component.find('input')).to.have.length(2);
        expect(component.find('button')).to.have.length(1);
    });
});
