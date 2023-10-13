import React from 'react';
import './expenseAlerts.css';

const ExpenseAlerts = ({ transactions, categoryThreshold }) => {

const overspentCategory = 'Groceries';

const totalCategoryExpenses = transactions
    .filter((transaction) => transaction.category === overspentCategory)
    .reduce((total, transaction) => total + transaction.amount, 0);

if (totalCategoryExpenses > categoryThreshold) {
    return (
    <div>
        <h2>Expense Alerts</h2>
        <p>
    You have overspent in the {overspentCategory} category. Your expenses have exceeded the threshold.
        </p>
    </div>
    );
}

return null;
};

export default ExpenseAlerts;
