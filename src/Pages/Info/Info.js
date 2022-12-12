import React, { useState } from 'react';
import '../../Components/Styles/info.css';
import DivesMain from './components/DivesMain';
import HomeNavDark from '../Home/HomeNavDark';

const Info = () => {
	const [boardHeight, setBoardHeight] = useState('1');

	const handleChange = (e) => {
		setBoardHeight(e.target.value);
	};

	return (
		<div className='info-wrap'>
			<HomeNavDark />
			<div className='info-header'>
				<h1 className='info-head'>Dive DD</h1>
			</div>
			<select
				value={boardHeight}
				onChange={handleChange}
				className='info-height-select'
			>
				<option value='1'>1-Meter</option>
				<option value='3'>3-Meter</option>
			</select>
			<div className='info-search'>
				<input />
			</div>
			<div className='info-table-wrap'>
				<div className='info-table'>
					<DivesMain height={boardHeight} />
				</div>
			</div>
		</div>
	);
};

export default Info;
