import React, { useState } from 'react';
import CheckSixDive from './CheckSixDive';
import SixDiveInput from './SixDiveInput';

const MainSix = () => {
	const [verify, setVerify] = useState(false);
	const [diveList, setDiveList] = useState({
		d1: '',
		d2: '',
		d3: '',
		d4: '',
		d5: '',
		d6: '',
	});

	const onSet = (e) => {
		setDiveList({
			...diveList,
			[e.target.id]: e.target.value,
		});
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
					<SixDiveInput next={next} />
				</div>
			);
		case 2:
			return (
				<div className='manager-form'>
					<CheckSixDive back={back} next={next} />
				</div>
			);
	}
};

export default MainSix;
