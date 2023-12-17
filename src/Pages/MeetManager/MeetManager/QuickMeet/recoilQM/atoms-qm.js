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

// run meet

export const meetDataAtom = atom({
	key: 'meetDataAtom',
	default: [],
});

export const judgeAtom = atom({
	key: 'judgeAtom',
	default: 1,
});

export const diverScoreAtom = atom({
	key: 'diverScoreAtom',
	default: [],
});

export const totalScoreAtom = atom({
	key: 'totalScoreAtom',
	default: 0,
});

export const roundAtom = atom({
	key: 'roundAtom',
	default: 0,
});

export const diverOrderAtom = atom({
	key: 'diverOrderAtom',
	default: 0,
});

export const netAtom = atom({
	key: 'netAtom',
	default: 0,
});
