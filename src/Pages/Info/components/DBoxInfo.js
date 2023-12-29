import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedDiveAtom, isModal } from './atomsTable';

const DBoxInfo = ({ dive }) => {
	const [dives, setDives] = useRecoilState(selectedDiveAtom);
	const [modal, setModal] = useRecoilState(isModal);

	const selectDive = () => {
		if (dives.length == 0) {
			setModal(true);
			setDives([...dives, { dive }]);
		} else setDives([...dives, { dive }]);
	};

	return (
		<div className='dbox-dive' onClick={selectDive}>
			<div>{dive.letter}</div>
			<div>{dive.difficulty}</div>
		</div>
	);
};

export default DBoxInfo;
