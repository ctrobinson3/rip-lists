import React from 'react';
import { diveArrayFunction } from '../DiveArray';
import '../../Styles/divetabs.css';

const diveArray = diveArrayFunction();

//get fronts
const backArray = [];
for (let i = 0; i < diveArray.length; i++) {
	let a = diveArray[i];
	if (a.cat === 2 && a.direction === 'Back') {
		backArray.push(a);
	}
}

//difficulty
const displayDifficulty = (dive, l) => {
	for (let i = 0; i < backArray.length; i++) {
		let a = backArray[i];
		let b = a.rotation;
		let c = a.letter;
		if (b === dive && c === l) {
			return a.difficulty;
		}
	}
};

//show dive number
const diveNumber = (dive) => {
	for (let i = 0; i < backArray.length; i++) {
		let a = backArray[i];
		let b = a.rotation;
		if (dive === b) {
			return a.num;
		}
	}
};

const uniqueArray = Array.from(
	new Set(
		backArray.map((d) => {
			return d.rotation;
		})
	)
);
const display = uniqueArray.map((d, i) => {
	return (
		<div className="dm-display" key={i}>
			<div className="dm-dive-head">
				<p className="dm-difficulty dive">{d}</p>
				<p className="dm-num">{diveNumber(d)}</p>
			</div>
			<div className="dm-dif-div">
				<p className="dm-difficutly">A: {displayDifficulty(d, 'a')}</p>
				<p className="dm-difficutly">B: {displayDifficulty(d, 'b')}</p>
				<p className="dm-difficutly">C: {displayDifficulty(d, 'c')} </p>
			</div>
		</div>
	);
});

const Backs = () => {
	return (
		<div>
			<header>
				<h1 className="dm-h1">Backs</h1>
			</header>
			<div>{display}</div>
		</div>
	);
};

export default Backs;
