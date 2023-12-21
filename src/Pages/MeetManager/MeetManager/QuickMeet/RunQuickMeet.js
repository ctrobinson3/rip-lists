import React, { useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
	meetInfoAtom,
	numDivesAtom,
	diversAtom,
	meetDataAtom,
	judgeAtom,
	diverScoreAtom,
	totalScoreAtom,
	roundAtom,
	diverOrderAtom,
	netAtom,
} from './recoilQM/atoms-qm';
import HomeNavBurg from '../../../Home/HomeNavBurg';
import HomeNavDark from '../../../Home/HomeNavDark';
import JudgesScores from './mainQM/meetRun/JudgesScores';

const RunQuickMeet = () => {
	const meet = useRecoilValue(meetInfoAtom);
	const numDives = useRecoilValue(numDivesAtom);
	const divers = useRecoilValue(diversAtom);

	// meet values
	const meetName = meet.name;
	const gender = meet.gender;
	const event = meet.event;

	// atoms for meet
	const [meetData, setMeetData] = useRecoilState(meetDataAtom);
	const [currJudge, setCurrJudge] = useRecoilState(judgeAtom);
	const [scores, setScores] = useRecoilState(diverScoreAtom);
	const [total, setTotal] = useRecoilState(totalScoreAtom);
	const [net, setNet] = useRecoilState(netAtom);
	const [round, setRound] = useRecoilState(roundAtom);

	// states and vars
	const [diveScore, setDiveScore] = useState(0);
	const [diveOrder, setDiveOrder] = useState(0);
	const [meetEnd, setMeetEnd] = useState(false);
	const currDiver = divers[diveOrder];
	const cdDivesArr = currDiver.dives;
	const currDive = cdDivesArr[round];

	// func
	const onNextDiver = () => {
		setMeetData([
			...meetData,
			{ ['id']: diveOrder, ['scores']: scores, ['total']: total, ['net']: net },
		]);
		setCurrJudge(1);
		setScores([]);
		setTotal(0);
		setNet(0);
		if (diveOrder < divers.length - 1) {
			setDiveOrder(diveOrder + 1);
		} else {
			if (round < 5) {
				setRound(round + 1);
				setDiveOrder(0);
			}
		}
		if (diveOrder == divers.length - 1 && round == 5) {
			setMeetEnd(true);
		}
	};

	const onDeck = (d) => {
		const firstDiver = divers[0];
		const nextDiver = divers[diveOrder + 1];

		if (d >= divers.length - 1) {
			return firstDiver.name;
		} else {
			return nextDiver.name;
		}
	};

	const handleDelete = () => {
		if (currJudge > 1) {
			let delNum = currJudge - 2;
			let newArr = [];
			for (let i = 0; i < delNum; i++) {
				let newScore = scores[i];
				newArr.push(newScore);
			}
			setScores(newArr);
			setCurrJudge(currJudge - 1);
		}
	};

	const restart = () => {
		setMeetEnd(false);
		setRound(0);
		setDiveOrder(0);
	};

	console.log(currDive);

	//
	// delete
	//

	return (
		<div className='run-meet-page'>
			<HomeNavDark />
			<HomeNavBurg />
			<div className='run-meet-wrap'>
				<div className='run-meet-head'>
					<div className='run-meet-header'>{meetName}</div>
					<div className='run-meet-underhead rmunderline'>
						{gender} {event} {numDives}
					</div>
					<div className='run-meet-body'>
						<div className='rm-top'>
							<div className='rm-top-box'>
								<div className='rm-top-info'>Round:{round + 1}</div>
								<div className='rm-top-info'>
									Diver: {diveOrder + 1} / {divers.length}
								</div>
							</div>
							<div className='rm-top-box'>
								<div className='rm-top-info rmmid '>Current Diver:</div>
								<div className='rm-top-info rmmid'>{currDiver.name}</div>
							</div>
							<div className='rm-top-box'>
								<div className='rm-top-info rmright'>Diver Score: x </div>
								<div className='rm-top-info rmright'>
									Diver Place: x / {divers.length}
								</div>
							</div>
						</div>
						<div className='rm-mid'>
							<div className='rm-mid-box'>
								<div className='rm-mid-info rmunderline'>Dive Number</div>
								<div className='rm-mid-info'>
									{currDive.num}
									{currDive.letter}
								</div>
							</div>
							<div className='rm-mid-box'>
								<div className='rm-mid-info rmunderline'>Dive Name</div>
								<div className='rm-mid-info'>
									{currDive.direction} {currDive.rotation} {currDive.position}
								</div>
							</div>
							<div className='rm-mid-box'>
								<div className='rm-mid-info rmunderline'>DD</div>
								<div className='rm-mid-info'>{currDive.difficulty}</div>
							</div>
							<div className='rm-mid-box'>
								<div className='rm-mid-info rmunderline'>On Deck</div>
								<div className='rm-mid-info'>{onDeck(diveOrder)}</div>
							</div>
						</div>
						<div className='rm-judges'>
							<JudgesScores
								handleDelete={handleDelete}
								currDive={currDive.difficulty}
								setDiveScore={setDiveScore}
								next={onNextDiver}
								meetEnd={meetEnd}
								judge={meet.judgeAmt}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RunQuickMeet;
