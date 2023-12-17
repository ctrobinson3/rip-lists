import React from 'react';

const AddedDivers = ({ diver }) => {
	return (
		<div className='added-divers-wrap'>
			<div>{diver.name}</div>
		</div>
	);
};

export default AddedDivers;
