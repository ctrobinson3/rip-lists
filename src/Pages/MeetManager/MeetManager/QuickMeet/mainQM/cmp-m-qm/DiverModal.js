import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { diversAtom } from '../../recoilQM/atoms-qm';
import EnterDives from './EnterDives';
import DiverInfo from './DiverInfo';

const DiverModal = ({ modal, setModal }) => {
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

	return (
		<div className='qm-modal-background'>
			<div className='qm-modal-container'>
				<div className='qm-modal-content'>
					<div className='manager-header'>
						<p>Enter Diver</p>
					</div>
					<DiverInfo diver={diver} setDiverInfo={setDiverInfo} />

					<EnterDives diver={diver} setDiverInfo={setDiverInfo} />
					<footer>
						<button
							on
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
	);
};

export default DiverModal;
