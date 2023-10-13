import React, { useState } from 'react';
import './budget.css';

const Budget = () => {
const [amount, setAmount] = useState('');
const [category, setCategory] = useState('');

const handleAddTransaction = () => {
};

return (
<div className="budget-container">
    <h2 className="budget-title">Budget</h2>
    <input
        className="budget-input"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
    />
    <input
        className="budget-input"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
    />
    <button className="budget-button" onClick={handleAddTransaction}>
        Add Transaction
    </button>
    </div>
);
};

export default Budget;
