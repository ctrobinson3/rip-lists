import React, { useState } from 'react';
import '../Styles/divetabs.css';
import Fronts from './DiveModalContent/Fronts';
import Backs from './DiveModalContent/Backs';
import Reverses from './DiveModalContent/Reverses';
import Inwards from './DiveModalContent/Inwards';
import Twists from './DiveModalContent/Twists';

const DiveModalContent = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (i) => {
		setToggleState(i);
	};

	return (
		<div className='dives-container'>
			<div className='dive-modal-head'>
				<p className='dive-p'>
					A = <b>Straight</b>
				</p>
				<p className='dive-p'>
					B = <b>Pike</b>
				</p>
				<p className='dive-p'>
					C = <b>Tuck</b>
				</p>
				<p className='dive-p'>
					D = <b>Free</b>
				</p>
			</div>
			<div className='dives-bloc'>
				<div
					className={
						toggleState === 1 ? 'dives-tabs active-tabs' : 'dives-tabs'
					}
					onClick={() => toggleTab(1)}
				>
					Front
				</div>
				<div
					className={
						toggleState === 2 ? 'dives-tabs active-tabs' : 'dives-tabs'
					}
					onClick={() => toggleTab(2)}
				>
					Back
				</div>
				<div
					className={
						toggleState === 3 ? 'dives-tabs active-tabs' : 'dives-tabs'
					}
					onClick={() => toggleTab(3)}
				>
					Reverse
				</div>
				<div
					className={
						toggleState === 4 ? 'dives-tabs active-tabs' : 'dives-tabs'
					}
					onClick={() => toggleTab(4)}
				>
					Inward
				</div>
				<div
					className={
						toggleState === 5 ? 'dives-tabs active-tabs' : 'dives-tabs'
					}
					onClick={() => toggleTab(5)}
				>
					Twist
				</div>
			</div>
			<div className='dives-content-tabs'>
				<div
					className={
						toggleState === 1 ? 'dives-content active-content' : 'dives-content'
					}
				>
					<Fronts />
				</div>
				<div
					className={
						toggleState === 2 ? 'dives-content active-content' : 'dives-content'
					}
				>
					<Backs />
				</div>
				<div
					className={
						toggleState === 3 ? 'dives-content active-content' : 'dives-content'
					}
				>
					<Reverses />
				</div>
				<div
					className={
						toggleState === 4 ? 'dives-content active-content' : 'dives-content'
					}
				>
					<Inwards />
				</div>
				<div
					className={
						toggleState === 5 ? 'dives-content active-content' : 'dives-content'
					}
				>
					<Twists />
				</div>
			</div>
		</div>
	);
};

export default DiveModalContent;
