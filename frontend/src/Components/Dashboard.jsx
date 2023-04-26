import React from 'react'
import { useState } from 'react'
import RecentTransaction from './RecentTransaction';
import OverviewChart from './OverviewChart';
import './styles/dashboard.css';

const url = "localhost:5000/api/v1/entry";

const Dashboard = () => {
  const [amount, setAmount] = useState('10,000$')
  const [data, setData] = useState([]);

  return (
    <header className='header'>
      <Card name="Operating Funds" amount={amount} />
      <Card name="Investing" amount={amount} />
      <Card name="Debt" amount={amount} />
      <Card name="Net Worth" amount={amount} />

      <div>
        <button>New Transaction</button>
        <button>New Budget</button>
        <button>See Transaction</button>
        <button>See Stats</button>
      </div>

      <div className="overview" style={{ display: 'flex' }}>
        <OverviewChart />
        <RecentTransaction />
      </div>
    </header>
  )
}

function Card({ name, amount }) {
  return (
    <div className="ca">
      {name}
      <p>{amount}</p>
    </div>
  );
}

export default Dashboard
