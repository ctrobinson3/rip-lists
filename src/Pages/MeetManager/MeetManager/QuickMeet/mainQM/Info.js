import React from 'react';
import { useRecoilState } from 'recoil';
import { meetInfoAtom, numDivesAtom } from '../recoilQM/atoms-qm';

const Info = () => {
	const [meetInfo, setMeetInfo] = useRecoilState(meetInfoAtom);
	const [numDives, setNumDives] = useRecoilState(numDivesAtom);

	const enterInfo = (e) => {
		setMeetInfo({
			...meetInfo,
			[e.target.id]: e.target.value,
		});
	};
	const changeNumDives = (e) => {
		setNumDives(e.target.value);
	};

	return (
		<div className='meet-container'>
			<div className='qm-header'>
				<p>Set Meet Info</p>
			</div>
			<form className='qm-form'>
				<div className='qm-form-input'>
					<label>Meet Name:</label>
					<input
						type='text'
						className='input-qm'
						id='name'
						value={meetInfo.name}
						onChange={enterInfo}
					/>
				</div>
				<div className='qm-form-input'>
					<label>Gender:</label>
					<select id='gender' value={meetInfo.gender} onChange={enterInfo}>
						<option value=''></option>
						<option value='Girls'>Girls</option>
						<option value='Boys'>Boys</option>
					</select>
				</div>
				<div className='qm-form-input'>
					<label>Event:</label>
					<select id='event' value={meetInfo.event} onChange={enterInfo}>
						<option value=''></option>
						<option value='1 meter'>1 meter</option>
						{/* <option value='3 meter'>3 meter</option> */}
					</select>
				</div>
				<div className='qm-form-input'>
					<label>Dive Amount:</label>
					<select id='diveAmt' value={numDives} onChange={changeNumDives}>
						<option value=''></option>
						<option value='6 dive'>6</option>
						{/* <option value='11 dive'>11</option> */}
					</select>
				</div>
				<div className='qm-form-input'>
					<label>Judge Amount:</label>
					<select id='judgeAmt' value={meetInfo.judgeAmt} onChange={enterInfo}>
						<option value=''></option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						{/* <option value='5'>5</option>
						<option value='7'>7</option> */}
					</select>
				</div>
			</form>
		</div>
	);
};

export default Info;
