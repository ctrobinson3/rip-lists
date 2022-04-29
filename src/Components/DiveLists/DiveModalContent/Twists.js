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

//difficulty
// const displayDifficulty = (dive, l) => {
// 	for (let i = 0; i < twistArray.length; i++) {
// 		let a = twistArray[i];
// 		let b = a.rotation;
// 		let c = a.letter;
// 		if (b === dive && c === l) {
// 			return a.difficulty;
// 		}
// 	}
// };

//show dive number
// const diveNumber = (dive) => {
// 	for (let i = 0; i < twistArray.length; i++) {
// 		let a = twistArray[i];
// 		let b = a.rotation;
// 		if (dive === b) {
// 			return a.num;
// 		}
// 	}
// };

const uniqueArray = (arr) =>
	Array.from(
		new Set(
			arr.map((d) => {
				return d.rotation;
			})
		)
	);
console.log(uniqueArray(frontTwistArray));
const display = (a) => {
	uniqueArray(a).map((d, i) => {
		return (
			<div className="dm-display" key={i}>
				<div className="dm-dive-head">
					<p className="dm-difficulty dive"></p>
				</div>
			</div>
		);
	});
};
// const display = uniqueArray.map((d, i) => {
// 	return (
// 		<div className="dm-display" key={i}>
// 			<div className="dm-dive-head">
// 				<p className="dm-difficulty dive">{d}</p>
// 				<p className="dm-num">( {diveNumber(d)} )</p>
// 			</div>
// 			<div className="dm-dif-div">
// 				<p className="dm-difficutly">A: {displayDifficulty(d, 'a')}</p>
// 				<p className="dm-difficutly">B: {displayDifficulty(d, 'b')}</p>
// 				<p className="dm-difficutly">C: {displayDifficulty(d, 'c')} </p>
// 				<p className="dm-difficutly">D: {displayDifficulty(d, 'd')} </p>
// 			</div>
// 		</div>
// 	);
// });

const Twists = () => {
	return (
		<div>
			<header>
				<h1 className="dm-h1">Twists</h1>
			</header>
			{/* <div>{display}</div> */}
		</div>
	);
};

export default Twists;
