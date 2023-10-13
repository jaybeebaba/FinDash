import React from 'react';
import './dashboard.css';
import FinancialInsights from './financialInsight';
import IncomeExpenseChart from './expenses';
import ExpenseAlerts from './expenseAlerts';

const Dashboard = ({ transactions, insightsData, alertThreshold }) => {
return (
    <div className="dashboard-container">
    <h2 className="dashboard-title">Financial Dashboard</h2>

    <div className="dashboard-section">
    <FinancialInsights transactions={transactions} />
    </div>

    <div className="dashboard-section">
        <IncomeExpenseChart data={insightsData} title="Income vs. Expenses" />
    </div>

    <div className="dashboard-section">
        <ExpenseAlerts transactions={transactions} categoryThreshold={alertThreshold} />
    </div>
    </div>
);
};

export default Dashboard;
