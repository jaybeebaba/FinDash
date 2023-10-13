import React from 'react';
import './financialInsight.css';

const FinancialInsights = ({ transactions }) => {

const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0);

const totalExpenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0);

return (
    <div>
    <h2>Financial Insights</h2>
    <p>Total Income: ${totalIncome}</p>
    <p>Total Expenses: ${totalExpenses}</p>
    <p>Net Income: ${totalIncome - totalExpenses}</p>
    </div>
);
};

export default FinancialInsights;
