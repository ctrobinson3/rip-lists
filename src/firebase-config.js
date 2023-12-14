import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyC5_s5Q-pdVNpJAI58rST8ZNjUhmEXdMEo',
	authDomain: 'rip-lists-4b53f.firebaseapp.com',
	projectId: 'rip-lists-4b53f',
	storageBucket: 'rip-lists-4b53f.appspot.com',
	messagingSenderId: '44859382964',
	appId: '1:44859382964:web:83734216c6335058250be1',
	measurementId: 'G-4DQRKBZELN',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
// export const auth = getAuth(app);
