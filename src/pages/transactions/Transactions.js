import {useState, useEffect} from 'react'
import "../../components/recent/Recent.css"
import {UseAuthContext} from "../../hooks/UseAuthContext"

const Transactions = () => {
  const {user} = UseAuthContext()

  const [transactions, setTransactions] = useState(null)

  const transactionList = transactions ? (transactions.map(transaction =>{
   
      return(
        <li key={transaction.id}>
              <p>{transaction.name}</p>
              <p>{transaction.type}</p>
              <p>{transaction.category}</p>
              <p>{transaction.date}</p>
              <p>${transaction.amount}</p>
            </li>
      )
    
  })):(<>No Transactions</>)
  useEffect(()=>{
    const current = JSON.parse(localStorage.getItem('transactions'))
    const userTransaction = current.filter(transaction => transaction.createdBy.id === user.uid)

    setTransactions(userTransaction)
 }, [])
  return (
    <div className='transactions wrapper'>
        <h4>Transactions</h4>
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
  )
}

export default Transactions