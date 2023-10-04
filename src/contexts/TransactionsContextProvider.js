import {useState, useEffect, createContext} from 'react'
import { UseAuthContext } from '../hooks/UseAuthContext'

export const TransactionsContext = createContext()

const TransactionsContextProvider = ({children}) => {
    const [income, setIncome] = useState()
    const [expense, setExpense] = useState()
    const [balance, setBalance] = useState()
    const [transactions, setTransactions] = useState()

    const {user} = UseAuthContext()

   console.log(user)
    useEffect(() => {
      const current = JSON.parse(localStorage.getItem('transactions'));
      console.log(current)
      const userTransaction = current ? current.filter(transaction => transaction.createdBy.id === user?.uid) : [];
      
      setTransactions(current);
    }, []);

  return (
    <TransactionsContext.Provider value={{income, expense, balance, transactions}}> 
        {children}
    </TransactionsContext.Provider>
  )
}

export default TransactionsContextProvider