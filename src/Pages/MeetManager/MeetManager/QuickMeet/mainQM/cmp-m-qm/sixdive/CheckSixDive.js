import React, { useState } from 'react';
import QMDiveCheck from './QMDiveCheck';

const CheckSixDive = ({
	next,
	back,
	entry,
	onVerify,
	verify,
	setVerified,
	diver,
}) => {
	return (
		<div className='check-wrap'>
			<QMDiveCheck
				entry={entry}
				verify={onVerify}
				setVerified={setVerified}
				diver={diver}
			/>
			<div className='add-btn back-btn' onClick={back}>
				Back
			</div>
		</div>
	);
};

export default CheckSixDive;
