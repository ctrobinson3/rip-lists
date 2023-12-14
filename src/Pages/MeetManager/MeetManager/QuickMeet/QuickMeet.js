import React from 'react';
import AddDiver from './mainQM/AddDiver';
import Info from './mainQM/Info';

const QuickMeet = () => {
	return (
		<div className='manager-page'>
			<header>
				<p className='meet-header'>Quick Meet</p>
			</header>
			<div className='manager-body'>
				<Info />
				<AddDiver />
			</div>
		</div>
	);
};

export default QuickMeet;
