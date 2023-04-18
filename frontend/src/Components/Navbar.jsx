import React from 'react';
import './styles/navbar.css';
import vitesvg from '../assets/vite.svg';
import { useState } from 'react';
// import {FaBars} from 'react-icons/fa'


const ListItem = ({ name, link }) => {
	return (
		<li>
			<a href={link}>{name}</a>
		</li>
	);
};

const Navbar = () => {

 	return (
		<>
			<nav>
				<div className='nav-center'>
					{/* nav header */}
					<div className='nav-header'>
						<img
							src={vitesvg}
							className='logo'
							alt='logo'
						/>
						<button className='nav-toggle'>
						</button>
					</div>
					{/* links */}
					<ul className='links'>
						<ListItem
							name='Home'
							link='#'
						/>
						<ListItem
							name='About'
							link='#'
						/>
						<ListItem
							name='Contacts'
							link='#'
						/>
						<ListItem
							name='Services'
							link='#'
						/>
					</ul>
					
				</div>
			</nav>
		</>
	);
};

export default Navbar;