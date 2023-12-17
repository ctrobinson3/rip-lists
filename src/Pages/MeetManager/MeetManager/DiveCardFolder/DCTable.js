import React from 'react';
import './table.css';
import JudgesScores from './JudgesScores';
import DiveRow from './DiveRow';

const DCTable = ({
	scores,
	diveArray,
	diverName,
	diverSchool,
	meet,
	finalScore,
}) => {
	const diver = {
		name: diverName,
		school: diverSchool,
		date: ' ',
		meet: meet,
		event: '1-meter, 6 dives',
		coach: '',
	};

	const dive = [];

	const judgeRow = [];
	for (let i = 0; i < 7; i++) {
		judgeRow.push(<JudgesScores key={i} i={i + 1} />);
	}

	const diveRow = [];
	for (let i = 0; i < 6; i++) {
		diveRow.push(<DiveRow dive={diveArray} scores={scores} key={i} i={i} />);
	}

	const scoreTotal = () => {
		let t = 0;
		for (let i = 0; i < dive.length; i++) {
			let d = dive[i];
			let tot = d.total;
			t += tot;
		}
		return t;
	};

	return (
		<div className='table-wrap'>
			<div className='table-container'>
				<div className='table-head'>
					<div className='head-side'>
						<div className='head-entry'>
							<b>Name: </b> <p className='head-info'>{diver.name}</p>
						</div>
						<div className='head-entry'>
							<b>School: </b> <p className='head-info'>{diver.school}</p>
						</div>
						<div className='head-entry'>
							<b>Coach: </b> <p className='head-info'>{diver.coach}</p>
						</div>
					</div>
					<div className='head-side'>
						<div className='head-entry'>
							<b>Meet: </b> <p className='head-info'>{diver.meet}</p>
						</div>
						<div className='head-entry'>
							<b>Date: </b> <p className='head-info'>{diver.date}</p>
						</div>
						<div className='head-entry'>
							<b>Event: </b> <p className='head-info'>{diver.event}</p>
						</div>
					</div>
				</div>
				<div className='dives-wrap'>
					<div className='dives-header'>
						<div className='dh-blank' />
						<div className='dh-dive'>Dive</div>
						<div className='dh-desc'>Description</div>
						<div className='dh-pos'>Pos.</div>
						<div className='dh-dd'>DD</div>
						<div className='dh-judges'>{judgeRow}</div>
						<div className='dh-net'>Net</div>
						<div className='dh-total'>Total</div>
					</div>
					<div className='dives-scores'>{diveRow}</div>
					<div className='score-total-wrap'>
						<b>Official Score: {finalScore}</b>
					</div>
				</div>
				<div className='signatures-wrap'>
					<div className='signature'>
						<hr />
						<p>Diver's Signature</p>
					</div>

					<div className='signature'>
						<hr />
						<p>Coach's Signature</p>
					</div>

					<div className='signature'>
						<hr />
						<p>Referee's Signature</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DCTable;
