import { useState, useEffect } from 'react';
import "../../components/recent/Recent.css";
import { UseAuthContext } from "../../hooks/UseAuthContext";
import "./Transactions.css"

const Transactions = () => {
  const { user } = UseAuthContext();

  const [transactions, setTransactions] = useState(null);
  const [showIncomes, setShowIncomes] = useState(true); // Added state for showing incomes
  const [showExpenses, setShowExpenses] = useState(true); // Added state for showing expenses

  const handleIncomesToggle = () => {
    setShowIncomes(!showIncomes);
  };

  const handleExpensesToggle = () => {
    setShowExpenses(!showExpenses);
  };

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem('transactions'));
    const userTransaction = current?.filter(transaction => transaction.createdBy.id === user.uid).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

    setTransactions(userTransaction);
  }, [user]);

  const filteredTransactions = transactions ? transactions.filter(transaction => {
    return (showIncomes && transaction.type === 'income') || (showExpenses && transaction.type === 'expense');
  }) : [];

  const transactionList = filteredTransactions.length > 0 ? (
    filteredTransactions.map(transaction => {
      return (
        <li key={transaction.id}>
          <p>{transaction.name}</p>
          <p>{transaction.type}</p>
          <p>{transaction.category}</p>
          <p>{transaction.date}</p>
          <p>${transaction.amount}</p>
        </li>
      );
    })
  ) : (
    <li>No Transactions</li>
  );

  return (
    <div className='transactions wrapper'>
      <h4>Transactions</h4>
      <div>
        <label className='input'>
          <p>Incomes</p>
          <input type='checkbox' checked={showIncomes} onChange={handleIncomesToggle} />
        </label>
        <label className='input'>
          <p>Expenses</p>
          <input type='checkbox' checked={showExpenses} onChange={handleExpensesToggle} />
        </label>
      </div>
      <ul>
        <li>
          <p>Name</p>
          <p>Type</p>
          <p>Category</p>
          <p>Date</p>
          <p>Amount($)</p>
        </li>
        {transactionList}
      </ul>
    </div>
  );
}

export default Transactions;
