import React, { useState } from 'react';
import './styles/statusbar.css';


const StatusBar = () => {
	const [amount, setAmount] = useState(10000);
	const [data, setData] = useState([]);

	return (
		<div className='status-bar'>
			<Card
				name='Operating Funds'
				amount={amount}
			/>
			<Card
				name='Investing'
				amount={amount}
			/>
			<Card
				name='Debt'
				amount={amount}
			/>
			<Card
				name='Net Worth'
				amount={amount}
			/>
		</div>
	);
};

function Card({ name, amount }) {
	return (
		<div className='crd'>
			{name}
			<p>${amount}</p>
		</div>
	);
}
export default StatusBar;
