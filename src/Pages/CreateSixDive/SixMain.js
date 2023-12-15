import { useState } from 'react';
import DiveCardSix from './pages/DiveCardSix';
import DiverInfoSix from './pages/DiverInfoSix';
import EnterDivesSix from './pages/EnterDivesSix';
import CheckListSix from './pages/CheckListSix';
import '../../Components/Styles/formstyle.css';
import HomeNavDark from '../Home/HomeNavDark';
import HomeNavBurg from '../Home/HomeNavBurg';

const SixMain = () => {
	//useState
	//Diver Info
	const [info, setInfo] = useState({
		name: '',
		team: '',
		coach: '',
		meet: '',
		date: '',
		event: '1-meter, 6 dives',
	});
	//Dives
	const [dive, setDive] = useState({
		d1: '',
		d2: '',
		d3: '',
		d4: '',
		d5: '',
		d6: '',
	});
	//Entries
	const [entry, setEntry] = useState([]);
	//Verified List
	const [verify, setVerify] = useState([true]);

	//onChange
	//set info
	const handleInfo = (e) => {
		setInfo({
			...info,
			[e.target.id]: e.target.value,
		});
	};
	//set dives
	const handleDive = (e) => {
		setDive({
			...dive,
			[e.target.id]: e.target.value,
		});
	};
	//set entry
	const handleEntry = (e) => {
		setEntry(e);
	};
	//set verify
	const onVerify = (e) => {
		setVerify(e);
	};

	//pages
	const [curStep, setStep] = useState(1);
	const next = () => {
		setStep(curStep + 1);
	};
	const back = () => {
		setStep(curStep - 1);
	};

	//page layout
	switch (curStep) {
		case 1:
			return (
				<div className='page-wrap'>
					<HomeNavDark />
					<HomeNavBurg />
					<DiverInfoSix info={info} onChange={handleInfo} next={next} />
				</div>
			);
		case 2:
			return (
				<div className='page-wrap'>
					<HomeNavDark />
					<HomeNavBurg />
					<EnterDivesSix
						dive={dive}
						onChange={handleDive}
						onSubmit={handleEntry}
						next={next}
						back={back}
					/>
				</div>
			);
		case 3:
			return (
				<div className='page-wrap'>
					<HomeNavDark />
					<HomeNavBurg />
					<CheckListSix
						next={next}
						back={back}
						entry={entry}
						onVerify={onVerify}
						verify={verify}
					/>
				</div>
			);
		case 4:
			return (
				<div className='page-wrap'>
					<HomeNavDark />
					<HomeNavBurg />
					<DiveCardSix back={back} dive={entry} info={info} verify={verify} />
				</div>
			);
	}
};

export default SixMain;
