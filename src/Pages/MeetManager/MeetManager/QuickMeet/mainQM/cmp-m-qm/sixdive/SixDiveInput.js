import React, { useState } from 'react';

const SixDiveInput = ({ next }) => {
	const [verify, setVerify] = useState(false);
	const [diveList, setDiveList] = useState({
		d1: '',
		d2: '',
		d3: '',
		d4: '',
		d5: '',
		d6: '',
	});

	const onSet = (e) => {
		setDiveList({
			...diveList,
			[e.target.id]: e.target.value,
		});
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
					value={diveList.d1}
					onChange={onSet}
				/>
			</div>

			<div className='qm-form-input'>
				<label>Dive 2:</label>
				<input
					className='dive-input'
					type='text'
					id='d2'
					value={diveList.d2}
					onChange={onSet}
				/>
			</div>

			<div className='qm-form-input'>
				<label>Dive 3:</label>
				<input
					className='dive-input'
					type='text'
					id='d3'
					value={diveList.d3}
					onChange={onSet}
				/>
			</div>

			<div className='qm-form-input'>
				<label>Dive 4:</label>
				<input
					className='dive-input'
					type='text'
					id='d4'
					value={diveList.d4}
					onChange={onSet}
				/>
			</div>

			<div className='qm-form-input'>
				<label>Dive 5:</label>
				<input
					className='dive-input'
					type='text'
					id='d5'
					value={diveList.d5}
					onChange={onSet}
				/>
			</div>

			<div className='qm-form-input'>
				<label>Dive 6:</label>
				<input
					className='dive-input'
					type='text'
					id='d6'
					value={diveList.d6}
					onChange={onSet}
				/>
			</div>
			<button onClick={next}>Check Dives</button>
		</div>
	);
};

export default SixDiveInput;
