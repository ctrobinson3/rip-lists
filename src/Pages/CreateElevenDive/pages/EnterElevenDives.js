import React, { useState } from 'react';
import RoundIndex from './rounds/RoundIndex';
import DiveCheck from '../../../Components/DiveLists/DiveCheck';
import { diveArrayFunction } from '../../../Components/DiveLists/DiveArray';
import DiveModal from '../../CreateSixDive/pages/components/DiveModal';
import RulesModal from './components/RulesModalEleven';
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

	//modals
	const [openDiveModal, setOpenDiveModal] = useState(false);
	const [openRulesModal, setOpenRulesModal] = useState(false);
	if (openDiveModal || openRulesModal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	return (
		<div className='page-container'>
			<header className='eleven-head'>
				<p className='header'>Enter Eleven Dives</p>
			</header>

			{/* Rules modal */}
			<div className='modal-but-div'>
				<button
					type='button'
					className='modal-button'
					onClick={() => {
						setOpenRulesModal(true);
					}}
				>
					Rules
				</button>
				{openRulesModal && <RulesModal closeRulesModal={setOpenRulesModal} />}
				{/* Dives Modal */}
				<button
					type='button'
					className='modal-button'
					onClick={() => {
						setOpenDiveModal(true);
					}}
				>
					Dives
				</button>
				{openDiveModal && <DiveModal closeDiveModal={setOpenDiveModal} />}
			</div>
			<form className='six-form'></form>
			<div className='input-div'>
				<RoundIndex
					dives={dives}
					onChange={onChange}
					onClick={onClick}
					opt={opt}
				/>
			</div>
			<button type='button' className='form-button next' onClick={findDives}>
				Check List
			</button>
			<button type='button' className='form-button back' onClick={back}>
				Back
			</button>
		</div>
	);
};

export default EnterElevenDives;
