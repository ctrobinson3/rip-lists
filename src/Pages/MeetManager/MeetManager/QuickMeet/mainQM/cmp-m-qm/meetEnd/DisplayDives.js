import React from 'react';

const DisplayDives = ({ thisDive, index, diveArray }) => {
	const currDive = diveArray[index];
	return (
		<div className='me-score'>
			<div className='me-txt-bld'>
				{currDive.num}
				{currDive.letter} - {thisDive.total}
			</div>
			<div className='me-txt-sml'></div>
		</div>
	);
};

export default DisplayDives;
