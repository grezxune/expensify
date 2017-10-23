import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
    } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = { description, note, amount, createdAt };
    });

    database.ref('expenses').set(expenseData).then(() => done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore(expenses);

    store.dispatch(startRemoveExpense({ id: expenses[1].id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: expenses[1].id
        });
        return database.ref(`expenses/${expenses[1].id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeNull();
        done();
    });
});

test('should edit correct expense', () => {
    const action = editExpense('123abc', {
        description: 'new description',
        amount: 123.45
    });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'new description',
            amount: 123.45
        }
    });
});

test('should edit correct expense in Firebase', (done) => {
    const store = createMockStore(expenses[0]);
    const updates = {
        description: 'Edited!'
    };

    store.dispatch(startEditExpense(expenses[0].id, updates)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenses[0].id,
            updates 
        });

        return database.ref(`expenses/${expenses[0].id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().description).toBe(updates.description);
        done();
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last months rent'
    };

    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const defaultExpenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultExpenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultExpenseData);
        done();
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});