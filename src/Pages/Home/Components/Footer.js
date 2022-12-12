import React from 'react';
import {
	RiFacebookCircleLine as FB,
	RiInstagramLine as IG,
	RiYoutubeLine as YT,
	RiTwitterLine as TW,
} from 'react-icons/ri';

const Footer = () => {
	return (
		<div className='footer-wrap'>
			<div className='footer-links'>
				<div className='footer-link'>{FB()}</div>
				<div className='footer-link'>{IG()}</div>
				<div className='footer-link'>{YT()}</div>
				<div className='footer-link'>{TW()}</div>
			</div>
			<div className='footer-text'>Rip Lists LLC</div>
		</div>
	);
};

export default Footer;
