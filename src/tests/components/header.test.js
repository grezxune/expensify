import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/header';

let startLogout, wrapper;

beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />);
});

test('should render header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    wrapper.find('button').at(0).simulate('click', () => {
        expect(startLogout).toHaveBeenCalled();
    });
});
