import { atom } from 'recoil';

export const categoryAtom = atom({
	key: 'categoryAtom',
	default: '',
});

export const divesAtom = atom({
	key: 'divesAtom',
	default: [],
});
