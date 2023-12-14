import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {
	CreateHome,
	Home,
	SixMain,
	ElevenMain,
	UserAuth,
	MeetManager,
	HomeNav,
	Info,
	OpenMeet,
	Manager,
	QuickMeet,
	TempPage,
} from '../Pages/pagesIndex';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<div>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} />
					<Route path='/create' element={<CreateHome />} />
					<Route path='/create-eleven' element={<ElevenMain />} />
					<Route path='/create-six' element={<SixMain />} />
					<Route path='/login' element={<UserAuth />} />
					<Route path='/meets' element={<MeetManager />} />
					<Route path='/info' element={<Info />} />
					<Route path='/openmeet' element={<OpenMeet />} />

					{/* meet manager */}
					<Route path='/meet-manager' element={<Manager />} />
					<Route path='/quick-meet' element={<QuickMeet />} />

					{/* temp */}
					<Route path='/temp' element={<TempPage />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
};

export default AnimatedRoutes;
