import React from 'react';
import HomeNavDark from '../../Home/HomeNavDark';
import HomeNavBurg from '../../Home/HomeNavBurg';
import { Link, useNavigate } from 'react-router-dom';

const Manager = () => {
	const navigate = useNavigate();
	return (
		<div className='manager-page'>
			<HomeNavDark />
			<HomeNavBurg />
			<header>
				<p className='meet-header'>Create a Meet</p>
			</header>
			<div className='meet-link-container'>
				<div className='meet-link' onClick={() => navigate('/quick-meet')}>
					Quick Meet
				</div>
				<div className='meet-link-back' onClick={() => navigate('/meets')}>
					Back
				</div>
			</div>
		</div>
	);
};

export default Manager;
