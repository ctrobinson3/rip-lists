import React from 'react';
import { useState } from 'react';
import CategorySelect from './CategorySelect';
import DiveDisplay from './DiveDisplay';

const DivesMain = ({ height }) => {
	// Page movement
	const [curStep, setStep] = useState(1);
	const next = () => {
		setStep(curStep + 1);
	};
	const back = () => {
		setStep(curStep - 1);
	};

	switch (curStep) {
		case 1:
			return <CategorySelect next={next} />;
		case 2:
			return <DiveDisplay back={back} />;
	}
};

export default DivesMain;
