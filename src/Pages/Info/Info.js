import React, { useState } from 'react';
import '../../Components/Styles/info.css';
import DivesMain from './components/DivesMain';
import SelectedDiveInfo from './components/SelectedDiveInfo';
import HomeNavDark from '../Home/HomeNavDark';
import HomeNavBurg from '../Home/HomeNavBurg';
//recoil
import { isModal } from './components/atomsTable';
import { useRecoilValue } from 'recoil';

const Info = () => {
	const [boardHeight, setBoardHeight] = useState('1');
	const modalSet = useRecoilValue(isModal);

	const handleChange = (e) => {
		setBoardHeight(e.target.value);
	};

	return (
		<div className='info-wrap'>
			<HomeNavDark />
			<HomeNavBurg />
			<div className='info-header'>
				<h1 className='info-head'>Dive DD</h1>
			</div>
			<select
				value={boardHeight}
				onChange={handleChange}
				className='info-height-select'
			>
				<option value='1'>1-Meter</option>
				{/* <option value='3'>3-Meter</option> */}
			</select>
			<div className='info-search'>
				<input />
			</div>
			<div className='info-table-wrap'>
				<div className='info-table'>
					<DivesMain height={boardHeight} />
				</div>
			</div>
			{modalSet && (
				<div className='modal-wrap'>
					<SelectedDiveInfo />{' '}
				</div>
			)}
		</div>
	);
};

export default Info;
