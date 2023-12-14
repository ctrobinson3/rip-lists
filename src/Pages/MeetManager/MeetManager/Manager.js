import React from 'react';
import { Link } from 'react-router-dom';

const Manager = () => {
	return (
		<div className='manager-page'>
			<header>
				<p className='meet-header'>Meet Manager</p>
			</header>
			<div className='meet-link-container'>
				<div className='meet-link'>
					<Link to='/quick-meet'>Quick Meet</Link>
				</div>
			</div>
		</div>
	);
};

export default Manager;
