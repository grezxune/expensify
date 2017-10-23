import uuid from 'uuid';
import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: 'Rent',
            amount: 100000,
            note: '',
            createdAt: moment(0)
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note: 'this is awesome!',
            amount: 1000000
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        {
            ...expenses[1],
            note: action.updates.note,
            amount: action.updates.amount
        },
        expenses[2]
    ]);
});

test('should not edit an expense if not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'new description for missing item',
            amount: 1000000000000000000,
            note: 'This should NEVER work',
            createdAt: moment().subtract(4000000, 'years')
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [{
            description: 'test desc',
            note: 'notey',
            amount: 10000,
            createdAt: 14500
        }]
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(action.expenses);
});