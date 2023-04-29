import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Transactions from './Components/Transactions';
import Investments from './Components/Investments';
export default function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					<Navbar />
				</header>
				<div className='App'>
					<SideBar />
					<section >
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/transactions" element={<Transactions />} />
              <Route path = "/investments" element = {<Investments />} />
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
