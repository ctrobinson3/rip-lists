import React, { useState } from 'react';
import DiveCheck from '../../../../../../../Components/DiveLists/DiveCheck';
import { diveArrayFunction } from '../../../../../../../Components/DiveLists/DiveArray';

const SixDiveInput = ({ setEntry, next, handleInput, inputDive }) => {
	const [verify, setVerify] = useState(false);
	const [tempList, setTempList] = useState([]);

	const [dive, setDive] = useState({
		d1: '',
		d2: '',
		d3: '',
		d4: '',
		d5: '',
		d6: '',
	});
	const handleDive = (e) => {
		setDive({
			...dive,
			[e.target.id]: e.target.value,
		});
	};

	const { d1, d2, d3, d4, d5, d6 } = inputDive;

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
		setEntry(diveList);
		next();
	};

	return (
		<div className='manager-form'>
			<p>(please enter dive numbers)</p>
			<div className='qm-form-input'>
				<label>Dive 1:</label>
				<input
					className='dive-input'
					type='text'
					id='d1'
					value={d1}
					onChange={handleInput}
				/>
			</div>

			<div className='qm-form-input'>
				<label>Dive 2:</label>
				<input
					className='dive-input'
					type='text'
					id='d2'
					value={d2}
					onChange={handleInput}
				/>
			</div>

			<div className='qm-form-input'>
				<label>Dive 3:</label>
				<input
					className='dive-input'
					type='text'
					id='d3'
					value={d3}
					onChange={handleInput}
				/>
			</div>

			<div className='qm-form-input'>
				<label>Dive 4:</label>
				<input
					className='dive-input'
					type='text'
					id='d4'
					value={d4}
					onChange={handleInput}
				/>
			</div>

			<div className='qm-form-input'>
				<label>Dive 5:</label>
				<input
					className='dive-input'
					type='text'
					id='d5'
					value={d5}
					onChange={handleInput}
				/>
			</div>

			<div className='qm-form-input'>
				<label>Dive 6:</label>
				<input
					className='dive-input'
					type='text'
					id='d6'
					value={d6}
					onChange={handleInput}
				/>
			</div>
			<button onClick={findDives}>Check Dives</button>
		</div>
	);
};

export default SixDiveInput;
