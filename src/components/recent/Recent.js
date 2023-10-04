import "./Recent.css"
import {useState, useEffect} from "react"
import {UseAuthContext} from "../../hooks/UseAuthContext"
import {Link} from "react-router-dom"

const Recent = () => {
  const [transactions, setTransactions] = useState(null)

  const {user} = UseAuthContext()
  const transactionList = transactions ? (transactions.slice(0,5).map(transaction =>{
    
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
     const userTransaction = current.filter(transaction => transaction.createdBy.id === user.uid).sort((a,b) =>   Date.parse(b.date) - Date.parse(a.date))

     setTransactions(userTransaction)
  }, [])
  return (
    <div className="recent">
        <h4>Recent Transactions</h4>
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
        <Link to="/transactions">more transactions</Link>
    </div>
  )
}

export default Recent