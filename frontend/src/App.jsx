import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
export default function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<div className='App'>
			<Dashboard/>
				<SideBar />
				<h1>Personal Finance Manager</h1>
			</div>
			
			<footer>
				<Footer />
			</footer>
		</>
	);
}
