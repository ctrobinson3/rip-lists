import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedDiveAtom, isModal } from './atomsTable';

const IndividualDives = ({ dive }) => {
	const [dives, setDives] = useRecoilState(selectedDiveAtom);
	const [modal, setModal] = useRecoilState(isModal);

	const selectDive = () => {
		if (dives.length == 0) {
			setModal(true);
			setDives([...dives, { dive }]);
		} else setDives([...dives, { dive }]);
	};
	return (
		<div className='indie-dive-wrap'>
			<div className='individual-dive' onClick={selectDive}>
				{dive.num}
				{dive.letter} {dive.direction} {dive.rotation} {dive.position}{' '}
				{dive.difficulty}
			</div>
		</div>
	);
};

export default IndividualDives;
