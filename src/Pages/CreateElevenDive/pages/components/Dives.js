import React from 'react';

const Dives = ({ entry }) => {
	//errors
	var elevenDives = true; //11 valid dives
	var repeatDives = false; //no repeated dives
	var allCategoriesOpt = false; //5 categories in optionals
	var allCategoriesVol = false; //5 categories in voluntaries
	var firstEightCategories = false; //5 categories represented in first 8 dives
	var noRepeatOpt = false; //first eight dives doesn't have two of the same optional category
	var roundOneValid = false; //3opt, 2 vol
	var roundTwovalid = false; //1 opt, 2 vol
	var roundThreeValid = false; //2 opt, 1 vol
	//deconstruction
	//First Round
	const d1 = entry[0];
	const d2 = entry[1];
	const d3 = entry[2];
	const d4 = entry[3];
	const d5 = entry[4];
	//Second Round
	const d6 = entry[5];
	const d7 = entry[6];
	const d8 = entry[7];
	//Third Round
	const d9 = entry[8];
	const d10 = entry[9];
	const d11 = entry[10];

	//Displaying Dives
	const diveList = [
		d1.dive,
		d2.dive,
		d3.dive,
		d4.dive,
		d5.dive,
		d6.dive,
		d7.dive,
		d8.dive,
		d9.dive,
		d10.dive,
		d11.dive,
	];

	const optList = [
		d1.optional,
		d2.optional,
		d3.optional,
		d4.optional,
		d5.optional,
		d6.optional,
		d7.optional,
		d8.optional,
		d9.optional,
		d10.optional,
		d11.optional,
	];

	//
	// 	Dive Errors
	//

	//Dive display/elevenDives
	const displayedDive = diveList.map((dive, i) => {
		if (dive.num === ' ') {
			elevenDives = false;
			return (
				<p className="dive-invalid" key={i}>
					InvalidDive
				</p>
			);
		} else
			return (
				<p className={checkValidity(dive.num, i)} key={i}>
					{i + 1}: {dive.direction} {dive.rotation} {dive.position}, DD:{' '}
					{dive.difficulty}
				</p>
			);
	});

	//repeated dives
	function checkValidity(d, i) {
		const list = diveList.map((dive) => {
			return dive.num;
		});
		list.splice(i, 1);
		if (list.includes(d)) {
			repeatDives = true;
			return 'dive-invalid';
		} else return 'dive-valid';
	}

	//round opt/vol
	const optAmt = (rounds, roundStart) => {
		var totalOpts = 0;
		for (let i = 0; i < rounds; i++) {
			totalOpts += optList[i + roundStart];
		}
		return totalOpts;
	};

	if (optAmt(5, 0) === 3) roundOneValid = true;
	if (optAmt(3, 5) === 1) roundTwovalid = true;
	if (optAmt(3, 8) === 2) roundThreeValid = true;

	//checking appropriate number of categories
	let optArray = []; // 5 categories in optionals
	let volArray = []; // 5 categories in voluntaries
	let semiCategories = []; // 5 categories in semifinals (both opt and vol)
	let semiOptCategories = []; // no repeat category for optionals in semifinals

	//the loooooop
	const checkCategories = (limit, e, key) => {
		for (let i = 0; i < limit; i++) {
			let rnd = e[i];
			let dive = rnd.dive;
			let cat = dive.cat;
			if (cat != ' ') {
				if (key === 0) {
					semiCategories.push(cat);
					if (rnd.optional) {
						semiOptCategories.push(cat);
					}
				} else if (key === 1) {
					if (rnd.optional) {
						optArray.push(cat);
					} else if (!rnd.optional) {
						volArray.push(cat);
					}
				}
			}
		}
	};

	checkCategories(8, entry, 0); //entry for opt/vol arrays
	checkCategories(11, entry, 1); //entry for semifinals arrays
	//checking for errors
	if (new Set(optArray).size === 5) allCategoriesOpt = true;
	if (new Set(volArray).size === 5) allCategoriesVol = true;
	if (new Set(semiCategories).size === 5) firstEightCategories = true;
	if (new Set(semiOptCategories).size === semiOptCategories.length)
		noRepeatOpt = true;

	const checkEleven = () => {
		if (!elevenDives)
			return (
				<div className="dive-error">*Some dives were entered incorrectly</div>
			);
	};

	const repeatedDives = () => {
		if (repeatDives)
			return <div className="dive-error">*Dives are repeated</div>;
	};

	return (
		<div>
			<div className="dive-display__header">
				{checkEleven()} {repeatedDives()}
			</div>
			<h3>Entered Dives:</h3>
			<div className="dive-display">
				<h4>First Round</h4>
				{displayedDive[0]}
				{displayedDive[1]}
				{displayedDive[2]}
				{displayedDive[3]}
				{displayedDive[4]}
				<h4>Second Round</h4>
				{displayedDive[5]}
				{displayedDive[6]}
				{displayedDive[7]}
				<h4>Third Round</h4>
				{displayedDive[8]}
				{displayedDive[9]}
				{displayedDive[10]}
			</div>
		</div>
	);
};

export default Dives;
