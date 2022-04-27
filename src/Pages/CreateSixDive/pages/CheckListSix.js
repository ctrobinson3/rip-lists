import React from 'react';
import Dives from './components/dives';

const CheckListSix = ({ next, back, entry, onVerify, verify }) => {
	return (
		<div className="page-container">
			<h1 className="header">List Check</h1>
			<Dives entry={entry} verify={onVerify} />
			{verify && (
				<div className="button-container">
					<button type="button" className="form-button next" onClick={next}>
						Submit
					</button>
					<button type="button" className="form-button back" onClick={back}>
						Back
					</button>
				</div>
			)}
			{!verify && (
				<div className="button-container">
					<button type="button" className="form-button next" onClick={back}>
						Back
					</button>
					<button
						type="button"
						className="form-button submit-anyway"
						onClick={next}
					>
						Submit Anyway
					</button>
				</div>
			)}
		</div>
	);
};

export default CheckListSix;
