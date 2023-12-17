import React from 'react';

const ScoreButton = ({ score, handleClick }) => {
	const classNameSelect = () => {
		if (score.length === 3) return 'ds-shaded';
		else return 'ds-button';
	};
	return (
		<div className={classNameSelect()} onClick={() => handleClick(score)}>
			{score}
		</div>
	);
};

export default ScoreButton;
