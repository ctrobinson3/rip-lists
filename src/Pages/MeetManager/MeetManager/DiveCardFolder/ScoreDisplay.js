import React from 'react';

const ScoreDisplay = ({ i, score }) => {
	const thisScore = () => {
		if (score[i]) return score[i];
		else return;
	};
	return <div className='score-score'>{thisScore()}</div>;
};

export default ScoreDisplay;
