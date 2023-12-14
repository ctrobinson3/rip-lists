import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as m } from 'framer-motion';

const Landing = () => {
	const navigate = useNavigate();

	return (
		<div className='landing-wrap'>
			<div className='landing-header'>
				<div className='landing-head black-text'>The one </div>
				<div className='landing-head black-text'>stop shop</div>

				<div className='landing-head black-text'>for everything </div>
				<div className='landing-head large black-text'>DIVING</div>
			</div>
			<div className='landing-squares'>
				<div className='s-row'>
					<div className='square' onClick={() => navigate('./create')}>
						Cards
					</div>
					<div className='square' onClick={() => navigate('./temp')}>
						Meets
					</div>
				</div>
				<div className='s-row'>
					<div className='square' onClick={() => navigate('./info')}>
						Info
					</div>
					<div className='square' onClick={() => navigate('./login')}>
						Dive Well
					</div>
				</div>

				{/* ANIMATION */}

				{/* <m.div
					animate={{ x: [-100, 0], opacity: [0, 1] }}
					transition={{
						duration: 0.8,
					}}
					className='landing-head'
				>
					The one{' '}
				</m.div>
				<m.div
					animate={{ x: [-100, 0], opacity: [0, 1] }}
					transition={{
						duration: 0.8,
						delay: 0.5,
					}}
					className='landing-head'
				>
					stop shop
				</m.div>

				<m.div
					animate={{ x: [-100, 0], opacity: [0, 1] }}
					transition={{
						duration: 0.8,
						delay: 1,
					}}
					className='landing-head'
				>
					for everything{' '}
				</m.div>
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: 1.9,
					}}
					className='landing-head large'
				>
					DIVING
				</m.div>
			</div>
			<div className='landing-squares'>
				<div className='s-row'>
					<m.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.5,
							delay: 2,
						}}
						className='square'
						onClick={() => navigate('./create')}
					>
						Cards
					</m.div>
					<m.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.5,
							delay: 2.5,
						}}
						className='square'
						onClick={() => navigate('./meets')}
					>
						Meets
					</m.div>
				</div>
				<div className='s-row'>
					<m.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.5,
							delay: 3,
						}}
						className='square'
						onClick={() => navigate('./info')}
					>
						Info
					</m.div>
					<m.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.5,
							delay: 3.5,
						}}
						className='square'
						onClick={() => navigate('./login')}
					>
						Dive Well
					</m.div>
				</div> */}
			</div>
		</div>
	);
};

export default Landing;
