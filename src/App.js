import './Components/Styles/app.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes';
import React from 'react';

function App() {
	return (
		<div className='app'>
			<React.Suspense fallback={<div>Loading...</div>}>
				<Router>
					<AnimatedRoutes />
				</Router>
			</React.Suspense>
		</div>
	);
}

export default App;
