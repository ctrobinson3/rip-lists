import React from 'react';

const DiverInfo = ({ diver, setDiverInfo }) => {
	return (
		<div>
			<div className='manager-med-txt qm-center'>Diver Info</div>
			<div className='manager-form'>
				<div className='qm-form-input'>
					<label>Diver Name:</label>
					<input
						type='text'
						id='name'
						value={diver.name}
						onChange={setDiverInfo}
					/>
				</div>
				<div className='qm-form-input'>
					<label>School:</label>
					<input
						type='text'
						id='school'
						value={diver.school}
						onChange={setDiverInfo}
					/>
				</div>
				<div className='qm-form-input'>
					<label>Grade:</label>
					<input
						type='text'
						id='grade'
						value={diver.grade}
						onChange={setDiverInfo}
					/>
				</div>
				<div className='qm-form-input'>
					<label>Coach:</label>
					<input
						type='text'
						id='coach'
						value={diver.coach}
						onChange={setDiverInfo}
					/>
				</div>
			</div>
		</div>
	);
};

export default DiverInfo;
