import React from 'react';
import DisplayScore from './DisplayScore';

const DiveRow = ({ i, dive, scores }) => {
	const thisDive = dive[i];
	const diveScore = scores[i];
	const judgeScore = diveScore.scores;
	const total = diveScore.total;
	const net = diveScore.net;

	const judgesScores = [];
	for (let i = 0; i < 7; i++) {
		judgesScores.push(<DisplayScore score={judgeScore} key={i} i={i} />);
	}

	const getTotal = () => {
		let round = i;
		let tot = 0;
		for (let m = 0; m <= round; m++) {
			let sc = scores[m];
			let t = parseFloat(sc.total);
			tot += t;
		}
		const fixedTotal = (t) => {
			return t.toFixed(2);
		};
		return fixedTotal(tot);
	};

	return (
		<div className='score-row'>
			<div className='score-judge'>{i + 1}</div>
			<div className='score-dive'>
				{thisDive.num}
				{thisDive.letter}
			</div>
			<div className='score-desc'>
				{thisDive.direction} {thisDive.rotation}
			</div>
			<div className='score-pos'>{thisDive.position}</div>
			<div className='score-dd'>{thisDive.difficulty}</div>
			<div className='score-judges'>{judgesScores}</div>
			<div className='score-net'>{net}</div>
			<div className='score-total'>
				<div className='st-col'>
					<b>Dive: </b>
					{total}
				</div>
				<div className='st-col'>
					<b>Total: {getTotal()}</b>
				</div>
			</div>
		</div>
	);
};

export default DiveRow;
