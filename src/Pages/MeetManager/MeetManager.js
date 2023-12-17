import React from 'react';
import '../../Components/Styles/meetmanager.css';
import HomeNavDark from '../Home/HomeNavDark';
import HomeNavBurg from '../Home/HomeNavBurg';
import { Link, useNavigate } from 'react-router-dom';
import '../../Components/Styles/manager.css';

const MeetManager = () => {
	const navigate = useNavigate();

	return (
		<div className='meet-manager-wrap'>
			<HomeNavDark />
			<HomeNavBurg />
			<header>
				<p className='meet-header'>Meets</p>
			</header>
			<div className='meet-link-container'>
				<div className='meet-link' onClick={() => navigate('/meet-manager')}>
					Create a Meet
				</div>
				<div className='meet-not-link'>Other options coming soon...</div>
			</div>
		</div>
	);
};

export default MeetManager;

// <div className='meets-wrap'>
// 	<div className='meets-div'>
// 		<div className='meets-head'>
// 			<p className='meets-h2'>Future Meets</p>
// 			<div className='meets-data'>
// 				<FutureMeetList />
// 			</div>
// 		</div>
// 	</div>
// 	<div className='meets-div'>
// 		<div className='meets-head'>
// 			<p className='meets-h2'>Past Meets</p>
// 		</div>
// 		<div className='meets-data'></div>
// 	</div>
// </div>
// <div className='meets-create'>
// 	<button
// 		className='meet-create-btn'
// 		onClick={() => {
// 			console.log('mep');
// 		}}
// 	>
// 		Create Meet
// 	</button>
// </div>
