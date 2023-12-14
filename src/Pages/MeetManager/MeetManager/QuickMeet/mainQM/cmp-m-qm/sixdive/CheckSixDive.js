import React, { useState } from 'react';

const CheckSixDive = ({ next, back }) => {
	return (
		<div>
			<button onClick={next}>Submit</button>
			<button onClick={back}>Back</button>
		</div>
	);
};

export default CheckSixDive;
