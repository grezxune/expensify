import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expense-list-item';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
    return (
        <div>
            {
                props.expenses.length === 0 ? (
                    <p>No expenses</p>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem {...expense} key={expense.description} />;
                    })
                )
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseList);