import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedMeet, runMeet } from '../recoilMeetManager/atomsMeetManager';
import { ThisDiver } from '../indexMeetManager';

const OpenMeet = () => {
	const thisMeet = useRecoilValue(selectedMeet);
	const divers = thisMeet.divers;
	const admin = thisMeet.admin;

	const [meetRun, setMeetRun] = useRecoilState(runMeet);

	const navigate = useNavigate();

	//meet password modal
	const [openPasswordModal, setOpenPasswordModal] = useState(false);
	if (openPasswordModal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	//admin number check
	const [adminNumber, setAdminNumber] = useState('a');
	const onInput = (e) => {
		setAdminNumber(e.target.value);
	};
	const checkAdminNumber = () => {
		if (admin === adminNumber) {
			setMeetRun(thisMeet);
			navigate('/runmeet');
		} else {
			console.log('incorrect');
		}
	};

	return (
		<div>
			<header>
				<h1>{thisMeet.name}</h1>
				<button
					onClick={() => {
						setOpenPasswordModal(!openPasswordModal);
					}}
				>
					Run Meet
				</button>
				<h3>{thisMeet.date}</h3>
				<h4>{thisMeet.event}</h4>
			</header>
			<div className='RM-body'>
				<h2>Divers:</h2>
				{divers.map((m) => (
					<ThisDiver key={m.id} diver={m} />
				))}
			</div>
			<footer>
				<button>
					<Link to='/'>Back</Link>
				</button>
			</footer>
			{/* modal */}
			{openPasswordModal && (
				<div className='modal-background'>
					<div className='modal-container'>
						<div className='modal-content'>
							<p>Admin Number:</p>
							<form>
								<input type='text' onChange={onInput}></input>
							</form>
							<button onClick={checkAdminNumber}>submit</button>

							<footer>
								<button
									onClick={() => {
										setOpenPasswordModal(!openPasswordModal);
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

export default OpenMeet;
