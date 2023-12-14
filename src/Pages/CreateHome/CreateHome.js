import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNavDark from '../Home/HomeNavDark';
import './CreateHomeStyle.css';
import HomeNavBurg from '../Home/HomeNavBurg';

export default function CreateHome() {
	//set dive count
	const [state, setState] = useState({
		type: '6-dive',
	});
	const { type } = state;

	//navigate
	const navigate = useNavigate();

	//actions
	const onSubmit = (e) => {
		e.preventDefault();

		if (type === '6-dive') {
			navigate('/create-six');
		}

		if (type === '11-dive') {
			navigate('/create-eleven');
		}
	};

	const onMutate = (e) => {
		let boolean = null;

		if (e.target.value === 'true') {
			boolean = true;
		}
		if (e.target.value === 'false') {
			boolean = false;
		}
		setState((prevState) => ({
			...prevState,
			[e.target.id]: boolean ?? e.target.value,
		}));
	};

	return (
		<div className='home-div'>
			<HomeNavDark />

			<HomeNavBurg />
			<header className='home-header'>
				<h1 className='home-head'>Create Dive Card</h1>
			</header>
			<main className='home-main'>
				<form onSubmit={onSubmit}>
					<h2 className='home-form-header'>Dive Amount:</h2>
					<div className='home-buttons-wrap'>
						<div
							className='home-btn'
							onClick={() => {
								navigate('/create-six');
							}}
						>
							<p>6 Dive</p>
						</div>
						<div
							className='home-btn'
							onClick={() => {
								navigate('/create-eleven');
							}}
						>
							<p>11 Dive</p>
						</div>
					</div>
				</form>
			</main>
		</div>
	);
}
