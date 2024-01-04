import React from 'react';
import TwistBox from './TwistBox';

const DisplayTwist = ({ dives }) => {
	let arr = [];
	let array = [];

	for (let i = 0; i < dives.length; i++) {
		let d = dives[i];
		let n = d.num;

		if (i == 0) {
			arr.push(d);
		} else {
			let last = dives[i - 1];
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
		<div className='dbox-tw'>
			<div className='dbox-wrap dbox-tw'>
				{array.map((d, index) => {
					return <TwistBox dive={d} key={index} />;
				})}
			</div>
		</div>
	);
};

export default DisplayTwist;
