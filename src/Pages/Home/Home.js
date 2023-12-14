import React from 'react';
import Landing from './Components/Landing';
import About from './Components/About';
import '../../Components/Styles/home.css';
import frontVideo from '../../img/fontvid.mp4';
import Footer from './Components/Footer';
import { navStateAtom } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';
import HomeNav from './HomeNav';
import HomeNavDark from './HomeNavDark';
import HomeNavBurg from './HomeNavBurg';

const Home = () => {
	return (
		<div className='home-wrap'>
			<HomeNavDark />
			<HomeNavBurg />

			{/* VIDEO */}
			{/* <div className='video-div'>
				<video src={frontVideo} autoPlay loop muted />
			</div> */}

			<div className='home-content'>
				<Landing />
			</div>
			<div className='about-content'>
				<About />
			</div>
			<div className='footer-content'>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
