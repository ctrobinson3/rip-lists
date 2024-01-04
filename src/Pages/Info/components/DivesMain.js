import React from 'react';
import { useState } from 'react';
import CategorySelect from './CategorySelect';
import DiveDisplay from './DiveDisplay';
import Twister from './twister/Twister';

const DivesMain = ({ height }) => {
	// Page movement
	const [curStep, setStep] = useState(1);
	const next = () => {
		setStep(curStep + 1);
	};
	const back = () => {
		setStep(curStep - 1);
	};
	const setTwist = () => {
		setStep(3);
	};
	const setHome = () => {
		setStep(1);
	};

	switch (curStep) {
		case 1:
			return <CategorySelect next={next} setTwist={setTwist} />;
		case 2:
			return <DiveDisplay back={back} />;
		case 3:
			return <Twister setHome={setHome} />;
	}
};

export default DivesMain;
