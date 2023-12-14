import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogo from '../../img/logomain.png';
import { CgProfile } from 'react-icons/cg';

const HomeNav = () => {
	// navigation
	const navigate = useNavigate();

	return (
		<div className='HN-container'>
			<div className='home-nav'>
				<div className='HN-logo ' onClick={() => navigate('/')}>
					<img src={mainLogo} />
				</div>
				<div className='HN-links'>
					<div className='HN-link cursor' onClick={() => navigate('/create')}>
						Cards
					</div>
					<div className='HN-link cursor' onClick={() => navigate('/temp')}>
						Meets
					</div>
					<div className='HN-link cursor' onClick={() => navigate('/info')}>
						DD Table
					</div>
				</div>
				<div className='profile-top' onClick={() => navigate('/temp')}>
					<CgProfile className='icon' />
					<div className='cursor underline'>Login / Sign Up</div>
				</div>
			</div>
		</div>
	);
};

export default HomeNav;
