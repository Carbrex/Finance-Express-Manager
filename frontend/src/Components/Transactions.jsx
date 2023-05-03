import React, { useEffect } from 'react';
import { useState } from 'react';
import './styles/transactions.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Transactions = ({ onDashboard }) => {
	const [] = useState('');
	const [data, setData] = useState([]);
	const updateTrnsc = (id) => {};
	const deleteTrnsc = (id) => {};
	useEffect(() => {
		const arr = {
			count: 1,
			entries: [
				{
					_id: '644cda32be918cd71f54fce7',
					category: 'worldbank',
					amount: 2,
					transaction_type: 'Cr',
					remarks: 'Swiss bank se aaya h',
					createdBy: '644186a25e13e632baccd452',
					createdAt: '2023-04-29T08:49:54.837Z',
					updatedAt: '2023-04-29T08:49:54.837Z',
					__v: 0,
				},
			],
		};
		if (onDashboard) setData(arr.entries.splice(0, 5));
		else setData(arr.entries);
	}, []);

	return (
		<div className='card'>
			{onDashboard ? (
				<>
					<h4>Recent Transactions</h4>
					<br/>
				</>
			) : (
				<>
					<h4>Transactions</h4>
					<button className='btns btn-green'>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<AddCircleOutlineIcon />
							<p>ADD TRANSACTION</p>
						</div>
					</button>
				</>
			)}
			<table className='trnsc-table'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Flow</th>
						<th>Description</th>
						<th>Value</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => {
						const {
							category,
							amount,
							transaction_type,
							remarks,
							createdAt,
							_id: id,
						} = item;
						return (
							<tr key={id}>
								<td>{createdAt}</td>
								<td>{transaction_type}</td>
								<td>{remarks}</td>
								<td>{amount}</td>
								<td>
									<button>
										<EditIcon onClick={deleteTrnsc} />
									</button>
									<button>
										<DeleteIcon onClick={deleteTrnsc} />
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Transactions;
