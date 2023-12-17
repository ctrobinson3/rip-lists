import React, { useState } from 'react';
import CheckSixDive from './CheckSixDive';
import SixDiveInput from './SixDiveInput';

const MainSix = ({ setVerified, diver }) => {
	const [verify, setVerify] = useState([true]);
	const [inputDive, setInputDive] = useState({
		d1: '',
		d2: '',
		d3: '',
		d4: '',
		d5: '',
		d6: '',
	});

	const [entry, setEntry] = useState([]);

	const handleInput = (e) => {
		setInputDive({
			...inputDive,
			[e.target.id]: e.target.value,
		});
	};

	const onVerify = (e) => {
		setVerify(e);
	};

	//pages
	const [page, setPage] = useState(1);
	const next = () => {
		setPage(page + 1);
	};
	const back = () => {
		setPage(page - 1);
	};

	switch (page) {
		case 1:
			return (
				<div className='manager-form'>
					<SixDiveInput
						entry={entry}
						setEntry={setEntry}
						next={next}
						inputDive={inputDive}
						handleInput={handleInput}
					/>
				</div>
			);
		case 2:
			return (
				<div className='manager-form'>
					<CheckSixDive
						back={back}
						entry={entry}
						verify={verify}
						onVerify={onVerify}
						next={next}
						setVerified={setVerified}
						diver={diver}
					/>
				</div>
			);
	}
};

export default MainSix;
