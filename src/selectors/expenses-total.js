const getExpensesTotal = (expenses = []) => {
    return expenses
    .map((expense) => expense.amount)
    .reduce((previous, current, index, arr) => previous + current, 0);
};

export default getExpensesTotal;