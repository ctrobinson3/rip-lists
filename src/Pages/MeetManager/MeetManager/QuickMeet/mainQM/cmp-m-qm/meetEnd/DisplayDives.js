import React from 'react';

const DisplayDives = ({ thisDive, index, diveArray }) => {
	const currDive = diveArray[index];
	return (
		<div>
			<b>
				{currDive.num}
				{currDive.letter}
			</b>{' '}
			- {thisDive.total}
		</div>
	);
};

export default DisplayDives;
