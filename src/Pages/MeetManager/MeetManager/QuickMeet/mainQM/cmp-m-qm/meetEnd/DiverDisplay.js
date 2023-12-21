import React, { useState } from 'react';
import DisplayDives from './DisplayDives';
import MeetDiveCard from '../../../../DiveCardFolder/MeetDiveCard';
import { meetDataAtom, meetInfoAtom } from '../../../recoilQM/atoms-qm';
import { useRecoilValue } from 'recoil';
import DCTable from '../../../../DiveCardFolder/DCTable';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { nanoid } from 'nanoid';

const DiverDisplay = ({ thisDiver, index }) => {
	const [modal, setModal] = useState(false);
	if (modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	const meetData = useRecoilValue(meetDataAtom);
	const meetInfo = useRecoilValue(meetInfoAtom);
	const id = index;
	const dives = thisDiver.dives;

	const name = thisDiver.name;
	const school = thisDiver.school;
	const meetName = meetInfo.name;

	let scores = [];
	for (let i = 0; i < meetData.length; i++) {
		let currDive = meetData[i];
		let thisId = currDive.id;
		if (thisId == id) {
			scores.push(currDive);
		}
	}

	const calcTotal = () => {
		let rawTotal = 0;
		for (let i = 0; i < scores.length; i++) {
			let thisDive = scores[i];
			let diveTotal = parseFloat(thisDive.total);
			rawTotal += diveTotal;
		}
		const fixedTotal = (t) => {
			return t.toFixed(2);
		};
		return fixedTotal(rawTotal);
	};

	const theseDives = () => {
		let diveArray = [];
		for (let i = 0; i < meetData.length; i++) {
			let thisDive = dives[i];
			diveArray.push(thisDive);
		}
		return diveArray;
	};

	const viewDocument = () => {
		setModal(!modal);
	};

	const meetAndName = meetName + name + school;
	const docName = meetAndName.replace(/\s/g, '');

	const download = () => {
		const input = document.getElementById('div-print');
		html2canvas(input, {
			logging: true,
			letterRendering: 1,
			useCORS: true,
		}).then((canvas) => {
			const imgWidth = 210;
			const imgHeight = 297;
			const imgData = canvas.toDataURL('img/png');
			const pdf = new jsPDF('p', 'mm', [imgHeight, imgWidth]);
			pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
			pdf.save(docName);
		});
	};

	return (
		<div className='me-diver-wrap'>
			<div className='me-name'>{name}</div>
			<div className='me-txt-sml'>{school}</div>
			<hr />
			<div className='me-txt'>
				Final Score: <br /> {calcTotal()}
			</div>
			<div>
				<div className='me-name'>Dives:</div>
				<div className='me-dive-wrap'>
					{scores.map((d, index) => (
						<DisplayDives
							key={nanoid()}
							index={index}
							thisDive={d}
							diveArray={theseDives()}
						/>
					))}{' '}
				</div>
			</div>
			<div className='download-btn' onClick={download}>
				Download Card
			</div>
			<div id='div-print' className='print-div'>
				<DCTable
					scores={scores}
					diveArray={theseDives()}
					diverName={name}
					diverSchool={school}
					meet={meetName}
					finalScore={calcTotal()}
				/>
			</div>

			{/* Dive Card Modal */}
			{modal && (
				<div className='dc-modal-background'>
					<div className='dc-modal-container'>
						<div className='dc-modal-content'>
							<MeetDiveCard
								scores={scores}
								diveArray={theseDives()}
								diverName={name}
								diverSchool={school}
								meet={meetName}
								finalScore={calcTotal()}
							/>
							<footer>
								<button
									onClick={() => {
										setModal(!modal);
									}}
								>
									Close
								</button>
							</footer>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DiverDisplay;
