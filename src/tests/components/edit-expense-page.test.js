import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/edit-expense-page';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
                        startEditExpense={startEditExpense}
                        startRemoveExpense={startRemoveExpense} 
                        history={history} 
                        expense={expenses[1]} />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call editExpense upon submit', () => {
    const editedExpense = {
        ...expenses[1],
        description: 'New Desc',
        amount: '123.45'
    };

    wrapper.find('ExpenseForm').prop('onSubmit')(editedExpense);
    expect(startEditExpense).toHaveBeenLastCalledWith(editedExpense.id, editedExpense);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click', () => ({
        e: undefined
    }));

    expect(startRemoveExpense).toHaveBeenCalled();
    expect(history.push).toHaveBeenLastCalledWith('/');
});