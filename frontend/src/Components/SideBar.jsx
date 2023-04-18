import React from 'react';
import './styles/sidebar.css';

const ListItem = ({ name, link }) => {
	return (
		<li>
			<a href={link}>{name}</a>
		</li>
	);
};

export default function Sidebar(name) {
	return (
		<div className='sidebar'>
			<ul>
				<ListItem
					name='Dashboard'
					link='#'
				/>
				<ListItem
					name='Transactions'
					link='#'
				/>
				<ListItem
					name='Accounts'
					link='#'
				/>
				<ListItem
					name='Categories'
					link='#'
				/>
				<ListItem
					name='Investments'
					link='#'
				/>
				<ListItem
					name='Expenses'
					link='#'
				/>
			</ul>
		</div>
	);
}
