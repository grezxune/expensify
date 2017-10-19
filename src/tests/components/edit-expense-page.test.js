import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/edit-expense-page';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
                        editExpense={editExpense}
                        removeExpense={removeExpense} 
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
    expect(editExpense).toHaveBeenLastCalledWith(editedExpense.id, editedExpense);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click', () => ({
        e: undefined
    }));

    expect(removeExpense).toHaveBeenCalled();
    expect(history.push).toHaveBeenLastCalledWith('/');
});