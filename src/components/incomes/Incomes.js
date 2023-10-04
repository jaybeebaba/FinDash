import "./Incomes.css"
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useEffect, useState } from "react";


const Incomes = () => {
    const [income, setIncome] = useState()
    const {user} = UseAuthContext()
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
   
    
    useEffect(()=>{
       
       const loggedInUserId = user.uid; 
       const incomeTransactionsForCurrentUser = transactions.filter(transaction => {
         return transaction.type === 'income' && transaction.createdBy.id === loggedInUserId;
       });
       const totalIncomessForCurrentUser = incomeTransactionsForCurrentUser.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
       
     setIncome(totalIncomessForCurrentUser.toFixed(2));
   
   }, [transactions])
   
    return (
        <div className="incomes wrap">
            <div>
                <h3>Income</h3>
                <h1>${income}</h1>
            </div>
        </div>
    )
}

export default Incomes