import { useState } from 'react';
import '../../Components/Styles/formstyle.css';
import DiverInfoEleven from './pages/DiverInfoEleven';
import EnterElevenDives from './pages/EnterElevenDives';
import CheckListEleven from './pages/CheckListEleven';
import DiveCardEleven from './pages/DiveCardEleven';

const ElevenMain = () => {
	//info
	const [info, setInfo] = useState({
		name: '',
		team: '',
		coach: '',
		meet: '',
		date: '',
	});

	const [dives, setDives] = useState({
		d1: '',
		d2: '',
		d3: '',
		d4: '',
		d5: '',
		d6: '',
		d7: '',
		d8: '',
		d9: '',
		d10: '',
		d11: '',
	});

	const [isOpt, setOpt] = useState({
		o1: false,
		o2: true,
		o3: false,
		o4: true,
		o5: true,
		o6: false,
		o7: true,
		o8: false,
		o9: false,
		o10: true,
		o11: true,
	});

	const [entry, setEntry] = useState([]);

	const handleEntry = (e) => {
		setEntry(e);
	};

	//pages
	const [curStep, setStep] = useState(1);
	const next = () => {
		setStep(curStep + 1);
	};
	const back = () => {
		setStep(curStep - 1);
	};

	//on change
	const handleInfoChange = (e) => {
		setInfo({
			...info,
			[e.target.id]: e.target.value,
		});
	};
	const handleOptChange = (e) => {
		setOpt({
			...isOpt,
			[e.target.id]: e.target.checked,
		});
	};
	const handleDiveChange = (e) => {
		setDives({
			...dives,
			[e.target.id]: e.target.value,
		});
	};

	//page layout
	switch (curStep) {
		case 1:
			return (
				<>
					<h2 className="h2">Eleven Dives</h2>
					<DiverInfoEleven
						next={next}
						onChange={handleInfoChange}
						info={info}
					/>
				</>
			);
		case 2:
			return (
				<>
					<h2 className="h2">Eleven Dives</h2>
					<EnterElevenDives
						next={next}
						back={back}
						dives={dives}
						onChange={handleDiveChange}
						onClick={handleOptChange}
						opt={isOpt}
						onSubmit={handleEntry}
					/>
				</>
			);
		case 3:
			return (
				<>
					<h2 className="h2">Eleven Dives</h2>
					<CheckListEleven next={next} back={back} entry={entry} />
				</>
			);
		default:
			return (
				<>
					<h2 className="h2">Eleven Dives</h2>
					<DiveCardEleven back={back} />
				</>
			);
	}
};

export default ElevenMain;
