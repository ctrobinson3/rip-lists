import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { diversAtom } from '../../recoilQM/atoms-qm';
import EnterDives from './EnterDives';
import DiverInfo from './DiverInfo';

const DiverModal = ({ modal, setModal }) => {
	const [verified, setVerified] = useState(false);
	const [nameCheck, setNameCheck] = useState(false);
	const [diverAtom, setDiverAtom] = useRecoilState(diversAtom);
	const [diver, setDiver] = useState({
		name: '',
		grade: '',
		school: '',
		coach: '',
		dives: [],
	});

	const setDiverInfo = (e) => {
		setDiver({
			...diver,
			[e.target.id]: e.target.value,
		});
	};

	const onEnterDiver = () => {
		setDiverAtom([...diverAtom, diver]);
		setModal(!modal);
	};

	return (
		<div className='qm-modal-background'>
			<div className='qm-modal-container'>
				<div className='qm-modal-content'>
					<div className='manager-header'>
						<p>Enter Diver</p>
					</div>
					<DiverInfo
						diver={diver}
						setDiverInfo={setDiverInfo}
						nameCheck={nameCheck}
						setNameCheck={setNameCheck}
					/>

					<EnterDives
						diver={diver}
						setDiver={setDiver}
						setDiverInfo={setDiverInfo}
						setVerified={setVerified}
					/>
					<footer>
						<div className='foot-btns'>
							{!nameCheck && (
								<div className='message'>Please enter a name!</div>
							)}
							{verified && nameCheck && (
								<div className='meet-link smaller-btn' onClick={onEnterDiver}>
									Add Diver
								</div>
							)}

							<div
								className='add-btn back-btn'
								on
								onClick={() => {
									setModal(!modal);
								}}
							>
								Close
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default DiverModal;
