import React from 'react';

const DisplayScore = ({ score, i }) => {
	const thisScore = () => {
		if (score[i]) return score[i];
		else return;
	};

	return <div className='score-score'>{thisScore()}</div>;
};

export default DisplayScore;
