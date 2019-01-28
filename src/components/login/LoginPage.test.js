import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from './LoginPage';

Enzyme.configure({ adapter: new Adapter() });

describe('LoginPage', () => {
    it('should render login form', () => {
        const component = shallow(<LoginPage />);

        expect(component.find('form')).toHaveLength(1);
        expect(component.find('input')).toHaveLength(2);
        expect(component.find('button')).toHaveLength(1);
    });
});
