import './styles/investments.css';
import React from 'react';
import reactsvg from '../assets/react.svg';

const Investments = () => {
	const [selection, setSelection] = React.useState('Summary');
	return (
		<div className='investments'>
			<h4>Investments(Beta)</h4>
			<div className='tabs'>
				<Tab
					name={'Summary'}
					selectme={setSelection}
					selection={selection}
				/>
				<Tab
					name={'Assets'}
					selectme={setSelection}
					selection={selection}
				/>
				<Tab
					name={'Transactions'}
					selectme={setSelection}
					selection={selection}
				/>
				<Tab
					name={'Reports'}
					selectme={setSelection}
					selection={selection}
				/>
			</div>
			<div className='report-section'>
				{selection === 'Summary' ? (
					<Summary />
				) : selection === 'Assets' ? (
					<Assets />
				) : selection === 'Transactions' ? (
					<Transaction />
				) : selection === 'Reports' ? (
					<Reports />
				) : (
					'Error Aa gya bhai....'
				)}
			</div>
			<div className='summary-section'>
				<SummaryTab
					name={'Total Invested'}
					amount={`3992.29$`}
				/>
				<SummaryTab
					name={'Current Value'}
					amount={`4108.99$`}
				/>
				<SummaryTab
					name={'ROI 2023'}
					amount={`258.56$ (6.72%)`}
				/>
				<SummaryTab
					name={'Global ROI'}
					amount={`116.7$ (1.	44%)`}
				/>
			</div>
		</div>
	);
};

function Summary() {
	return (
		<>
			<div className='summary'>
				<div className='chart'>Chart lga diyo bhai idhr #Araj</div>
				<div className='top-performer'>
					<h4>Top Performer</h4>
					<Performer
						name='Pluton'
						type='crypto'
						percentage={1.92}
						increase={417.15}
						imgsrc={reactsvg}
					/>
					<Performer
						name='Pluton'
						type='crypto'
						percentage={1.92}
						increase={417.15}
						imgsrc={reactsvg}
					/>
					<Performer
						name='Pluton'
						type='crypto'
						percentage={1.92}
						increase={-417.15}
						imgsrc={reactsvg}
					/>
				</div>
			</div>
		</>
	);
}
function Assets() {
	return (
		<>
			<div>Assets</div>
		</>
	);
}
function Transaction() {
	return (
		<>
			<div>Transaction</div>
		</>
	);
}
function Reports() {
	return (
		<>
			<div>Reports</div>
		</>
	);
}
function Performer({ name, type, percentage, increase, imgsrc }) {
	return (
		<div className='performer'>
			<img
				className='imgsvg'
				src={imgsrc}
				alt={`${name}+logo`}
			/>
			<div className='details'>
				<span className='name'>{name}</span>
				<span className='type'>{type}</span>
				<span className='percentage'>{percentage}% of portfolio</span>
			</div>
			<span className={increase >= 0 ? 'increase profit' : 'decrease profit'}>
				{increase >= 0 ? `+${increase}$` : `${increase}$`}
			</span>
		</div>
	);
}
function Tab({ name, selectme, selection }) {
	return (
		<button
			className={selection === name ? 'btnSelected btnrandom' : 'btnrandom'}
			onClick={() => {
				selectme(name);
			}}>
			{name}
		</button>
	);
}
function SummaryTab({ name, amount }) {
	return (
		<div className='tab'>
			{amount}
			<br />
			{name}
		</div>
	);
}

export default Investments;
