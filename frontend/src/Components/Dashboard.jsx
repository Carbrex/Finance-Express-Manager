import React from 'react';
import { useState } from 'react';
import Transactions from './Transactions';
import RecentTransaction from './RecentTransaction';
import OverviewChart from './OverviewChart';
import './styles/dashboard.css';

const url = 'localhost:5000/api/v1/entry';

const Dashboard = () => {
	const [amount, setAmount] = useState('10,000$');
	const [data, setData] = useState([]);

	return (
		<>
			<div className='btn-section'>
				<button className='db-btn btn-newtr'>New Transaction</button>
				<button className='db-btn btn-seetr'>See Transaction</button>
				<button className='db-btn btn-seestat'>See Stats</button>
			</div>
			<div className='overview'>
				<div className='one'>
					<OverviewChart />
				</div>
				<div className='two'>
					<Transactions onDashboard={true} />
				</div>
				<div className='three'>apple</div>
				<div className='four'>apple</div>
			</div>
		</>
	);
};

export default Dashboard;
