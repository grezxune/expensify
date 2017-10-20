import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/expenses-summary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary correctly with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with two expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={2350000000} />);
    expect(wrapper).toMatchSnapshot();
});