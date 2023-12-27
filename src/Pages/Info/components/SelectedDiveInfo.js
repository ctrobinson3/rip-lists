import React from 'react';
import { useRecoilState } from 'recoil';
import { isModal, selectedDiveAtom } from './atomsTable';

const SelectedDiveInfo = () => {
	const [dives, setDives] = useRecoilState(selectedDiveAtom);
	const [modal, setModal] = useRecoilState(isModal);

	const showDive = (d) => {
		let thisDive = d.dive;
		let thisDiff = thisDive.difficulty;
		return (
			<div className='sd-single'>
				{thisDive.num}
				{thisDive.letter} : {thisDiff}
			</div>
		);
	};
	const showTotalDifficulty = () => {
		let length = dives.length;
		let total = 0;
		for (let i = 0; i < length; i++) {
			let d = dives[i];
			let t = d.dive;
			let dd = parseFloat(t.difficulty);
			total += dd;
		}
		return <div className='sd-total'>Total DD : {total.toFixed(1)}</div>;
	};
	const clearDives = () => {
		setDives([]);
		setModal(false);
	};
	return (
		<div className='selected-dive-wrap'>
			{dives.map((d, index) => {
				return (
					<div key={index} className='sd-i'>
						{showDive(d)}
					</div>
				);
			})}
			{showTotalDifficulty()}
			<div className='close-btn' onClick={clearDives}>
				Clear
			</div>
		</div>
	);
};

export default SelectedDiveInfo;
