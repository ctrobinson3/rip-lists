import React from 'react';
import DBoxInfo from './DBoxInfo';

const DiveBox = ({ dive }) => {
	const dInfo = dive[0];

	const displayInfo = () => {};

	return (
		<div className='dbox-wrap'>
			<div className='dbox-container'>
				<div className='dbox-head'>{dInfo.num}</div>

				<div>
					{dInfo.direction} {dInfo.rotation}
				</div>
				<hr />
				<div className='dbox-info'>
					{dive.map((d, index) => {
						return <DBoxInfo dive={d} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default DiveBox;
