import React from 'react';
import '../../Components/Styles/meetmanager.css';
import HomeNavDark from '../Home/HomeNavDark';

import { FutureMeetList } from './indexMeetManager';

const MeetManager = () => {
	return (
		<div className='meet-manager-wrap'>
			<HomeNavDark />
			<header>
				<p className='meet-header'>Dive Meets</p>
			</header>
			<div className='meets-wrap'>
				<div className='meets-div'>
					<div className='meets-head'>
						<p className='meets-h2'>Future Meets</p>
						<div className='meets-data'>
							<FutureMeetList />
						</div>
					</div>
				</div>
				<div className='meets-div'>
					<div className='meets-head'>
						<p className='meets-h2'>Past Meets</p>
					</div>
					<div className='meets-data'></div>
				</div>
			</div>
			<div className='meets-create'>
				<button
					className='meet-create-btn'
					onClick={() => {
						console.log('mep');
					}}
				>
					Create Meet
				</button>
			</div>
		</div>
	);
};

export default MeetManager;
