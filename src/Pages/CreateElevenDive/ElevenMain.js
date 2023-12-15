import { useState } from 'react';
import '../../Components/Styles/formstyle.css';
import DiverInfoEleven from './pages/DiverInfoEleven';
import EnterElevenDives from './pages/EnterElevenDives';
import CheckListEleven from './pages/CheckListEleven';
import DiveCardEleven from './pages/DiveCardEleven';
import HomeNavDark from '../Home/HomeNavDark';
import HomeNavBurg from '../Home/HomeNavBurg';

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

	const [verify, setVerify] = useState(true);

	const [underNine, setUnderNine] = useState(true);

	const handleEntry = (e) => {
		setEntry(e);
	};

	const handleUnderNine = (e) => {
		setUnderNine(e);
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
	const onVerify = (e) => {
		setVerify(e);
	};

	//page layout
	switch (curStep) {
		case 1:
			return (
				<div className='page-wrap'>
					<HomeNavDark />
					<HomeNavBurg />
					<DiverInfoEleven
						next={next}
						onChange={handleInfoChange}
						info={info}
					/>
				</div>
			);
		case 2:
			return (
				<div className='page-wrap'>
					<HomeNavDark />
					<HomeNavBurg />
					<EnterElevenDives
						next={next}
						back={back}
						dives={dives}
						onChange={handleDiveChange}
						onClick={handleOptChange}
						opt={isOpt}
						onSubmit={handleEntry}
					/>
				</div>
			);
		case 3:
			return (
				<div className='page-wrap'>
					<HomeNavDark />
					<HomeNavBurg />
					<CheckListEleven
						next={next}
						back={back}
						entry={entry}
						verify={verify}
						onVerify={onVerify}
						handleUnderNine={handleUnderNine}
					/>
				</div>
			);
		default:
			return (
				<div className='page-wrap'>
					<HomeNavDark />
					<HomeNavBurg />
					<DiveCardEleven
						back={back}
						dive={entry}
						info={info}
						verify={verify}
						underNine={underNine}
					/>
				</div>
			);
	}
};

export default ElevenMain;
