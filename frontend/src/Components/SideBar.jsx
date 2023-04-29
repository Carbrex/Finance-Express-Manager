import React from 'react';
import './styles/sidebar.css';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

function Sidebar() {
	return (
		<div className='Sidebar'>
			{/* <div className='cname'>
				<h2>myfin</h2>
			</div> */}
			<ul className='SidebarList'>
				{SidebarData.map((val, key) => {
					return (
						<Link	
							to={val.link}
							className='row'
							key={key}
						>
							<div id='icon'>{val.icon}</div>
							<div id='title'>{val.title}</div>
						</Link>
					);
				})}
			</ul>
		</div>
	);
}

export default Sidebar;
