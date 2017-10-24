import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/loading-page';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<LoadingPage/>);
});

test('should render loading page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});