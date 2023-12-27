import { atom } from 'recoil';

export const categoryAtom = atom({
	key: 'categoryAtom',
	default: '',
});

export const divesAtom = atom({
	key: 'divesAtom',
	default: [],
});

export const isModal = atom({
	key: 'isAtom',
	default: false,
});

export const selectedDiveAtom = atom({
	key: 'selectedDiveAtom',
	default: [],
});
