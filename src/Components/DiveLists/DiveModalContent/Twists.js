import React from 'react';
import { diveArrayFunction } from '../DiveArray';
import '../../Styles/divetabs.css';

const diveArray = diveArrayFunction();

//get fronts
const frontTwistArray = [];
const backTwistArray = [];
const reverseTwistArray = [];
const inwardTwistArray = [];
for (let i = 0; i < diveArray.length; i++) {
	let a = diveArray[i];
	if (a.cat === 5 && a.direction === 'Forward') {
		frontTwistArray.push(a);
	} else if (a.cat === 5 && a.direction === 'Back') {
		backTwistArray.push(a);
	} else if (a.cat === 5 && a.direction === 'Reverse') {
		inwardTwistArray.push(a);
	} else if (a.cat === 5 && a.direction === 'Inward') {
		reverseTwistArray.push(a);
	}
}

//
//set up unique array
//
const setArray = (arr) =>
	Array.from(
		new Set(
			arr.map((d) => {
				return d.rotation;
			})
		)
	);

const uniqueArray = [
	setArray(frontTwistArray),
	setArray(backTwistArray),
	setArray(reverseTwistArray),
	setArray(inwardTwistArray),
];

const dis = (u, arr) => {
	//i is unique array index, a is .... , arr is twistArray
	let twistDirection = uniqueArray[u];

	//diveNumber function
	const diveNumber = (dive) => {
		for (let i = 0; i < arr.length; i++) {
			let a = arr[i];
			let b = a.rotation;
			if (dive === b) {
				return a.num;
			}
		}
	};

	//DD display
	twistDirection.map((d) => {
		return (
			<div className="dm-display">
				<div className="dm-dive-head">
					<p className="dm-difficulty dive">{d}</p>
				</div>
			</div>
		);
	});
};
const display = (u, arr) => {
	let twistDirection = uniqueArray[u];
	const diveNumber = (dive) => {
		for (let i = 0; i < arr.length; i++) {
			let a = arr[i];
			let b = a.rotation;
			if (dive === b) {
				return a.num;
			}
		}
	};

	const displayDifficulty = (dive, l) => {
		for (let i = 0; i < arr.length; i++) {
			let a = arr[i];
			let b = a.rotation;
			let c = a.letter;
			if (b === dive && c === l) {
				return a.difficulty;
			}
		}
	};

	let diveDisplay = twistDirection.map((d, i) => {
		return (
			<div className="dm-display" key={i}>
				<div className="dm-dive-head">
					<p className="dm-difficulty dive">{d}</p>
					<p className="dm-num">{diveNumber(d)}</p>
				</div>
				<div className="dm-dif-div">
					<p className="dm-difficutly ">A: {displayDifficulty(d, 'a')}</p>
					<p className="dm-difficutly ">B: {displayDifficulty(d, 'b')}</p>
					<p className="dm-difficutly">C: {displayDifficulty(d, 'c')}</p>
					<p className="dm-difficutly">D: {displayDifficulty(d, 'd')}</p>
				</div>
			</div>
		);
	});
	return <div>{diveDisplay}</div>;
};
const Twists = () => {
	return (
		<div>
			<header>
				<h1 className="dm-h1">Twists</h1>
			</header>
			<div className="dm-twist-div">
				<h3 className="dm-h3">Forward</h3>
				<div>{display(0, frontTwistArray)}</div>
				<h3 className="dm-h3">Back</h3>
				<div>{display(1, backTwistArray)}</div>
				<h3 className="dm-h3">Reverse</h3>
				<div>{display(3, inwardTwistArray)}</div>
				<h3 className="dm-h3">Inward</h3>				
				<div>{display(2, reverseTwistArray)}</div>
			</div>
		</div>
	);
};

export default Twists;
