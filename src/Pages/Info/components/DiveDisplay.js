import React from 'react';

import IndividualDives from './IndividualDives';

import { divesAtom } from './atomsTable';
import { useRecoilValue } from 'recoil';

const DiveDisplay = ({ back }) => {
	const diveInfo = useRecoilValue(divesAtom);
	const first = diveInfo[0];
	const headerTxt = () => {
		if (first.cat == 5) {
			return 'Twister';
		} else return first.direction;
	};

	return (
		<div className='dive-display-wrap'>
			<div className='dive-display-header'>{headerTxt()}</div>
			<div className='dive-display-dives'>
				{diveInfo.map((d, index) => {
					return <IndividualDives dive={d} key={index} />;
				})}
			</div>
			<div className='btn-wrap'>
				<div className='close-btn' onClick={back}>
					Back
				</div>
			</div>
		</div>
	);
};

export default DiveDisplay;
