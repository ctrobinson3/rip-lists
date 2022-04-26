import { useState } from 'react';
import jsPDF from 'jspdf';
import ElevenDiveCard from './img/DiveCard11.png';

const DiveCardEleven = ({ back, dive, info }) => {
	//Data Deconstruction
	const name = info.name;
	const team = info.team;
	const coach = info.coach;
	const meet = info.meet;
	const date = info.date;

	const r1 = dive[0];
	const r2 = dive[1];
	const r3 = dive[2];
	const r4 = dive[3];
	const r5 = dive[4];
	const r6 = dive[5];
	const r7 = dive[6];
	const r8 = dive[7];
	const r9 = dive[8];
	const r10 = dive[9];
	const r11 = dive[10];
	const rnds = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11];

	const d1 = r1.dive;
	const d2 = r2.dive;
	const d3 = r3.dive;
	const d4 = r4.dive;
	const d5 = r5.dive;
	const d6 = r6.dive;
	const d7 = r7.dive;
	const d8 = r8.dive;
	const d9 = r9.dive;
	const d10 = r10.dive;
	const d11 = r11.dive;
	const dives = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11];

	const o1 = r1.optional;
	const o2 = r2.optional;
	const o3 = r3.optional;
	const o4 = r4.optional;
	const o5 = r5.optional;
	const o6 = r6.optional;
	const o7 = r7.optional;
	const o8 = r8.optional;
	const o9 = r9.optional;
	const o10 = r10.optional;
	const o11 = r11.optional;
	const opts = [o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11];

	//position
	const divePos = dives.map((d) => {
		if (d.position === 'Straight') return 'a';
		else if (d.position === 'Pike') return 'b';
		else if (d.position === 'Tuck') return 'c';
		else if (d.position === 'Free') return 'd';
		else return '';
	});
	const position = dives.map((d) => {
		if (d.position === 'Straight') return 'Str.';
		else if (d.position === 'Pike') return 'Pike';
		else if (d.position === 'Tuck') return 'Tuck';
		else if (d.position === 'Free') return 'Free';
		else return '';
	});

	//dd totals
	//opt
	const optionals = dive.map((d) => {
		if (d.optional) {
			const a = d.dive;
			return a.difficulty;
		} else return 0;
	});
	console.log(optionals);
	//vol
	const voluntaries = dive.map((d) => {
		if (!d.optional) {
			const a = d.dive;
			return a.difficulty;
		} else return 0;
	});
	console.log(voluntaries);

	//Download PDF
	const [docName, setDocName] = useState('');

	const onChange = (e) => {
		const newValue = e.target.value;
		setDocName(newValue);
	};

	//jspdf
	function printDocument() {
		var doc = new jsPDF('l', 'mm'[(297, 210)]);
		var imgData = ElevenDiveCard;

		doc.addImage(imgData, 'PNG', 0, 0, 297, 210);

		//(width, height, text)
		//info
		doc.setFont('Courier');
		doc.setFontSize(10);
		doc.text(name, 38, 16);
		doc.text(team, 43, 20.5);
		doc.text(coach, 40.6, 24.8);
		doc.text(meet, 163, 16);
		doc.text(date, 163, 20.5);
		doc.text('1-Meter, 11 Dive', 165.5, 25);
		//dive one
		doc.text(d1.num + divePos[0], 36.5, 60);
		doc.text(d1.direction + ' ' + d1.rotation, 52, 60);
		doc.text(position[0], 109, 60);
		doc.text(d1.difficulty, 125, 60);
		//dive two
		doc.text(d2.num + divePos[1], 36.5, 70);
		doc.text(d2.direction + ' ' + d2.rotation, 52, 70);
		doc.text(position[1], 109, 70);
		doc.text(d2.difficulty, 125, 70);
		//dive three
		doc.text(d3.num + divePos[2], 36.5, 79.5);
		doc.text(d3.direction + ' ' + d3.rotation, 52, 79.5);
		doc.text(position[2], 109, 79.5);
		doc.text(d3.difficulty, 125, 79.5);
		//dive four
		doc.text(d4.num + divePos[3], 36.5, 89.5);
		doc.text(d4.direction + ' ' + d4.rotation, 52, 89.5);
		doc.text(position[3], 109, 89.5);
		doc.text(d4.difficulty, 125, 89.5);
		//dive five
		doc.text(d5.num + divePos[4], 36.5, 99);
		doc.text(d5.direction + ' ' + d5.rotation, 52, 99);
		doc.text(position[4], 109, 99);
		doc.text(d5.difficulty, 125, 99);
		//dive six
		doc.text(d6.num + divePos[5], 36.5, 109);
		doc.text(d6.direction + ' ' + d6.rotation, 52, 109);
		doc.text(position[5], 109, 109);
		doc.text(d6.difficulty, 125, 109);
		//dive seven
		doc.text(d7.num + divePos[6], 36.5, 119);
		doc.text(d7.direction + ' ' + d7.rotation, 52, 119);
		doc.text(position[6], 109, 119);
		doc.text(d7.difficulty, 125, 119);
		//dive eight
		doc.text(d8.num + divePos[7], 36.5, 128.5);
		doc.text(d8.direction + ' ' + d8.rotation, 52, 128.5);
		doc.text(position[7], 109, 128.5);
		doc.text(d8.difficulty, 125, 128.5);
		//dive nine
		doc.text(d9.num + divePos[8], 36.5, 139);
		doc.text(d9.direction + ' ' + d9.rotation, 52, 139);
		doc.text(position[8], 109, 139);
		doc.text(d9.difficulty, 125, 139);
		//dive ten
		doc.text(d10.num + divePos[9], 36.5, 149);
		doc.text(d10.direction + ' ' + d10.rotation, 52, 149);
		doc.text(position[9], 109, 149);
		doc.text(d10.difficulty, 125, 149);
		//dive eleven
		doc.text(d11.num + divePos[10], 36.5, 158.5);
		doc.text(d11.direction + ' ' + d11.rotation, 52, 158.5);
		doc.text(position[10], 109, 158.5);
		doc.text(d11.difficulty, 125, 158.5);
		//Vol dd
		doc.text('9.0', 87, 170);
		//opt dd
		doc.text('15.5', 109, 170);

		//Opt Circles
		if (!o1) {
			doc.ellipse(41, 59.2, 7, 4);
			doc.ellipse(127.7, 59.2, 5, 4);
		}
		if (!o2) {
			doc.ellipse(41, 69, 7, 4);
			doc.ellipse(127.7, 69, 5, 4);
		}
		if (!o3) {
			doc.ellipse(41, 78, 7, 4);
			doc.ellipse(127.7, 78, 5, 4);
		}
		if (!o4) {
			doc.ellipse(41, 88, 7, 4);
			doc.ellipse(127.7, 88, 5, 4);
		}
		if (!o5) {
			doc.ellipse(41, 98, 7, 4);
			doc.ellipse(127.7, 98, 5, 4);
		}
		if (!o6) {
			doc.ellipse(41, 108, 7, 4);
			doc.ellipse(127.7, 108, 5, 4);
		}
		if (!o7) {
			doc.ellipse(41, 118, 7, 4);
			doc.ellipse(127.7, 118, 5, 4);
		}
		if (!o8) {
			doc.ellipse(41, 128, 7, 4);
			doc.ellipse(127.7, 128, 5, 4);
		}
		if (!o9) {
			doc.ellipse(41, 138, 7, 4);
			doc.ellipse(127.7, 138, 5, 4);
		}
		if (!o10) {
			doc.ellipse(41, 148, 7, 4);
			doc.ellipse(127.7, 148, 5, 4);
		}
		if (!o11) {
			doc.ellipse(41, 158, 7, 4);
			doc.ellipse(127.7, 158, 5, 4);
		}

		doc.save(docName);
	}

	return (
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
	);
};

export default DiveCardEleven;
