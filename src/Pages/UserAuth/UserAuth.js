import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { async } from '@firebase/util';

const UserAuth = () => {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				// auth,
				registerEmail,
				registerPassword
			);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};
	const login = async () => {};
	const logout = async () => {};

	return (
		<div className='ua-wrap'>
			<div>
				<h1>Register User</h1>
				<input
					placeholder='Email'
					onChange={(e) => {
						setRegisterEmail(e.target.value);
					}}
				/>
				<input
					placeholder='Password'
					onChange={(e) => {
						setRegisterPassword(e.target.value);
					}}
				/>
				<button>Create User</button>
			</div>
			<div>
				<h1>Login</h1>
				<input
					placeholder='Email'
					onChange={(e) => {
						setLoginEmail(e.target.value);
					}}
				/>
				<input
					placeholder='Password'
					onChange={(e) => {
						setLoginPassword(e.target.value);
					}}
				/>
				<button>Login</button>
			</div>
		</div>
	);
};

export default UserAuth;

// Amplify.configure(awsconfig);
// const UserAuth = () => {
// 	return (
// 		<div className='userAuth'>
// 			<div>
// 				<Authenticator>
// 					{({ signOut }) => (
// 						<div className='App'>
// 							<button onClick={signOut}>Sign out</button>
// 						</div>
// 					)}
// 				</Authenticator>
// 			</div>
// 			UserAuth
// 		</div>
// 	);
// };
// export default withAuthenticator(UserAuth);
