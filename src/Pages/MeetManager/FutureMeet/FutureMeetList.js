import React from 'react';
import { useRecoilValue } from 'recoil';
import { futureMeetsQuery } from '../recoilMeetManager/atomsMeetManager';
import { FutureMeetOpt } from '../indexMeetManager';

const FutureMeetList = () => {
	const meets = useRecoilValue(futureMeetsQuery);

	return (
		<div className='meet-list-wrap'>
			{meets.meets.map((m) => (
				<FutureMeetOpt meet={m} />
			))}
		</div>
	);
};

export default FutureMeetList;
