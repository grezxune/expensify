import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should total expenses correctly', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195);
});

test('should return 0 if no expenses', () => {
    const total = getExpensesTotal();
    expect(total).toBe(0);
});

test('should total expense correctly for a single expense', () => {
    const total = getExpensesTotal([expenses[1]]);
    expect(total).toBe(expenses[1].amount);
});