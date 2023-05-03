import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

//CSS
import './Components/styles/App.css';

//Components
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import Dashboard from './Components/Dashboard';
import Transactions from './Components/Transactions';
import Investments from './Components/Investments';
import StatusBar from './Components/StatusBar';
import Footer from './Components/Footer';

export default function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					<Navbar />
				</header>
				<div className='App'>
					<SideBar />
					<section className="app-section">
						<StatusBar />
						<Routes>
							<Route
								path='/'
								element={<Dashboard />}
							/>
							<Route
								path='/transactions'
								element={<Transactions onDashboard={false}/>}
							/>
							<Route
								path='/accounts'
								element={<Investments />}
							/>
							<Route
								path='/categories'
								element={<Investments />}
							/>
							<Route
								path='/entities'
								element={<Investments />}
							/>
							<Route
								path='/investments'
								element={<Investments />}
							/>
							<Route
								path='/stats'
								element={<Investments />}
							/>
						</Routes>
					</section>
				</div>
			</BrowserRouter>
			{/* <footer>
				<Footer />
			</footer> */}
		</>
	);
}
