import { atom } from 'recoil';

// meet info
export const meetInfoAtom = atom({
	key: 'meetInfoAtom',
	default: {
		name: '',
		event: '',
		gender: '',
		judgeAmt: '',
	},
});
export const numDivesAtom = atom({
	key: 'numDivesAtom',
	default: '',
});

export const diversAtom = atom({
	key: 'diversAtom',
	default: [],
});
