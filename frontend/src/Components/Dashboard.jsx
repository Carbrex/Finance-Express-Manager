import React from 'react'
import {useState} from 'react'
import './styles/dashboard.css';
const Dashboard = () => {
    const [data,setData] = useState('10,000$')
  return (
    <header className='header'>
      <div className='funds'>
        Operating Funds
        <p>{data}</p>
      </div>
      <div className='funds'>
        Investing
        <p>{data}</p>
      </div>
      <div className='funds'>
        Debt
        <p>{data}</p>
      </div>
      <div className='funds'>
        Net Worth
        <p>{data}</p>
      </div>
      <div>
        <button>New Transaction</button>
        <button>New Budget</button>
        <button>New See Transaction</button>
        <button>See Stats</button>
      </div>
    </header>
  )
}

export default Dashboard
