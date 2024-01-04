import React, { useState } from 'react';
import { divesAtom } from '../atomsTable';
import { useRecoilValue } from 'recoil';
import DisplayTwist from './DisplayTwist';

const Twister = ({ setHome }) => {
	const d = useRecoilValue(divesAtom);
	let fTw = [];
	let bTw = [];
	let rTw = [];
	let iTw = [];

	for (let i = 0; i < d.length; i++) {
		let td = d[i];
		let dir = td.direction;
		if (dir == 'Forward') {
			fTw.push(td);
		} else if (dir == 'Back') {
			bTw.push(td);
		} else if (dir == 'Reverse') {
			rTw.push(td);
		} else if (dir == 'Inward') {
			iTw.push(td);
		} else console.log('er');
	}

	const [twistList, setTwistList] = useState(fTw);
	return (
		<div className='twist-contain'>
			<div className='twist-wrap'>
				<div className='twist-cat-header'>
					<div
						className='tw-btn'
						onClick={() => {
							setTwistList(fTw);
						}}
					>
						Forward
					</div>
					<hr className='hr' />
					<div
						className='tw-btn'
						onClick={() => {
							setTwistList(bTw);
						}}
					>
						Back
					</div>
					<hr className='hr' />
					<div
						className='tw-btn'
						onClick={() => {
							setTwistList(rTw);
						}}
					>
						Reverse
					</div>
					<hr className='hr' />
					<div
						className='tw-btn'
						onClick={() => {
							setTwistList(iTw);
						}}
					>
						Inward
					</div>
				</div>
				<div className='twist-cat-display'>
					<DisplayTwist dives={twistList} />
				</div>

				<div className='btn-wrap'>
					<div className='close-btn' onClick={setHome}>
						Back
					</div>
				</div>
			</div>
		</div>
	);
};

export default Twister;
