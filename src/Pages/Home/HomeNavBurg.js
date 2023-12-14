import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import logosmall from '../../img/smalllogo.png';
import Burg from './Components/Burg';

const HomeNavBurg = () => {
	const navigate = useNavigate();

	//modals
	const [openBurg, setOpenBurg] = useState(false);
	if (openBurg) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	return (
		<div className='nav-burg'>
			<div className='logo-burg' onClick={() => navigate('/')}>
				<img className='logo-burg-img' src={logosmall} />
			</div>
			{/* <div className='burg' onClick={() => setOpenBurg(!openBurg)}>
				<GiHamburgerMenu />
			</div>
			{openBurg && <Burg />} */}
		</div>
	);
};

export default HomeNavBurg;
