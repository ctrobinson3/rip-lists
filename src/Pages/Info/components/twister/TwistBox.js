import React from 'react';
import TwistBoxInfo from './TwistBoxInfo';

const TwistBox = ({ dive }) => {
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
						return <TwistBoxInfo dive={d} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default TwistBox;
