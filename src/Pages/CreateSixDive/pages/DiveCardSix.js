import { useState } from 'react';
import jsPDF from 'jspdf';
import DiveCardLandscape from './img/DiveCard6.png';

const DiveCardSix = ({ back, dive, info, verify }) => {
	//Set Data
	const name = info.name;
	const team = info.team;
	const coach = info.coach;
	const meet = info.meet;
	const date = info.date;
	//Dives
	const d1 = dive[0];
	const d2 = dive[1];
	const d3 = dive[2];
	const d4 = dive[3];
	const d5 = dive[4];
	const d6 = dive[5];

	//Position
	const pos = [d1, d2, d3, d4, d5, d6];
	const divePos = pos.map((d) => {
		if (d.position === 'Straight') return 'a';
		else if (d.position === 'Pike') return 'b';
		else if (d.position === 'Tuck') return 'c';
		else if (d.position === 'Free') return 'd';
		else return '';
	});
	const position = pos.map((d) => {
		if (d.position === 'Straight') return 'Str.';
		else if (d.position === 'Pike') return 'Pike';
		else if (d.position === 'Tuck') return 'Tuck';
		else if (d.position === 'Free') return 'Free';
		else return '';
	});

	//DDs
	const optdifficulty =
		parseFloat(d2.difficulty) +
		parseFloat(d3.difficulty) +
		parseFloat(d4.difficulty) +
		parseFloat(d5.difficulty) +
		parseFloat(d6.difficulty);
	function financial(x) {
		return x.toFixed(1);
	}
	const finalDD = (d) => {
		if (d > 0) return financial(d);
		else return '';
	};
	var volDifficulty = '';
	const dv = parseFloat(d1.difficulty);
	if (dv > 1.8) volDifficulty = 1.8;
	else volDifficulty = d1.difficulty;

	//Download PDF
	const [docName, setDocName] = useState('');

	const onChange = (e) => {
		const newValue = e.target.value;
		setDocName(newValue);
	};

	function printDocument() {
		var doc = new jsPDF('l', 'mm', [297, 210]);
		var imgData = DiveCardLandscape;

		doc.addImage(imgData, 'PNG', 0, 0, 297, 210);
		//(width, height, text)
		//info
		doc.setFont('Courier');
		doc.setFontSize(10);
		doc.text(name, 38, 16);
		doc.text(team, 42.5, 20.5);
		doc.text(coach, 40.1, 24.8);
		doc.text(meet, 163, 16);
		doc.text(date, 163, 20.5);
		doc.text('1-Meter, 6 Dive', 165.5, 25);
		//dives
		//dive one
		doc.text(d1.num + divePos[0], 36, 64);
		doc.text(d1.direction + ' ' + d1.rotation, 51, 64);
		doc.text(position[0], 109, 64);
		doc.text('' + volDifficulty, 125, 64);
		//dive two
		doc.text(d2.num + divePos[1], 36, 74);
		doc.text(d2.direction + ' ' + d2.rotation, 51, 74);
		doc.text(position[1], 109, 74);
		doc.text(d2.difficulty, 125, 74);
		//dive three
		doc.text(d3.num + divePos[2], 36, 83.5);
		doc.text(d3.direction + ' ' + d3.rotation, 51, 83.5);
		doc.text(position[2], 109, 83.5);
		doc.text(d3.difficulty, 125, 83.5);
		//dive four
		doc.text(d4.num + divePos[3], 36, 93);
		doc.text(d4.direction + ' ' + d4.rotation, 51, 93);
		doc.text(position[3], 109, 93);
		doc.text(d4.difficulty, 125, 93);
		//dive five
		doc.text(d5.num + divePos[4], 36, 103);
		doc.text(d5.direction + ' ' + d5.rotation, 51, 103);
		doc.text(position[4], 109, 103);
		doc.text(d5.difficulty, 125, 103);
		//dive six
		doc.text(d6.num + divePos[5], 36, 113);
		doc.text(d6.direction + ' ' + d6.rotation, 51, 113);
		doc.text(position[5], 109, 113);
		doc.text(d6.difficulty, 125, 113);
		//Vol dd
		doc.text('' + volDifficulty, 87, 133.1);
		//Opt dd
		doc.text('' + finalDD(optdifficulty), 109, 133.1);
		//verified list
		if (verify) doc.text('Verified', 108.2, 42);

		doc.save(docName);
	}

	return (
		<>
			<div className="page-container">
				<h1>Download Dive Card</h1>
				<h3>Name PDF:</h3>
				<input className="form-input" onChange={onChange}></input>

				<button
					type="button"
					className="form-button next"
					onClick={printDocument}
				>
					Download
				</button>
				<button type="button" className="form-button back" onClick={back}>
					Back
				</button>
			</div>
		</>
	);
};

export default DiveCardSix;
