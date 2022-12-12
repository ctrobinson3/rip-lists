import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { selectedMeet } from '../recoilMeetManager/atomsMeetManager';

const FutureMeetOpt = (meet) => {
	const info = meet.meet;
	const [thisMeet, setThisMeet] = useRecoilState(selectedMeet);

	const onMeetSelect = () => {
		setThisMeet(info);
	};

	return (
		<li className='meet-opt' onClick={onMeetSelect}>
			<Link className='meet-opt-single' to='/openmeet'>
				<header>
					<p>{info.name}</p>
					<p>{info.date}</p>
				</header>
				<div className='meet-body'>
					<p>{info.event}</p>
					<p>Divers: {info.divers.length}</p>
				</div>
			</Link>
		</li>
	);
};

export default FutureMeetOpt;
