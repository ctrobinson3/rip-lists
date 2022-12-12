import React from 'react';
import { diveArrayFunction } from '../../../Components/DiveLists/DiveArray';

import { useRecoilState } from 'recoil';
import { categoryAtom, divesAtom } from './atomsTable';

const CategorySelect = ({ next }) => {
	const diveArr = diveArrayFunction();

	const [category, setCategory] = useRecoilState(categoryAtom);
	const [catDives, setCatDives] = useRecoilState(divesAtom);

	let dives = new Set();
	for (let i = 0; i < diveArr.length; i++) {
		let d = diveArr[i];
		if (d.cat != ' ') dives.add(d.cat);
	}
	let diveCat = Array.from(dives);

	let categoryName = (d) => {
		if (d == 1) return 'Forward';
		else if (d == 2) return 'Back';
		else if (d == 3) return 'Reverse';
		else if (d == 4) return 'Inward';
		else if (d == 5) return 'Twister';
	};

	const pushDives = (num) => {
		let arr = [];
		for (let i = 0; i < diveArr.length; i++) {
			let thisDive = diveArr[i];
			if (thisDive.cat == num) {
				arr.push(thisDive);
			}
		}
		setCatDives(arr);
	};

	return (
		<div className='dm-wrap'>
			<div className='categories-wrap'>
				{diveCat.map((d, index) => {
					return (
						<div
							className='cat-wrap'
							key={index}
							onClick={() => {
								setCategory(d);
								pushDives(d);
								next();
							}}
						>
							{categoryName(d)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CategorySelect;
