import { auth } from './firebase.config';

const loginUserFirebase = async (email, password) => {
	const userCredential = await auth.signInWithEmailAndPassword(
		email,
		password
	);
	console.log(userCredential);
};

const signupUserFirebase = async (email, password) => {
	const userCredential = await auth.createUserWithEmailAndPassword(
		email,
		password
	);

	console.log(userCredential);
};

export { loginUserFirebase, signupUserFirebase, auth };
