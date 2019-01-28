import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from './RegisterPage';

Enzyme.configure({ adapter: new Adapter() });

describe('RegisterPage', () => {
    it('should render register form', () => {
        const component = shallow(<LoginPage />);

        expect(component.find('form')).toHaveLength(1);
        expect(component.find('input')).toHaveLength(3);
        expect(component.find('button')).toHaveLength(1);
    });
});
