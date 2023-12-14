import React from 'react';
import { useNavigate } from 'react-router-dom';
import logomainblack from '../../img/logomainblack.png';
import logosmall from '../../img/smalllogo.png';
import { CgProfile } from 'react-icons/cg';

const HomeNavDark = () => {
	// navigation
	const navigate = useNavigate();

	return (
		<div className='HN-container'>
			<div className='home-nav-dark'>
				<div className='HN-logo ' onClick={() => navigate('/')}>
					<img src={logomainblack} />
				</div>
				<div className='HN-logo-small' onClick={() => navigate('/')}>
					<img src={logosmall} />
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
					<div className='login cursor underline'>Login / Sign Up</div>
				</div>
			</div>
		</div>
	);
};

export default HomeNavDark;
