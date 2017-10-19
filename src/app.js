import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/app-router';
import configureStore from './store/configure-store';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 3000,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: 'Credit Card',
    amount: 186200,
    note: 'Paid off completely'
}));

store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 8000,
}));

// store.dispatch(setTextFilter('bill'));
// let state = store.getState();
// console.log('Store State: ', store.getState());
// console.log(getVisibleExpenses(state.expenses, state.filters));
// store.dispatch(setTextFilter('water'));
// state = store.getState();
// console.log('Store State: ', store.getState());
// console.log(getVisibleExpenses(state.expenses, state.filters));
// store.dispatch(setTextFilter('cred'));
// state = store.getState();
// console.log('Store State: ', store.getState());
// console.log(getVisibleExpenses(state.expenses, state.filters));

// setTimeout(() => {
//     store.dispatch(setTextFilter('rent'));
// }, 3000);

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);

ReactDOM.render(
    jsx,
    document.getElementById('app')
);