import React from 'react';
import {
	totalScoreAtom,
	netAtom,
	diverScoreAtom,
} from '../../recoilQM/atoms-qm';
import { useRecoilState, useRecoilValue } from 'recoil';
import DisplayScore from './DisplayScore';

const JudgesScores = ({
	handleDelete,
	currDive,
	setDiveScore,
	next,
	meetEnd,
	judge,
}) => {
	const [score, setScore] = useRecoilState(diverScoreAtom);
	const [total, setTotal] = useRecoilState(totalScoreAtom);
	const [net, setNet] = useRecoilState(netAtom);
	const judgeAmt = parseInt(judge);

	const diveDD = parseFloat(currDive);

	const handleSubmit = () => {
		if (score.length == judgeAmt) {
			let totes = 0;
			for (let i = 0; i < score.length; i++) {
				let curr = score[i];
				totes += curr;
			}
			let netTotal = 0;
			let rawTotal = 0;
			if (judgeAmt == 2) {
				netTotal = totes * 1.5;
				rawTotal = totes * diveDD * 1.5;
			} else if (judgeAmt == 3) {
				netTotal = totes;
				rawTotal = totes * diveDD;
			}
			const fixedTotal = (t) => {
				return t.toFixed(2);
			};
			setDiveScore({
				['net']: fixedTotal(netTotal),
				['total']: fixedTotal(rawTotal),
				['scores']: score,
			});
			setTotal(fixedTotal(rawTotal));
			setNet(fixedTotal(netTotal));
		}
	};
	return (
		<div className='js-wrap'>
			<div className='js-scoredisplay-wrap'>
				<DisplayScore
					setScore={setScore}
					score={score}
					judgeAmt={judgeAmt}
					handleSubmit={handleSubmit}
					handleDelete={handleDelete}
					next={next}
					total={total}
					meetEnd={meetEnd}
				/>
			</div>
		</div>
	);
};

export default JudgesScores;
