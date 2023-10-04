import { useState, useEffect } from "react";
import "./Balance.css"
import { UseAuthContext } from "../../hooks/UseAuthContext";
const Balance = () => {

  const [balance, setBalance] = useState()
  const {user} = UseAuthContext()
 
 const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
 
 const loggedInUserId = user.uid; 
 
 
 useEffect(()=>{
  const incomeTransactionsForCurrentUser = transactions.filter(transaction => {
    return transaction.type === 'income' && transaction.createdBy.id === loggedInUserId;
  });
  const totalIncomessForCurrentUser = incomeTransactionsForCurrentUser.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

  const expenseTransactionsForCurrentUser = transactions.filter(transaction => {
    return transaction.type === 'expense' && transaction.createdBy.id === loggedInUserId;
  });
  const totalExpensesForCurrentUser = expenseTransactionsForCurrentUser.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

  const balanceForCurrentUser =  totalIncomessForCurrentUser - totalExpensesForCurrentUser
  
  setBalance(balanceForCurrentUser.toFixed(2))
 
 }, [transactions])
  return (
    <div className="balance wrap">
        <div>
        <h3>Balance</h3>
        <h1>${balance}</h1>
        </div>
    </div>
  )
}

export default Balance