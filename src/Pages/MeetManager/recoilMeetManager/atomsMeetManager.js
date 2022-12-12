import { atom, selector } from 'recoil';

export const futureMeetsQuery = selector({
	key: 'meetQuery',
	get: async () => {
		const url = 'https://my-json-server.typicode.com/ctrobinson3/mockmeet/db';
		const resp = await fetch(url);
		const body = await resp.json();
		return body;
	},
});

export const selectedMeet = atom({
	key: 'selectedMeet',
	default: '',
});

export const runMeet = atom({
	key: 'runMeet',
	default: '',
});
