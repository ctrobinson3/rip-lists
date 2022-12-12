import React from 'react';

const IndividualDives = ({ dive }) => {
	console.log(dive);
	return (
		<div className='individual-dive'>
			{dive.num}
			{dive.letter} {dive.direction} {dive.rotation} {dive.position}{' '}
			{dive.difficulty}
		</div>
	);
};

export default IndividualDives;
