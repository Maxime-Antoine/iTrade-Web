import React from 'react';
import expect from 'expect';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PortfolioLine from './Portfolio';

Enzyme.configure({ adapter: new Adapter() });

it('renders with correct props', () => {
    const props = {
        name: 'Test stock',
        ticker: 'TEST',
        price: 100,
        change: 0,
        shares: 10,
        cost_basis: 500
    };
    const expected = {
        price: '100.00',
        change: '0.00(0.00%)',
        cost_basis: '500.00',
        market_value: '1000.00',
        gain: '500.00',
        day_gain: '0.00',
        gain_pct: '100.00%'
    };

    const component = shallow(<PortfolioLine {...props} />);

    expect(component.find('tr').children().length).toBe(10);
    expect(component.find('tr').childAt(0).text()).toBe(props.name);
    expect(component.find('tr').childAt(1).text()).toBe(props.ticker);
    expect(component.find('tr').childAt(2).text()).toBe(expected.price);
    expect(component.find('tr').childAt(3).text()).toBe(expected.change);
    expect(component.find('tr').childAt(4).text()).toBe(props.shares.toString());
    expect(component.find('tr').childAt(5).text()).toBe(expected.cost_basis);
    expect(component.find('tr').childAt(6).text()).toBe(expected.market_value);
    expect(component.find('tr').childAt(7).text()).toBe(expected.gain);
    expect(component.find('tr').childAt(8).text()).toBe(expected.day_gain);
    expect(component.find('tr').childAt(9).text()).toBe(expected.gain_pct);
});
