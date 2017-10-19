import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/not-found-page';

test('render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});