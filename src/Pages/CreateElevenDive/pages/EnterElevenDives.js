import React, { useState } from 'react';
import RoundIndex from './rounds/RoundIndex';
import DiveCheck from '../../../Components/DiveLists/DiveCheck';
import { diveArrayFunction } from '../../../Components/DiveLists/DiveArray';
const EnterElevenDives = ({
	dives,
	onChange,
	onClick,
	onSubmit,
	opt,
	next,
	back,
}) => {
	//deconstruct
	const { d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11 } = dives;
	const { o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11 } = opt;

	//constructor
	class Round {
		constructor(dive, optional) {
			this.dive = dive;
			this.optional = optional;
		}
	}

	//find dives
	const diveCheck = DiveCheck;
	const diveArray = diveArrayFunction();
	const findDives = () => {
		const list = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11];
		const optList = [o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11];
		const diveList = list.map((a) => {
			let d = a.toLowerCase();
			if (diveCheck.includes(d)) {
				const index = diveCheck.indexOf(d);
				const value = diveArray[index];
				return value;
			}
			//returns an empty dive
			else return diveArray[113];
		});
		const roundList = diveList.map((a, i) => {
			return new Round(a, optList[i]);
		});
		//enter dives
		onSubmit(roundList);
		next();
	};

	return (
		<div className="page-container">
			<header className="eleven-head">
				<h1>Enter Eleven Dives</h1>
			</header>

			<form className="six-form"></form>
			<div className="input-div">
				<RoundIndex
					dives={dives}
					onChange={onChange}
					onClick={onClick}
					opt={opt}
				/>
			</div>
			<button type="button" className="form-button next" onClick={findDives}>
				Check List
			</button>
			<button type="button" className="form-button back" onClick={back}>
				Back
			</button>
		</div>
	);
};

export default EnterElevenDives;

//constructor
// class Round {
// 	constructor(dive, optional) {
// 		this.dive = dive;
// 		this.optional = optional;
// 	}
// }

// const round1 = new Round(d1, o1);
// const round2 = new Round(d2, o2);
// const round3 = new Round(d3, o3);
// const round4 = new Round(d4, o4);
// const round5 = new Round(d5, o5);
// const round6 = new Round(d6, o6);
// const round7 = new Round(d7, o7);
// const round8 = new Round(d8, o8);
// const round9 = new Round(d9, o9);
// const round10 = new Round(d10, o10);
// const round11 = new Round(d11, o11);

// const testArray = ['a', 'b', 'c'];
// 	testArray.forEach(testFunction);

// 	function testFunction(d, i) {
// 		new Round(d, i);
// 	}

// 	const roundList = testArray.map((a, i) => {
// 		const divesArray = [o1, o2, o3];
// 		return new Round(a, divesArray[i]);
// 	});
// 	// console.log(roundList);

// 	const testRound = [];

// const findDives = () => {
// 	const list = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11];
// 	const diveList = list.map((a) => {
// 		let d = a.toLowerCase();
// 		if (diveCheck.includes(d)) {
// 			const index = diveCheck.indexOf(d);
// 			const value = diveArray[index];
// 			return value;
// 		}
// 		//returns an empty dive
// 		else return diveArray[113];
// 	});
// 	//enter dives
// 	onSubmit(diveList);
// 	next();
// };
