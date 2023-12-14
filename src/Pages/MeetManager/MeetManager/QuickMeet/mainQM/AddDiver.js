import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { diversAtom } from '../recoilQM/atoms-qm';
import AddedDivers from './cmp-m-qm/AddedDivers';
import DiverModal from './cmp-m-qm/DiverModal';

const AddDiver = () => {
	const [divers, setDivers] = useRecoilState(diversAtom);
	const [modal, setModal] = useState(false);
	if (modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	return (
		<div className='meet-container'>
			<div className='manager-header'>
				<p>Added Divers:</p>
			</div>
			<div className='manager-table'>
				<div className='center'>
					<button
						onClick={() => {
							setModal(!modal);
						}}
					>
						Add
					</button>
				</div>
				{divers.map((d, index) => (
					<AddedDivers key={index} diver={d} />
				))}
			</div>

			{/* modal */}
			{modal && <DiverModal modal={modal} setModal={setModal} />}
		</div>
	);
};

export default AddDiver;
