import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { numDivesAtom } from '../../recoilQM/atoms-qm';
import SixDiveInput from './sixdive/SixDiveInput';
import ElevenDiveInput from './ElevenDiveInput';
import MainSix from './sixdive/MainSix';

const EnterDives = () => {
	const numDives = useRecoilState(numDivesAtom);

	// dive amount
	const diveDisplay = () => {
		if (numDives.includes('6 dive')) return <MainSix />;
		else if (numDives.includes('11 dive')) return <ElevenDiveInput />;
		else return <div>Please select a dive amount!</div>;
	};

	return (
		<div className='manager-form'>
			<div className='manager-med-txt qm-center'>Dives:</div>
			{diveDisplay()}
		</div>
	);
};

export default EnterDives;
