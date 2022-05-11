import React, { useState } from 'react';
import DiveCheck from '../../../Components/DiveLists/DiveCheck';
import { diveArrayFunction } from '../../../Components/DiveLists/DiveArray';
import DiveModal from './components/DiveModal';
import RulesModal from './components/RulesModal';

const EnterDivesSix = ({ dive, onChange, onSubmit, next, back }) => {
	//deconstruct
	const { d1, d2, d3, d4, d5, d6 } = dive;

	//find dives
	const diveCheck = DiveCheck;
	const diveArray = diveArrayFunction();
	const findDives = () => {
		const list = [d1, d2, d3, d4, d5, d6];
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
		//enter dives
		onSubmit(diveList);
		next();
	};

	//modals
	const [openDiveModal, setOpenDiveModal] = useState(false);
	const [openRulesModal, setOpenRulesModal] = useState(false);
	if (openDiveModal || openRulesModal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	return (
		<div className="page-container">
			<h1 className="header">Enter Dives</h1>
			{/* Rules modal */}
			<div className="modal-but-div">
				<button
					type="button"
					className="modal-button"
					onClick={() => {
						setOpenRulesModal(true);
					}}
				>
					Rules
				</button>
				{openRulesModal && <RulesModal closeRulesModal={setOpenRulesModal} />}
				{/* Dives Modal */}
				<button
					type="button"
					className="modal-button"
					onClick={() => {
						setOpenDiveModal(true);
					}}
				>
					Dives
				</button>
				{openDiveModal && <DiveModal closeDiveModal={setOpenDiveModal} />}
			</div>
			<form className="six-form">
				{/* First Dive */}
				<div className="input-div">
					<label className="form-label">First Dive</label>
					<input
						className="form-input"
						type="text"
						id="d1"
						value={d1}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
				</div>
				{/* Second Dive */}
				<div className="input-div">
					<label className="form-label">Second Dive</label>
					<input
						className="form-input"
						type="text"
						id="d2"
						value={d2}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
				</div>
				{/* Third Dive */}
				<div className="input-div">
					<label className="form-label">Third Dive</label>
					<input
						className="form-input"
						type="text"
						id="d3"
						value={d3}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
				</div>
				{/* Fourth Dive */}
				<div className="input-div">
					<label className="form-label">Fourth Dive</label>
					<input
						className="form-input"
						type="text"
						id="d4"
						value={d4}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
				</div>
				{/* Fifth Dive */}
				<div className="input-div">
					<label className="form-label">Fifth Dive</label>
					<input
						className="form-input"
						type="text"
						id="d5"
						value={d5}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
				</div>
				{/* Sixth Dive */}
				<div className="input-div">
					<label className="form-label">Sixth Dive</label>
					<input
						className="form-input"
						type="text"
						id="d6"
						value={d6}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
				</div>
			</form>

			{/* butttons */}
			<button type="button" className="form-button next" onClick={findDives}>
				Next
			</button>

			<button type="button" className="form-button back" onClick={back}>
				Back
			</button>
		</div>
	);
};

export default EnterDivesSix;
