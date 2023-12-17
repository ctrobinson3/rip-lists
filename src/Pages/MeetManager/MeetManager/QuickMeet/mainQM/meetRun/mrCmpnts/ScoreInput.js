import React from 'react';

const ScoreInput = ({ index, score }) => {
	return (
		<div className='ds-judge-input'>
			<p className='cm-txt-b'>Judge {index + 1}: </p>
			<p className='cm-txt-b ds-box'>{score}</p>
		</div>
	);
};

export default ScoreInput;
