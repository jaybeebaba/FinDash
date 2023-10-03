import React from 'react'
import "./Home.css"
import Balance from '../../components/balance/Balance'
import Incomes from '../../components/incomes/Incomes'
import Expenses from '../../components/expenses/Expenses'
import Recent from '../../components/recent/Recent'

const Home = () => {
  return (
    <div className='home wrapper' >
        <Balance />
        <Incomes />
        <Expenses />
        <Recent />

    </div>
  )
}

export default Home