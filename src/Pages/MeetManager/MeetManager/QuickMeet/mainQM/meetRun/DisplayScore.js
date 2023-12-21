import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { judgeAtom } from '../../recoilQM/atoms-qm';
import { useNavigate } from 'react-router-dom';
import ScoreInput from './mrCmpnts/ScoreInput';
import ScoreButton from './mrCmpnts/ScoreButton';

const DisplayScore = ({
	score,
	judgeAmt,
	setScore,
	handleSubmit,
	handleDelete,
	next,
	meetEnd,
	total,
}) => {
	const navigate = useNavigate();

	const [currJudge, setCurrJudge] = useRecoilState(judgeAtom);
	const [submitted, setSubmitted] = useState(false);
	const [submitReady, setSubmitReady] = useState(false);
	const judgesScores = [];

	for (let i = 0; i < judgeAmt; i++) {
		let thisScore = score[i];
		judgesScores.push(<ScoreInput key={i} index={i} score={thisScore} />);
	}

	const submitScore = () => {
		handleSubmit();
		setSubmitReady(false);
		setSubmitted(true);
	};

	const handleNext = () => {
		next();
		setSubmitted(false);
	};

	const handleScore = (val) => {
		if (currJudge == judgeAmt) {
			setSubmitReady(true);
		}
		if (currJudge <= judgeAmt) {
			let s = parseFloat(val);
			setScore((oldArr) => [...oldArr, s]);
			setCurrJudge(currJudge + 1);
		}
	};

	const deleteScore = () => {
		setSubmitReady(false);
		handleDelete();
	};

	console.log(submitReady);

	return (
		<div className='ds-score-display'>
			<div className='ds-judges'>{judgesScores}</div>
			<div className='ds-score-btns'>
				<div className='ds-row'>
					<ScoreButton score='0' handleClick={handleScore} />
					<ScoreButton score='0.5' handleClick={handleScore} />
					<ScoreButton score='1' handleClick={handleScore} />
					<ScoreButton score='1.5' handleClick={handleScore} />
					<ScoreButton score='2' handleClick={handleScore} />
					<ScoreButton score='2.5' handleClick={handleScore} />
				</div>
				<div className='ds-row'>
					<ScoreButton score='3' handleClick={handleScore} />
					<ScoreButton score='3.5' handleClick={handleScore} />
					<ScoreButton score='4' handleClick={handleScore} />
					<ScoreButton score='4.5' handleClick={handleScore} />
					<ScoreButton score='5' handleClick={handleScore} />
					<ScoreButton score='5.5' handleClick={handleScore} />
				</div>
				<div className='ds-row'>
					<ScoreButton score='6' handleClick={handleScore} />
					<ScoreButton score='6.5' handleClick={handleScore} />
					<ScoreButton score='7' handleClick={handleScore} />
					<ScoreButton score='7.5' handleClick={handleScore} />
					<ScoreButton score='8' handleClick={handleScore} />
					<ScoreButton score='8.5' handleClick={handleScore} />
				</div>
				<div className='ds-row'>
					<ScoreButton score='9' handleClick={handleScore} />
					<ScoreButton score='9.5' handleClick={handleScore} />
					<ScoreButton score='10' handleClick={handleScore} />
					<div className='ds-button ds-back' onClick={deleteScore}>
						BACK
					</div>
				</div>

				<div className='ds-foot-btns'>
					{!meetEnd && !submitted && !submitReady && (
						<div className='ds-fill' onClick={submitScore}>
							{' '}
						</div>
					)}
					{!meetEnd && !submitted && submitReady && (
						<div className='ds-submit' onClick={submitScore}>
							Submit Score{' '}
						</div>
					)}
					{!meetEnd && submitted && (
						<div className='ds-next' onClick={handleNext}>
							Next Diver
						</div>
					)}
					{meetEnd && (
						<div className='ds-endmeet' onClick={() => navigate('/end-meet')}>
							End Meet
						</div>
					)}

					<div to='/meetend' className='ds-total-dis'>
						Dive Score: {total}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DisplayScore;
