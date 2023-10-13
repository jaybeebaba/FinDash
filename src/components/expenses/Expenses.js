import "./Expenses.css"
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useEffect, useState } from "react";

const Expenses = () => {
const [expense, setExpense] = useState()
const {user} = UseAuthContext()

const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

useEffect(()=>{
  const loggedInUserId = user.uid;

  const expenseTransactionsForCurrentUser = transactions.filter(transaction => {
    return transaction.type === 'expense' && transaction.createdBy.id === loggedInUserId;
  });
  const totalExpensesForCurrentUser = expenseTransactionsForCurrentUser.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  setExpense(totalExpensesForCurrentUser.toFixed(2));

}, [transactions])


  return (
    <div className="expenses wrap">
      <div>
        <h3>Expenses</h3>
        <h1>${expense}</h1>
      </div>
    </div>
  )
}

export default Expenses