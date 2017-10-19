import React from 'react';
import ExpenseList from './expense-list';
import ExpenseListFilters from './expense-list-filters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;