import React, { useState } from 'react';
import DisplayDives from './DisplayDives';
import MeetDiveCard from '../../../../DiveCardFolder/MeetDiveCard';
import { meetDataAtom, meetInfoAtom } from '../../../recoilQM/atoms-qm';
import { useRecoilValue } from 'recoil';
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

	return (
		<div className='me-diver-wrap'>
			<h1>{name}</h1>
			<p>{school}</p>
			<h3>Final Score: {calcTotal()}</h3>
			<div>
				<b>Dives:</b>
				{scores.map((d, index) => (
					<DisplayDives
						key={nanoid()}
						index={index}
						thisDive={d}
						diveArray={theseDives()}
					/>
				))}
			</div>
			<button onClick={viewDocument}>View Card</button>

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
