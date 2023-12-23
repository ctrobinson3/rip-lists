import React, { useState } from 'react';
import {
	totalScoreAtom,
	netAtom,
	diverScoreAtom,
	lastTotalAtom,
	totalsAtom,
} from '../../recoilQM/atoms-qm';
import { useRecoilState, useRecoilValue } from 'recoil';
import DisplayScore from './DisplayScore';

const JudgesScores = ({
	meetInformation,
	handleDelete,
	currDive,
	setDiveScore,
	next,
	meetEnd,
	judge,
	setMeetEnd,
	diveOrder,
	divers,
	round,
}) => {
	const [score, setScore] = useRecoilState(diverScoreAtom);
	const [total, setTotal] = useRecoilState(totalScoreAtom);
	const [lastTotal, setLastTotal] = useRecoilState(lastTotalAtom);
	const [newTotal, setNewTotal] = useState(totalsAtom);
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
			let dLength = divers.length;
			let mLen = meetInformation.length;
			let thisInfo;
			let lastScore;

			let netTotal = 0;
			let rawTotal = 0;
			let prevTotal = 0;
			let addedTotal = 0;

			if (round > 0) {
				thisInfo = meetInformation[mLen - dLength];
				lastScore = parseFloat(thisInfo.currTotal);
				prevTotal = lastScore;
			}

			if (judgeAmt == 2) {
				netTotal = totes * 1.5;
				rawTotal = totes * diveDD * 1.5;
				addedTotal = rawTotal + prevTotal;
			} else if (judgeAmt == 3) {
				netTotal = totes;
				rawTotal = totes * diveDD;
				addedTotal = rawTotal + prevTotal;
			}
			// added totes

			const fixedTotal = (t) => {
				return t.toFixed(2);
			};
			setDiveScore({
				['net']: fixedTotal(netTotal),
				['total']: fixedTotal(rawTotal),
				['currTotal']: fixedTotal(addedTotal),
				['scores']: score,
			});
			setLastTotal(fixedTotal(addedTotal));
			setTotal(fixedTotal(rawTotal));
			setNet(fixedTotal(netTotal));
		}
		if (diveOrder == divers.length - 1 && round == 5) {
			setMeetEnd(true);
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
