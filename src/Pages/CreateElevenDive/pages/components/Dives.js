import React from 'react';

const Dives = ({ entry }) => {
	//errors
	var elevenDives = true;
	var repeatDives = false;
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

	const displayedDive = diveList.map((dive, i) => {
		if (dive.num === 0) {
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

	const displayedOptional = optList.map((dive, i) => {
		if (dive)
			return (
				<p className="is-optional" key={i}>
					Optional
				</p>
			);
		else return <p key={i + 100}>Voluntary</p>;
	});

	//errors
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

	//display errors
	const checkSix = () => {
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
				{checkSix()} {repeatedDives()}
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
