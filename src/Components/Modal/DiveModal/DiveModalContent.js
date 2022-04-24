import React, { useState } from 'react';
import '../../Styles/divetabs.css';

const DiveModalContent = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (i) => {
		setToggleState(i);
	};

	return (
		<div className="dives-container">
			<div className="dives-bloc">
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

			<div className="dives-content-tabs">
				<div
					className={
						toggleState === 1 ? 'dives-content active-content' : 'dives-content'
					}
				>
					front
				</div>
				<div
					className={
						toggleState === 2 ? 'dives-content active-content' : 'dives-content'
					}
				>
					back
				</div>
				<div
					className={
						toggleState === 3 ? 'dives-content active-content' : 'dives-content'
					}
				>
					reverse
				</div>
				<div
					className={
						toggleState === 4 ? 'dives-content active-content' : 'dives-content'
					}
				>
					inward
				</div>
				<div
					className={
						toggleState === 5 ? 'dives-content active-content' : 'dives-content'
					}
				>
					twist
				</div>
			</div>
		</div>
	);
};

export default DiveModalContent;
