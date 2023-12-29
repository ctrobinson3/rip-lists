import React, { useState } from 'react';

import IndividualDives from './IndividualDives';
import DiveBox from './DiveBox';

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

	//
	// Organize
	//

	let arr = [];
	let array = [];

	for (let i = 0; i < diveInfo.length; i++) {
		let d = diveInfo[i];
		let n = d.num;

		if (i == 0) {
			arr.push(d);
		} else {
			let last = diveInfo[i - 1];
			let lastNum = last.num;
			if (n == lastNum) {
				arr.push(d);
			} else {
				array.push(arr);
				arr = [];
				arr.push(d);
			}
		}
	}
	array.push(arr);
	return (
		<div className='dive-display-wrap'>
			<div className='dive-display-header'>{headerTxt()}</div>
			<div className='dive-display-dives'>
				{diveInfo.map((d, index) => {
					// return <IndividualDives dive={d} key={index} />;
				})}
			</div>
			<div className='dive-box-wrap'>
				<div>Dives:</div>
				{array.map((d, index) => {
					return <DiveBox dive={d} key={index} />;
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
