import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/expense-list-item';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with expense object', () => {
    const expense = expenses[1];
    const wrapper = shallow(<ExpenseListItem {...expense} key={expense.description} />);
    expect(wrapper).toMatchSnapshot();
});
