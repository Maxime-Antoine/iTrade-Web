import React from 'react';
import {expect} from 'chai';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from './RegisterPage';

Enzyme.configure({ adapter: new Adapter() });

describe('RegisterPage', () => {
    it('should render register form', () => {
        const component = shallow(<LoginPage />);

        expect(component.find('form')).to.have.length(1);
        expect(component.find('input')).to.have.length(3);
        expect(component.find('button')).to.have.length(1);
    });
});
