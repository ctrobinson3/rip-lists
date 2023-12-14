import React from 'react';
import { useNavigate } from 'react-router-dom';

const TempPage = () => {
	// navigation
	const navigate = useNavigate();

	return (
		<div className='temp-page'>
			<div className='temp-text'>COMING SOON...</div>
			<div className='temp-button-div'>
				<div className='temp-button' onClick={() => navigate('/')}>
					Home
				</div>
			</div>
		</div>
	);
};

export default TempPage;
