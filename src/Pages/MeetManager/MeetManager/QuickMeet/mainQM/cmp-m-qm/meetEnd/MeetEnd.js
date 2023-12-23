import React from 'react';
import { useRecoilValue } from 'recoil';
import { diversAtom, meetDataAtom } from '../../../recoilQM/atoms-qm';
import { nanoid } from 'nanoid';
import { Link, useNavigate } from 'react-router-dom';
import DiverDisplay from './DiverDisplay';
import HomeNavBurg from '../../../../../../Home/HomeNavBurg';
import HomeNavDark from '../../../../../../Home/HomeNavDark';

const MeetEnd = () => {
	const navigate = useNavigate();
	const divers = useRecoilValue(diversAtom);
	const meetData = useRecoilValue(meetDataAtom);

	const goHome = () => {
		navigate('/');
		window.location.reload(true);
	};

	console.log(divers.length);
	console.log(divers);
	console.log(meetData);

	return (
		<div className='me-wrap'>
			<HomeNavBurg />
			<HomeNavDark />
			<div className='me-head'>Meet Completed!</div>
			{/* <div className='me-results-download'>
				<div className='download-btn'>Download Results</div>
			</div> */}
			<div className='me-wrap-2'>
				<div className='me-divers-wrap'>
					<div className='EM-DD-wrap'>
						{divers.map((d, index) => (
							<DiverDisplay key={nanoid()} thisDiver={d} index={index} />
						))}
					</div>
				</div>
			</div>
			<div className='me-foot'>
				<div className='home-btn' onClick={goHome}>
					Finish Meet
				</div>
			</div>
		</div>
	);
};

export default MeetEnd;
