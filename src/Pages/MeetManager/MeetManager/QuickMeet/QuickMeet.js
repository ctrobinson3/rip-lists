import React from 'react';
import AddDiver from './mainQM/AddDiver';
import Info from './mainQM/Info';
import HomeNavBurg from '../../../Home/HomeNavBurg';
import HomeNavDark from '../../../Home/HomeNavDark';
import { useNavigate } from 'react-router-dom';
// recoil
import { meetInfoAtom, numDivesAtom, diversAtom } from './recoilQM/atoms-qm';
import { useRecoilState } from 'recoil';

const QuickMeet = () => {
	const navigate = useNavigate();

	return (
		<div className='manager-page'>
			<HomeNavDark />
			<HomeNavBurg />
			<header>
				<p className='meet-header'>Quick Meet</p>
			</header>
			<div className='disclaimer'>
				<div className='dis-head'>DISCLAIMER:</div>
				<div className='dis-body'>
					The meet manager is currently under testing and I will NOT guarantee
					it works perfectly every time. Please have a backup of your scores as
					not to lose any data from your meet. Please contact me with your
					specific issue if there is one!
				</div>
			</div>
			<div className='manager-body'>
				<Info />
				<AddDiver />
				<div className='center-wrap'>
					<div className='meet-link' onClick={() => navigate('/run-meet')}>
						Create Meet
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuickMeet;
