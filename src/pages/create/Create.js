import { useState } from 'react'
import Select from "react-select"
import {UseAuthContext} from "../../hooks/UseAuthContext"
import { v4 as uuidv4 } from 'uuid';
// styles
import './Create.css'
import { useEffect } from 'react'


const expensesCategories = [
  {value: "bills", label: "bills"},
  {value: "groceries", label: "groceries"},
  {value: "entertainment", label: "entertainment"},
  {value: "tithe", label: "tithe"},
  {value: "charity", label: "charity"},
  {value: "clothings/shoes/jewelleries", label: "clothings/shoes/jewelleries"}
]

const incomeCategories = [
  {value: "salary", label: "salary"},
  {value: "freelance work", label: "freelance work"},
  {value: "investment", label: "investment"},
  {value: "gift", label: "gift"}
]

const types = [
  {value: "income", label: "income"},
  {value: "expense", label: "expense"}
]
export default function Create() {
  const [selectUsers, setSelectUsers] = useState([])
  const [formError, setFormError] = useState("")

  const {user} = UseAuthContext()
  // const history = useHistory()


  // form field values
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')


  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)
    if(!category){
      setFormError("Please select a category")
      return
    }

    if(!type){
      setFormError("Please select a transaction type")
      return
    }

    const createdBy = {
      name: user.displayName,
      id: user.uid
    }

    const transaction = {
      createdBy,
      name,
      type: type.value,
      date,
      amount: parseFloat(amount).toFixed(2),
      category: category.value,
      id: uuidv4()
    }
     
    const existingTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
  
    const updatedTransactions = [...existingTransactions, transaction];
  
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    setAmount("")
    setCategory("")
    setName("")
    setDate("")
    setType("")
  }

  return (
    <div className="create-form wrapper">
      <h2 className="page-title">Add new Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name</span>
          <input
            required 
            type="text" 
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Transaction Type</span>
          <Select 
            options={types}
            onChange={(option) => setType(option) }
          />
        </label>
       
        <label>
          <span>Choose Transaction Date</span>
          <input
            required 
            type="date" 
            onChange={(e) => setDate(e.target.value)} 
            value={date}
          />
        </label>
        <label>
          <span>Transaction Amount</span>
          <input
            required 
            type="number" 
            onChange={(e) => setAmount(e.target.value)} 
            value={amount}
          />
        </label>
        
        <label>
          <span>Transaction category</span>
          <Select 
            options={type.value === "income" ? incomeCategories : expensesCategories}
            onChange={(option) => setCategory(option) }
          />
        </label>
        <button className="btn">Add Project</button>
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  )
}