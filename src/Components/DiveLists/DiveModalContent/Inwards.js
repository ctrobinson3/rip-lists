import React from 'react';
import { diveArrayFunction } from '../DiveArray';
import '../../Styles/divetabs.css';

const diveArray = diveArrayFunction();

//get fronts
let inwardArray = [];
let flyingInwardArray = [];
for (let i = 0; i < diveArray.length; i++) {
	let a = diveArray[i];
	if (a.cat === 4 && a.direction === 'Inward') {
		inwardArray.push(a);
	} else if (a.cat === 4 && a.direction === 'Inward Flying') {
		flyingInwardArray.push(a);
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

const uniqueArray = [setArray(inwardArray), setArray(flyingInwardArray)];

const display = (u, arr) => {
	let array = uniqueArray[u];
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

	let diveDisplay = array.map((d, i) => {
		return (
			<div key={i} className="dm-display">
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

const Inwards = () => {
	return (
		<div>
			<header>
				<h1 className="dm-h1">Inwards</h1>
			</header>
			<div>{display(0, inwardArray)}</div>
			<h3 className="dm-h3">Flying</h3>
			<div>{display(1, flyingInwardArray)}</div>
		</div>
	);
};

export default Inwards;
