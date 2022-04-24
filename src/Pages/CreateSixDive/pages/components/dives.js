import React from 'react';

const dives = ({ entry }) => {
	var repeatDives = false;
	var enoughCategories = false;
	var sixDives = true;
	//entry deconstructed
	const d1 = entry[0];
	const d2 = entry[1];
	const d3 = entry[2];
	const d4 = entry[3];
	const d5 = entry[4];
	const d6 = entry[5];
	const diveList = [d1, d2, d3, d4, d5, d6];
	const optList = [d2.cat, d3.cat, d4.cat, d5.cat, d6.cat];

	//find dives in dive array and display info
	const displayedDive = diveList.map((dive, i) => {
		if (dive.num === 0) {
			sixDives = false;
			return (
				<p className="dive-invalid" key={i}>
					Invalid Dive
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

	//finds repeated dives
	function checkValidity(d, i) {
		const list = entry.map((dive) => {
			return dive.num;
		});
		list.splice(i, 1);
		if (list.includes(d)) {
			repeatDives = true;
			return 'dive-invalid';
		} else return 'dive-valid';
	}

	//checks for 4 optional categories
	const categoryCheck = () => {
		const oAmt = Array.from(new Set(optList));
		if (oAmt.length < 4) {
			return (
				<div className="dive-error">*Four categories are not represented</div>
			);
		} else enoughCategories = true;
	};

	//check for repeated dives
	const repeatedDives = () => {
		if (repeatDives)
			return <div className="dive-error">*Dives are repeated</div>;
	};

	//checks for 6 valid dives
	const checkSix = () => {
		if (!sixDives)
			return (
				<div className="dive-error">*Some dives were entered incorrectly</div>
			);
	};

	//if no errors:
	const allGood = () => {
		if (!repeatDives && enoughCategories && sixDives)
			return <div className="dive-correct">All good!</div>;
	};

	return (
		<>
			<div className="dive-display__header">
				{checkSix()}
				{repeatedDives()}
				{categoryCheck()}
				{allGood()}
			</div>
			<h3>Entered Dives:</h3>
			<div className="dive-display">{displayedDive}</div>
		</>
	);
};

export default dives;
