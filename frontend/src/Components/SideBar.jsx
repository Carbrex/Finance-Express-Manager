import React from 'react';
import './styles/sidebar.css';
import { NavLink } from 'react-router-dom'
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
			<Cname>
				myfin
			</Cname>
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
const Cname = ({ children }) => {
	return (
		<div style={{
			border: '2px solid black',
			color: '#fff',
			fontSize: '50px',
			fontWeight: '400',
			height: '75px'
		}} >
			{children}
		</div >);
}